// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../Link'
import { titleToSlug } from '../../utils'

import s from './Tags.css'

type Props = {
  tags: Array<string>,
};

const Tags = ({ tags }: Props) => (
  <div style={{ marginBottom: 5 }}>
    {tags.map((t, idx) => (
      <span>
        {idx > 0 && ', '}
        <Link className={s.tag} to={`/tags/${titleToSlug(t)}`}>
          {t}
        </Link>
      </span>
    ))}
  </div>
)

export default withStyles(s)(Tags)
