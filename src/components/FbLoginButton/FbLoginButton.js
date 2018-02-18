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
      <div onClick={this.login} style={{ cursor: 'pointer' }}>
        <FA name="facebook" /> {text}
      </div>
    )
  }

  login = () => {
    global.FB.login(this.responseApi, { scope: 'email,public_profile' })
  }

  responseFacebook = (response) => {
    if (response.picture && response.picture.data && response.picture.data.url) {
      response.fbPictureUrl = response.picture.data.url
    }
    axios.post('/api/users/fbAuth', response)
      .then((serverRes) => {
        global.console.log('serverRes', serverRes)
        this.props.onLogin(serverRes.data)
      })
      .catch((err) => {
        global.console.error(err)
        global.alert('there was an error, please contact me')
      })
  }

  responseApi = () => {
    global.FB.api('/me?fields=id,name,picture',
      (response) => {
        this.responseFacebook({ userID: response.id, ...response })
      },
    )
  }
}

export default FbLoginButton
