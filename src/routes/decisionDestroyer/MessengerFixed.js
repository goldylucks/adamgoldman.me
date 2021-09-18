// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { MESSENGER_LINK_DECISION_DESTROYER_HP } from '../../constants'
import { cloudImg } from '../../utils'

import './MessengerFixed.css'

const MessengerFixed = () => (
  <a
    className={s.container}
    href={MESSENGER_LINK_DECISION_DESTROYER_HP}
    target='_blank'
    rel='nofollow noreferrer noopener'
  >
    <img src={cloudImg('adamgoldman.me/messenger')} alt='Messenger Link' />
  </a>
)

export default withStyles(s)(MessengerFixed)
