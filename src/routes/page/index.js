import React from 'react'

import Layout from '../../components/Layout'

import Page from './Page'

async function action({ params }) {
  const path = getPath(params.page)
  const page = await import(`../../pages/${params.page}.js`)
    .then(module => module.default) // use an object from `export default`
    .catch((error) => {
      if (error.message.startsWith('Cannot find module')) {
        return null // module (page) does not exists
      }
      throw error // loading chunk failed (render error page)
    })
  if (!page) return null // go to next route (or render 404)
  return {
    title: page.title,
    description: page.description,
    path,
    component: (
      <Layout path={path}>
        <Page path={path} {...page} />
      </Layout>
    ),
  }
}

export default action

function getPath(page) {
  return page.match(/pricing|tools/)
    ? `/${page}`
    : `/${page}/`
}
