// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { MESSENGER_LINK_WELCOME, MESSENGER_LINK_SAVORING_CONTACT } from '../../constants'
import { isSavoring, cloudImg } from '../../utils'

import './MessengerFixed.css'

type Props = {
  path: string,
}

const MessengerFixed = ({ path }: Props) => (
  <a
    className={s.container}
    href={!isSavoring(path) ? MESSENGER_LINK_WELCOME : MESSENGER_LINK_SAVORING_CONTACT}
    target="_blank"
    rel="nofollow noreferrer noopener"
  >
    <img
      src={cloudImg('adamgoldman.me/messenger')}
      alt="Messenger Link"
    />
  </a>
)

export default withStyles(s)(MessengerFixed)
