// @flow

import React from 'react'

type Props = {
  children?: any,
}

const ExternalA = (props: Props) => (
  <a {...props} target='_blank' rel='nofollow noreferrer noopener'>
    {props.children}
  </a>
)

ExternalA.defaultProps = {
  children: null,
}

export default ExternalA
