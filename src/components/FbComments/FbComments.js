// @flow

import React from 'react'

import { DOMAIN } from '../../constants'
import { isProd, noop } from '../../utils'

class FbComments extends React.Component {
  state = {
    href: '',
    rendered: false,
  };

  componentDidMount() {
    this.reloadFB()
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
    const { ...restProps } = this.props
    const opacity = this.state.rendered ? 1 : 0

    return (
      <section {...restProps}>
        <hr />
        <h1 style={{ textAlign: 'center' }}>Join the conversation!</h1>
        <div
          style={{
            minHeight: 180,
            opacity,
            background: '#fff',
            transition: '0.5s opacity',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            borderRadius: 5,
          }}
          ref={(el) => {
            this.elem = el
          }}
        >
          <div
            className="fb-comments"
            data-href={this.state.href}
            data-numposts="5"
            data-width="710"
            data-colorscheme="dark"
          />
        </div>
      </section>
    )
  }

  elem = null;
  timeoutFb = null;
  timeoutFbRender = null;


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
    };
}

export default isProd ? FbComments : noop

