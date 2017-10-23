import React from 'react';
import ReactMarkdown from 'react-markdown';

import { MESSENGER_LINK } from '../../constants';
import FbShareLink from '../FbShareLink';
import Link from '../Link';

class Markdown extends React.Component {
  render() {
    return (
      <ReactMarkdown
        {...this.props}
        renderers={{
          Link: linkProps => {
            if (linkProps.href.indexOf('STRIKE') === 0) {
              return <s>{linkProps.children}</s>;
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
              );
            }

            if (linkProps.href.match('EMAIL')) {
              const newRef = 'mailto:goldy@adamgoldman.me';
              return (
                <a
                  href={newRef}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {linkProps.children}
                </a>
              );
            }

            if (linkProps.href.match('FB_SHARE')) {
              return <FbShareLink>{linkProps.children}</FbShareLink>;
            }

            if (linkProps.href.match('FB_PROFILE')) {
              const newRef = 'https://www.facebook.com/adamgoldman47';
              return (
                <a
                  href={newRef}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {linkProps.children}
                </a>
              );
            }

            if (linkProps.href.match('FB_MESSAGE')) {
              const newRef = MESSENGER_LINK;
              return (
                <a
                  href={newRef}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {linkProps.children}
                </a>
              );
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
              );
            }

            return <Link to={linkProps.href}>{linkProps.children}</Link>;
          },
        }}
      />
    );
  }
}

export default Markdown;
