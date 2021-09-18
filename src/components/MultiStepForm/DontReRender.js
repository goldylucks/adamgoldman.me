// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
  currentStepNum: number
}

class DontReRender extends React.Component<Props> {
  shouldComponentUpdate(nextProps) {
    return this.props.currentStepNum !== nextProps.currentStepNum
  }
  render() {
    return this.props.children
  }
}

export default DontReRender
