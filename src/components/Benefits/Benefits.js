// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'

import s from './Benefits.css'

type Props = {
  benefits: Array<String>,
}

const Benefits = ({ benefits }: Props) => benefits.map(b => (
  <div className={s.benefit}><FontAwesomeIcon icon={faCheck} />{b}</div>
))

export default withStyles(s)(Benefits)
