// @flow

import React from 'react'

import FbLogin from '../FbLogin/index'

class FbLoginButton extends React.Component {
  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    const userData = localStorage.getItem('fbUserId')
    console.log(userData, 'local')
    if (userData) {
      this.setState({ isLoggedIn: true }) // eslint-disable-line react/no-did-mount-set-state
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        { !this.state.isLoggedIn
          ? <FbLogin className="nav-link btn btn-primary btn-sm" />
          : <span className="nav-link btn btn-primary btn-sm" onClick={this.handleLogout}>Logout</span>
        }
      </div>
    )
  }

  handleLogout = () => {
    localStorage.clear()
  }
}

export default FbLoginButton
