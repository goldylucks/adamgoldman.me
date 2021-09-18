// @flow

import React from 'react'

import Link from '../Link'

type Props = {
  crumbs: Array<Object>,
  basePath?: string,
}

const BreadCrumbs = ({ crumbs, basePath, ...restProps }: Props) => (
  <div {...restProps}>
    <Link to={basePath}>Home</Link>
    {crumbs.map((c, idx) =>
      idx === crumbs.length - 1 ? (
        <span> | {c.text}</span>
      ) : (
        <span>
          <span> | </span> <Link to={c.path}>{c.text}</Link>
        </span>
      ),
    )}
  </div>
)

BreadCrumbs.defaultProps = {
  basePath: '/',
}

export default BreadCrumbs
