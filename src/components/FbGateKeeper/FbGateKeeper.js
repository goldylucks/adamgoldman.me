// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import FbLoginbutton from '../FbLoginButton'

import s from './FbGateKeeper.css'

type Props = {
  onLogin: Function,
  onLogout: Function,
}

const FbGateKeeper = ({ onLogin, onLogout }: Props) => (
  <div className={s.FbGateKeeperContainer}>
    <div className={s.FbGateKeeperButton}>
      <FbLoginbutton onLogin={onLogin} onLogout={onLogout} text="Click to Get Started" />
    </div>
  </div>
)

export default withStyles(s)(FbGateKeeper)
