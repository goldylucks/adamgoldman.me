// @flow

import React from 'react'

import { scrollToElem } from '../../utils'

type Props = {
  style: '',
  text: '',
}

class GetStarted extends React.Component {
  props: Props

  render() {
    return (
      <div>
        <a
          href="#typeform"
          onClick={this.goToElement}
          className={`btn btn-primary ${this.props.style}`} >
          {this.props.text}
        </a>
      </div>
    )
  }
  goToElement = () => {
    scrollTop()
  }
}

export default GetStarted

function scrollTop() {
  return scrollToElem(document.querySelector('html'), 0, 300)
}
