import React from 'react';

const ExternalA = props => (
  <a {...props} target="_blank" rel="nofollow noreferrer noopener">
    {props.children}
  </a>
);

ExternalA.defaultProps = {
  children: null,
};

export default ExternalA;
