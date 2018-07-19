// @flow

import * as React from 'react'

type Props = {
  children: React.Node
}

class DontReRender extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }
  render() {
    return this.props.children
  }
}

export default DontReRender
