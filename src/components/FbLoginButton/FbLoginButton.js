// @flow

import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import axios from 'axios'

type Props = {
  onLogin: Function,
  onLogout: Function,
  user: Object,
  text?: string,
}

class FbLoginButton extends React.Component {
  static defaultProps = {
    text: 'Login',
  }

  props: Props

  render() {
    const { user, onLogout, text } = this.props
    if (user._id) {
      return <a onClick={onLogout}>Logout</a>
    }
    return (
      <div onClick={this.loginHandler} style={{ cursor: 'pointer' }}>
        <FontAwesomeIcon icon={faFacebookF} /> {text}
      </div>
    )
  }

  loginHandler = () => {
    global.FB.login(this.fbLogin, { scope: 'email,public_profile' })
  }

  fbLogin = (response) => {
    if (response.status !== 'connected') {
      global.alert('please authorize login to continue')
      return
    }
    const { accessToken, userID } = response.authResponse
    global.FB.api('/me?fields=id,name,picture',
      ({ name, picture }) => {
        this.userServerLogin({
          fbUserId: userID, fbClientAccessToken: accessToken, name, picture,
        })
      },
    )
  }

  userServerLogin = (user) => {
    if (user.picture && user.picture.data && user.picture.data.url) {
      user.fbPictureUrl = user.picture.data.url
    }
    axios.post('/api/users/fbAuth', user)
      .then((serverRes) => { this.props.onLogin(serverRes.data) })
      .catch((err) => {
        global.console.error(err)
        global.alert('there was an error, please contact me')
      })
  }
}

export default FbLoginButton
