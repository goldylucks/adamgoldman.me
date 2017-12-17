// @flow

/* eslint-disable max-len */

import React from 'react'

type Props = {
  explicitContent: string,
}

const ExplicitWarning = ({ explicitContent }: Props) => (
  <span style={{ display: 'block', border: '2px dotted #ff5656', padding: 20 }}>
    <span style={{
 display: 'block', color: '#ff5656', fontSize: 38, lineHeight: '44px', fontWeight: 'bold',
}}
    >Warning - Explicit content
    </span>
    <span>The following page may include some graphic descriptions of explicit content including {explicitContent}</span>
  </span>
)

export default ExplicitWarning
