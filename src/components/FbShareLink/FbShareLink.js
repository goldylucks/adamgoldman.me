// @flow

import React from 'react'

type Props = {
  children: any,
}

class FbShareLink extends React.Component {
  state = {
    href: '',
  }

  componentDidMount() {
    this.setHref()
  }

  props: Props

  render() {
    return (
      <a
        rel='nofollow noreferrer noopener'
        target='_blank'
        href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.href}`}
      >
        {this.props.children}
      </a>
    )
  }

  setHref = () => {
    if (typeof window === 'undefined') {
      setTimeout(this.setHref, 500)
      return
    }
    this.setState({ href: window.location.href })
  }
}

export default FbShareLink
