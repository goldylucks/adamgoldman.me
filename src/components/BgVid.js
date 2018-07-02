// @flow

import React, { Component } from 'react'

// my mocked vid hosted on cloudinary
// const HP_VIDEO_SRC = 'https://res.cloudinary.com/goldylucks/video/upload/v1530530492/hp-bg_mskmxx.mp4'
// handle fallback background image (might be with poster attribute)

type Props = {
  src: string
}
class BgVid extends Component<Props> {
  render() {
    const { src } = this.props
    return (
      <video autoPlay loop id="video-background" muted plays-inline>
        <source src={src} type="video/mp4" />
      </video>

    )
  }
}

export default BgVid
