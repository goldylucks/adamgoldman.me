// @flow

import React from 'react'

type Props = {
  onSubmit: Function
}

class Typeform extends React.Component {
  componentDidMount() {
    /* eslint-disable */
    let qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = 'typef_orm', b = 'https://embed.typeform.com/';
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script'); js.id = id; js.src = `${b}embed.js`; q = gt.call(d, 'script')[0]; q.parentNode.insertBefore(js, q)
    } else {
      typeformEmbed.makeWidget(this.el, this.props['data-url'], {
        hideHeaders: true,
        hideFooter: true,
      })
    }
    /* eslint-enable */
    window.addEventListener('message', this.onWindowMessage)
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.onWindowMessage)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps['data-url'] !== this.props['data-url']) {
      /* eslint-disable */
      typeformEmbed.makeWidget(this.el, this.props['data-url'], {
        hideHeaders: true,
        hideFooter: true,
      })
    }
  }

  props: Props

  render() {
    return (
      <div
        ref={(el) => { this.el = el }}
        className="typeform-widget"
        {...this.props}
      />
    )
  }

  onWindowMessage = (evt) => {
    if (evt.origin !== 'https://adamgoldman.typeform.com') {
      return
    }
    if (evt.data !== 'form-submit') {
      return
    }
    this.props.onSubmit()
  }
}

export default Typeform
