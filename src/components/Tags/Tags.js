// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import './Tags.css'

type Props = {
  tags?: Array<string>,
}

const Tags = ({ tags }: Props) => (
  <ul className={s.tags}>
    {tags.map(t => (
      <li>
        <span>{t}</span>
      </li>
    ))}
  </ul>
)

Tags.defaultProps = {
  tags: [],
}

export default withStyles(s)(Tags)
