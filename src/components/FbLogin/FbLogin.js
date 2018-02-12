// @flow

import React from 'react'
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'

import { FB_APP_ID } from '../../constants'

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
      return <div style={{ height: 104 }} />
    }
    return (
      <FacebookLogin
        appId={FB_APP_ID}
        fields="name,picture"
        callback={this.responseFacebook}
        icon="fa-facebook"
        textButton=" Login"
        cssClass={this.props.className}
      />
    )
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
