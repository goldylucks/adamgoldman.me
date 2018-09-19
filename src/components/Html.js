/* eslint-disable react/prefer-stateless-function */

import React from 'react'
import PropTypes from 'prop-types'
import serialize from 'serialize-javascript'

import config from '../config'
import { cloudImg } from '../utils'
import { DOMAIN, FB_APP_ID } from '../constants'

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const {
      title,
      description,
      path,
      styles,
      scripts,
      app,
      children,
    } = this.props
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="url" content={DOMAIN + path} />
          <meta property="og:url" content={DOMAIN + path} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Adam Goldman" />
          <meta name="owner" content="Adam Goldman" />
          <meta name="copyright" content="Adam Goldman" />
          <meta name="language" content="EN" />
          <meta name="robots" content="index,follow" />
          <meta
            name="subject"
            content="Adam Goldman's adventures and brain explorations"
          />
          <meta
            property="og:image"
            content={`${cloudImg('adamgoldman.me/profile-smiling')}.jpg`}
          />
          <meta property="og:site_name" content="Adam Goldman" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content={FB_APP_ID} />
          {scripts.map(script => (
            <link key={script} rel="preload" href={script} as="script" />
          ))}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css" />
          <link href="https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet" />
          <link rel="stylesheet" href="/main.css" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          {styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
          {/* Hotjar Tracking Code for https://www.adamgoldman.me/ */}
          <script
            dangerouslySetInnerHTML={{
                __html:
                    `(function hotjar(h, o, t, j, a, r) {
                      h.hj = h.hj || function hotjarInner() { (h.hj.q = h.hj.q || []).push(arguments) }
                      h._hjSettings = { hjid: 896952, hjsv: 6 }
                      a = o.getElementsByTagName('head')[0]
                      r = o.createElement('script'); r.async = 1
                      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
                      a.appendChild(r)
                    }(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv='))`,
              }}
          />
          {/* adwords conversion start */}
          <script
            src="https://www.googletagmanager.com/gtag/js?id=AW-842400866"
            async
            defer
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
              `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'AW-842400866');`,
            }}
          />
          {/* adwords conversion end */}

          {/* FB pixel start */}
          <script
            dangerouslySetInnerHTML={{
              __html:
              `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                
                fbq('init', '1153228348161182');
                fbq('track', 'PageView');`,
            }}
          />
          {/* FB pixel end */}
        </head>
        <body>
          <div id="fb-root" />
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} />)}
          {config.analytics.googleTrackingId && (
            <script
              dangerouslySetInnerHTML={{
                __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${config.analytics
                    .googleTrackingId}','auto');ga('send','pageview')`,
              }}
            />
          )}
          {config.analytics.googleTrackingId && (
            <script
              src="https://www.google-analytics.com/analytics.js"
              async
              defer
            />
          )}
        </body>
      </html>
    )
  }
}

export default Html
