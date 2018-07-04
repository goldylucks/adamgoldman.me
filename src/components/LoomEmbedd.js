// @flow

import React from 'react'

type Props = {
  src: string,
}

class LoomEmbedd extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    return nextProps.src !== this.props.src
  }
  render() {
    const { src } = this.props
    return (
      <iframe
        title={`Loom embedd of ${src}`}
        style={{ margin: '60px auto', display: 'block' }}
        width="100%"
        height="340"
        src={`https://www.useloom.com/embed/${src}`}
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    )
  }
}

export default LoomEmbedd
