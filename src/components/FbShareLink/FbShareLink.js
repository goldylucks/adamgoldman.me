// @flow

import React from 'react';

import { DOMAIN } from '../../constants';

// eslint-disable-next-line react/require-default-props
const FbShareLink = ({ children }: { children?: any }) => (
  <a
    rel="nofollow noreferrer noopener"
    target="_blank"
    href={`https://www.facebook.com/sharer/sharer.php?u=${DOMAIN}`}
  >
    {children}
  </a>
);

export default FbShareLink;
