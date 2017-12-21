// @flow

import React from 'react'

import { DOMAIN } from '../../constants'
import history from '../../history'
import { isProd, noop } from '../../utils'

type Props = {
  urlProp?: string, // eslint-disable-line react/require-default-props
};

class FbShareButton extends React.Component {
  state = {
    pathname: '',
    rendered: false,
  };

  componentDidMount() {
    this.reloadFB()
    if (!this.props.urlProp) {
      this.unlisten = history.listen(() => {
        this.reloadFB()
      })
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten()
    }
    clearTimeout(this.timeoutFb)
    clearTimeout(this.timeoutFbRender)
  }

  props: Props;

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

  elem = null;
  timeoutFb = null;
  timeoutFbRender = null;

  urlToShare() {
    return DOMAIN + (this.props.urlProp ? this.props.urlProp : this.state.pathname)
  }

  encodedUrlToShare() {
    return encodeURIComponent(this.urlToShare())
  }

  reloadFB = () => {
    if (!global.FB) {
      this.timeoutFb = setTimeout(this.reloadFB, 500)
      return
    }
    this.setState({ pathname: window.location.pathname }, () => {
      global.FB.XFBML.parse(this.elem, () => {
        this.timeoutFbRender = setTimeout(() => {
          this.setState({ rendered: true })
        }, 1000)
      })
    })
  }
}

export default isProd ? FbShareButton : noop
