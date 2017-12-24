// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../Link'
// import { titleToSlug } from '../../utils'

import s from './Tags.css'

type Props = {
  tags?: Array<string>,
};

const Tags = ({ tags }: Props) => (
  <ul className="tags">
    {tags.map(t => (
      <li><Link to={`/tags/${t}`}>{t}</Link></li>
    ))}
  </ul>
)

Tags.defaultProps = {
  tags: [],
}

export default withStyles(s)(Tags)
