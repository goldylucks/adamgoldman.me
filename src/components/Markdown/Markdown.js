import React from 'react';
import ReactMarkdown from 'react-markdown';

import { DOMAIN } from '../../constants';
import Link from '../Link';

const Markdown = props => (
  <ReactMarkdown
    {...props}
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
            <a href={newRef} target="_blank" rel="nofollow noreferrer noopener">
              {linkProps.children}
            </a>
          );
        }

        if (linkProps.href.match('FB_SHARE')) {
          const newRef = `https://www.facebook.com/sharer/sharer.php?u=${DOMAIN}`;
          return (
            <a href={newRef} target="_blank" rel="nofollow noreferrer noopener">
              {linkProps.children}
            </a>
          );
        }

        if (linkProps.href.match('FB_PROFILE')) {
          const newRef = 'https://www.facebook.com/adamgoldman47';
          return (
            <a href={newRef} target="_blank" rel="nofollow noreferrer noopener">
              {linkProps.children}
            </a>
          );
        }

        if (linkProps.href.match('FB_MESSAGE')) {
          const newRef = 'https://m.me/adamgoldman47';
          return (
            <a href={newRef} target="_blank" rel="nofollow noreferrer noopener">
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

export default Markdown;
