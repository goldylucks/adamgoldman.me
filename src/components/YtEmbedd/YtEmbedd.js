// @flow

import React from 'react'

type Props = {
  src: string,
}

const YtEmbedd = ({ src }: Props) => (
  <iframe
    title={`Youtube embedd of ${src}`}
    style={{ margin: '60px auto', display: 'block' }}
    width="100%"
    height="340"
    src={`https://www.youtube.com/embed/${src}?modestbranding=1&rel=0`}
    frameBorder="0"
    allowFullscreen
  />
)

export default YtEmbedd
