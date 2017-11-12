// @flow

import React from 'react'

import { DOMAIN } from '../../constants'
import { isProd, noop } from '../../utils'

type Props = {
  urlProp?: string, // eslint-disable-line react/require-default-props
};

class FbShareButton extends React.Component {
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

  elem = null;
  timeoutFb = null;
  timeoutFbRender = null;

  props: Props;

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

  render() {
    const { ...restProps } = this.props
    const opacity = this.state.rendered ? 1 : 0
    delete restProps.urlProp

    return (
      <div {...restProps}>
        <div
          style={{ height: 28, opacity, transition: '0.5s opacity' }}
          ref={(el) => {
            this.elem = el
          }}
        >
          <div
            className="fb-share-button"
            data-href={this.urlToShare()}
            data-layout="button_count"
            data-size="large"
            data-mobile-iframe="true"
          />
        </div>
      </div>
    )
  }
}

export default isProd ? FbShareButton : noop
