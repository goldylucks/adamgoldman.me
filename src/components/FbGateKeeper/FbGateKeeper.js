// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import FbLoginbutton from '../FbLoginButton'

import s from './FbGateKeeper.css'

type Props = {
  user: Object,
  onLogin: Function,
  onLogout: Function,
}

const FbGateKeeper = ({ onLogin, onLogout, user }: Props) => (
  <div className={s.FbGateKeeperContainer} >
    <div className={s.FbGateKeeperButton} >
      <FbLoginbutton onLogin={onLogin} onLogout={onLogout} user={user} text="Click to Get Started" />
    </div>
  </div>
)

export default withStyles(s)(FbGateKeeper)
