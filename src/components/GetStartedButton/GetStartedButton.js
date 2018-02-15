// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToElem } from '../../utils'

import s from './GetStartedButton.css'

type Props = {
  text?: string,
}

class GetStartedButton extends React.Component {
  static defaultProps = {
    text: 'Get Started',
  }

  props: Props

  render() {
    return (
      <div>
        <a onClick={this.goToElement} className={`btn btn-primary ${s.ctaButton}`} >
          {this.props.text}
        </a>
      </div>
    )
  }
  goToElement = () => scrollToElem(document.querySelector('html'), 0, 300)
}

export default withStyles(s)(GetStartedButton)
