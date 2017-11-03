// @flow

import React from 'react'

import Link from '../Link'

type Props = {
  crumbs: Array<Object>,
};

const BreadCrumbs = ({ crumbs, ...restProps }: Props) => (
  <div {...restProps}>
    <Link to="/">Home</Link>
    {crumbs.map((c, idx) =>
        (idx === crumbs.length - 1 ? (
          <span> | {c.text}</span>
        ) : (
          <span>
            <span> | </span> <Link to={c.path}>{c.text}</Link>
          </span>
        )))}
  </div>
)

export default BreadCrumbs
