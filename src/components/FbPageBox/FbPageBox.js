// @flow

import React from 'react'

class FbPageBox extends React.Component {
  state = {
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

  reloadFB = () => {
    if (!global.FB) {
      this.timeoutFb = setTimeout(this.reloadFB, 500)
      return
    }
    global.FB.XFBML.parse(this.elem, () => {
      this.timeoutFbRender = setTimeout(() => {
        this.setState({ rendered: true })
      }, 1000)
    })
  };

  render() {
    const opacity = this.state.rendered ? 1 : 0
    return (
      <div
        style={{ height: 250, opacity, transition: '0.5s opacity' }}
        ref={(el) => {
          this.elem = el
        }}
      >
        <div
          {...this.props}
          className="fb-page"
          data-href="https://www.facebook.com/adamgoldman.me"
          data-tabs="messages"
          data-height="250"
          data-small-header="true"
        />
      </div>
    )
  }
}

export default FbPageBox
