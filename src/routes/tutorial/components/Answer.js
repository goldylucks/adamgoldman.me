// @flow

import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import handPointsLeft from '@fortawesome/fontawesome-free-regular/faHandPointLeft'
import handPointsRight from '@fortawesome/fontawesome-free-regular/faHandPointRight'

type Props = {
  children: any,
  isRtl?: boolean,
}

const Answer = ({ children, isRtl }: Props) => (
  <div className={`tool-answer ${!isRtl ? '' : 'rtl'}`}>
    {isRtl
      ? <FontAwesomeIcon icon={handPointsLeft} style={{ marginLeft: 10 }} />
    : <FontAwesomeIcon icon={handPointsRight} style={{ marginRight: 10 }} />}
    {children}
  </div>
)

Answer.defaultProps = {
  isRtl: false,
}

export default Answer
