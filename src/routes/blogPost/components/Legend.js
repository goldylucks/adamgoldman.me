// @flow

import React from 'react'
import cx from 'classnames'

import Markdown from '../../../components/Markdown'

type Props = {
  name: string,
  isBodyRtl: boolean,
}

const Legend = ({ name, isBodyRtl }: Props) => (
  <article>
    <h1>Legend</h1>

    <h2>This is an example of a section headline</h2>
    <div className={cx('chat-message-container clearfix other', { rtl: isBodyRtl })}>
      <div className="chat-message">
    This is an example of {name}&apos;s message from our conversation
      </div>
    </div>

    <div className={cx('chat-message-container clearfix adam', { rtl: isBodyRtl })}>
      <div className="chat-message">
    This is an example of my messages from our conversation
      </div>
    </div>

    <Markdown className="transcript-comment" source="This is an example of my comment ABOUT the conversation" />
  </article>
)

export default Legend
