// @flow

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'

import { fbAuth } from '../../utils/fbUtils'

type Props = {
  onLogin: Function,
  onLogout: Function,
  user?: Object,
  text?: string,
}

// eslint-disable-next-line react/prefer-stateless-function
class FbLoginButton extends React.Component {
  static defaultProps = {
    text: 'Login',
    user: {},
  }

  props: Props

  render() {
    const { user, onLogout, text } = this.props
    if (user._id) {
      return <a onClick={onLogout}>Logout</a>
    }
    return (
      <div
        onClick={() => fbAuth(this.props.onLogin)}
        style={{ cursor: 'pointer' }}
      >
        <FontAwesomeIcon icon={faFacebookF} /> {text}
      </div>
    )
  }
}

export default FbLoginButton
