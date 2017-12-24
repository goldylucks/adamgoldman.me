import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { MESSENGER_LINK } from '../../constants'

import s from './MessengerFixed.css'

const MessengerFixed = () => (
  <a
    className={s.container}
    href={MESSENGER_LINK}
    target="_blank"
    rel="nofollow noreferrer noopener"
  >
    <img
      src="https://cdn.supple.com.au/wp-content/themes/supple/img/msg.png"
      alt="Messenger Link"
    />
  </a>
)

export default withStyles(s)(MessengerFixed)
