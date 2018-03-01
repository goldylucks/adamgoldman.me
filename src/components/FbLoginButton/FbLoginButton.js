// @flow

import React from 'react'
import FA from 'react-fontawesome'
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
        <FA name="facebook" /> {text}
      </div>
    )
  }

  loginHandler = () => {
    global.FB.login(this.checkLoginState, { scope: 'email,public_profile' })
  }

  checkLoginState = (response) => {
    if (response.authResponse) {
      this.responseApi(response.authResponse)
    } else {
      global.console.log('Login error')
    }
  }

  responseApi = () => {
    global.FB.api('/me?fields=id,name,picture',
      (response) => {
        this.responseFacebook({ userID: response.id, ...response })
      },
    )
  }

  responseFacebook = (response) => {
    if (response.picture && response.picture.data && response.picture.data.url) {
      response.fbPictureUrl = response.picture.data.url
    }
    axios.post('/api/users/fbAuth', response)
      .then((serverRes) => {
        this.props.onLogin(serverRes.data)
      })
      .catch((err) => {
        global.console.error(err)
        global.alert('there was an error, please contact me')
      })
  }
}

export default FbLoginButton
