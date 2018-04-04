import path from 'path'

import mongoose from 'mongoose'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import React from 'react'
import ReactDOM from 'react-dom/server'
import PrettyError from 'pretty-error'
import cors from 'cors'
import morgan from 'morgan'
import slash from 'connect-slashes'

import api from './server/api'
import App from './components/App'
import Html from './components/Html'
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage'
import errorPageStyle from './routes/error/ErrorPage.css'
import createFetch from './createFetch'
import router from './router'
import assets from './assets.json' // eslint-disable-line import/no-unresolved
import config from './config'

mongoose.Promise = global.Promise
const app = express()

mongoose.connect(config.dbUrl)

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

if (config.env === 'production') {
  app.use(forceSsl)
}

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(slash(false))

app.use(permanentRedirectsMiddleware)

if (__DEV__) { // eslint-disable-line no-undef
  app.use(morgan('tiny'))
  app.enable('trust proxy')
  if (process.argv.includes('--seed')) {
    require('./server/seedDb') // eslint-disable-line global-require
  }
}

app.get('/book-session', (req, res) => {
  res.status(301).redirect('https://m.me/adamgoldman.me?ref=book-session')
})

app.get('/contact', (req, res) => {
  res.status(301).redirect('https://m.me/adamgoldman.me?ref=welcome')
})

app.get('/savoring-your-child/contact', (req, res) => {
  res.status(301).redirect('https://m.me/adamgoldman.me?ref=savoring-contact-button')
})

//
// Register API
//

app.use('/api', api)
//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set()

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()))
      },
      // Universal HTTP client
      fetch: createFetch(fetch, {
        baseUrl: config.api.serverUrl,
        cookie: req.headers.cookie,
      }),
    }

    const route = await router.resolve({
      ...context,
      pathname: req.path,
      query: req.query,
    })

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect)
      return
    }

    const data = { ...route }
    data.children = ReactDOM.renderToString(<App context={context}>{route.component}</App>)
    data.styles = [{ id: 'css', cssText: [...css].join('') }]
    data.scripts = [assets.vendor.js]
    if (route.chunks) {
      data.scripts.push(...route.chunks.map(chunk => assets[chunk].js))
    }
    data.scripts.push(assets.client.js)
    data.app = {
      apiUrl: config.api.clientUrl,
    }

    // pass to HTML initial meta tags to render!
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)
    res.status(route.status || 200)
    res.send(`<!doctype html>${html}`)
  } catch (err) {
    next(err)
  }
})

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError()
pe.skipNodeFiles()
pe.skipPackage('express')

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err)) // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]}
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  )

  res.status(err.status || 500)
  res.send(`<!doctype html>${html}`)
})

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
  app.listen(config.port, () => {
    console.info(`The server is running at http://localhost:${config.port}/`) // eslint-disable-line no-console
  })
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot
  module.hot.accept('./router')
}

export default app

function forceSsl(req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  return next()
}

function permanentRedirectsMiddleware(req, res, next) {
  if (req.originalUrl === '/tools/internal-dialog-scrambeler') {
    res.redirect(301, '/tools/internal-dialog-scrambler')
  } else if (req.originalUrl === '/tools/grief-to-appreciation') {
    res.redirect(301, '/tools/reunion')
  } else {
    next()
  }
}
