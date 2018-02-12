// @flow

import React from 'react'

import FbLogin from '../FbLogin/index'

type Props = {
  onLogin: Function,
  onLogout: Function,
  user: Object,
}

const FbLoginButton = ({ onLogin, onLogout, user }: Props) => (
  <div>
    { !user._id
          ? <FbLogin onLogin={onLogin} />
        : <a onClick={onLogout}>Logout</a>
        }
  </div>
)

export default FbLoginButton
