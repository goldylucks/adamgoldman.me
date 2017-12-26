// @flow

import React from 'react'
import FA from 'react-fontawesome'

type Props = {
  children: any,
  isRtl?: boolean,
}

const Answer = ({ children, isRtl }: Props) => (
  <div className={`tool-answer ${!isRtl ? '' : 'rtl'}`}>
    {isRtl
      ? <FA name="hand-o-left" style={{ marginLeft: 10 }} />
      : <FA name="hand-o-right" style={{ marginRight: 10 }} />}
    {children}
  </div>
)

Answer.defaultProps = {
  isRtl: false,
}

export default Answer
