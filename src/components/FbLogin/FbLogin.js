// @flow

import React from 'react'
import FA from 'react-fontawesome'
import axios from 'axios'

type Props = {
  onLogin: Function,
  className: String,
}

class FbLogin extends React.Component {
  state = {
    isMounted: false,
  }

  componentDidMount() {
    this.setState({ isMounted: true }) // eslint-disable-line react/no-did-mount-set-state
  }

  props: Props

  render() {
    // workaround for SSR, react-facebook-login doesn't support it
    if (!this.state.isMounted) {
      return <div > <FA name="facebook" /> Login </div>
    }
    return (
      <div onClick={this.login} className={this.props.className} style={{ cursor: 'pointer' }}>
        <FA name="facebook" /> Login
      </div>
    )
  }

  login = () => {
    /* global FB */
    FB.login(this.responseFacebook, { scope: 'email,public_profile' })
  }

  responseFacebook = (response) => {
    if (response.picture && response.picture.data && response.picture.data.url) {
      response.fbPictureUrl = response.picture.data.url
    }
    axios.post('/api/users/fbAuth', response)
      .then((serverRes) => {
        console.log('serverRes', serverRes)
        this.props.onLogin(serverRes.data)
      })
      .catch((err) => {
        console.error(err)
        alert('there was an error, please contact me')
      })
  }
}

export default FbLogin
