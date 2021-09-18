// @flow

import React from 'react'

import { DOMAIN } from '../../constants'

class FbComments extends React.Component {
  state = {
    href: '',
    rendered: false,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.rendered !== this.state.rendered
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutFb)
    clearTimeout(this.timeoutFbRender)
  }

  props: Props

  render() {
    return null
  }

  elem = null
  timeoutFb = null
  timeoutFbRender = null

  urlToShare() {
    return this.props.urlProp ? DOMAIN + this.props.urlProp : this.state.href
  }

  encodedUrlToShare() {
    return encodeURIComponent(this.urlToShare())
  }

  reloadFB = () => {
    if (!global.FB) {
      this.timeoutFb = setTimeout(this.reloadFB, 500)
      return
    }
    this.setState({ href: window.location.href }, () => {
      global.FB.XFBML.parse(this.elem, () => {
        this.timeoutFbRender = setTimeout(() => {
          this.setState({ rendered: true })
        }, 1000)
      })
    })
  }
}

export default FbComments
