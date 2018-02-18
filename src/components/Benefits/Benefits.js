// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import FA from 'react-fontawesome'

import s from './Benefits.css'

type Props = {
  benefits: Array<String>,
}

const Benefits = ({ benefits }: Props) => benefits.map(b => (
  <div className={s.benefit}><FA name="check" />{b}</div>
))

export default withStyles(s)(Benefits)
