import React from 'react'
import ReactMarkdown from 'react-markdown'

import { FB_REVIEWS, EMAIL } from '../../constants'
import FbShareLink from '../FbShareLink'
import Link from '../Link'
import FbReview from '../FbReview'
import YtEmbedd from '../YtEmbedd'
import LoomEmbedd from '../LoomEmbedd'
import ExplicitWarning from '../ExplicitWarning'

const Markdown = props => (
  <ReactMarkdown
    {...props}
    renderers={{
          Link: (linkProps) => {
            if (linkProps.href === 'explicitWarning') {
              return <ExplicitWarning explicitContent={linkProps.children} />
            }

            if (linkProps.href === 'YtEmbedd') {
              return <YtEmbedd src={linkProps.children} />
            }

            if (linkProps.href === 'LoomEmbedd') {
              return <LoomEmbedd src={linkProps.children} />
            }

            if (linkProps.href === 'iframe') {
              return <FbReview review={linkProps.children} />
            }

            if (linkProps.href.match(/^adam$|^other$/)) {
              const href = linkProps.children[1]
              if (href && href.includes && href.includes('://')) {
                return (
                  <span
                    className={`chat-message-container clearfix ${linkProps.href}`}
                  >
                    <span className="chat-message">
                      <a
                        href={href}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                      >
                        {href}
                      </a>
                    </span>
                  </span>
                )
              }
              return (
                <span
                  className={`chat-message-container clearfix ${linkProps.href}`}
                >
                  <span className="chat-message">{linkProps.children}</span>
                </span>
              )
            }

            if (linkProps.href.indexOf('STRIKE') === 0) {
              return <s>{linkProps.children}</s>
            }

            if (linkProps.href.indexOf('TITLE_') === 0) {
              return (
                <span
                  data-title={linkProps.href
                    .replace('TITLE_', '')
                    .replace(/_/g, ' ')}
                >
                  {linkProps.children}
                </span>
              )
            }

            if (linkProps.href.match('EMAIL')) {
              return (
                <a
                  href={`mailto:${EMAIL}`}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {linkProps.children}
                </a>
              )
            }

            if (linkProps.href.match('FB_SHARE')) {
              return <FbShareLink>{linkProps.children}</FbShareLink>
            }

            if (linkProps.href.match('FB_REVIEWS')) {
              return (
                <a
                  href={FB_REVIEWS}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {linkProps.children}
                </a>
              )
            }

            if (linkProps.href.match('http')) {
              return (
                <a
                  href={linkProps.href}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {linkProps.children}
                </a>
              )
            }

            if (linkProps.href.match(/NEW$/)) {
              return (
                <a
                  href={linkProps.href.replace(/NEW$/, '')}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {linkProps.children}
                </a>
              )
            }

            return <Link to={linkProps.href}>{linkProps.children}</Link>
          },
        }}
  />
)

export default Markdown
