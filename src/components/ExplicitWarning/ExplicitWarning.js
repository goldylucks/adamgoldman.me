// @flow

/* eslint-disable max-len */

import React from 'react'

type Props = {
  explicitContent: string,
}

const ExplicitWarning = ({ explicitContent }: Props) => (
  <article style={{ border: '2px dotted #ff5656', padding: 20 }}>
    <h1 style={{ color: '#ff5656' }}>Warning - Explicit content</h1>
    <p>The following page may include some graphic descriptions of explicit content including {explicitContent}</p>
  </article>
)

export default ExplicitWarning
