// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToElem } from '../../utils'

import './GetStartedButton.css'

type Props = {
  text?: string,
}

class GetStartedButton extends React.Component {
  static defaultProps = {
    text: 'Get Started',
  }

  props: Props

  render() {
    const { text, ...remainingProps } = this.props
    return (
      <div {...remainingProps}>
        <a
          onClick={this.goToElement}
          className={`btn btn-primary ${s.ctaButton}`}
        >
          {this.props.text}
        </a>
      </div>
    )
  }
  goToElement = () =>
    scrollToElem(
      document.querySelector('html'),
      document.body.scrollHeight,
      1000,
    )
}

export default withStyles(s)(GetStartedButton)
