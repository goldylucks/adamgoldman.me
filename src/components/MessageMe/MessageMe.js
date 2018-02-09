// @flow

import React from 'react'

import { MESSENGER_LINK } from '../../constants'

const MessageMe = () => (
  <div className="text-center">
    <h1>Still got questions?</h1>
    <a
      href={MESSENGER_LINK}
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        src="http://dnjuvu1aivgsx.cloudfront.net/blog/Feedback/message-me.png"
        style={{ maxWidth: '100%' }}
        alt="Message Me"
      />
      <img
        src="https://cdn.supple.com.au/wp-content/themes/supple/img/msg.png"
        alt="Messenger Link"
      />
    </a>
  </div>
)

export default MessageMe
