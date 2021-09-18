// @flow

import React from 'react'

import Link from '../Link'
import Avatar from '../Avatar'

type Props = {
  nick?: string,
};

const Ending = ({ nick, ...restProps }: Props) => (
  <section {...restProps} className="clearfix">
    <Link to="/" className="avatar-with-text">
      <Avatar alt={`Adam Goldman ${nick}`} />
    </Link>
    <div className="avatar-text">
      <Link to="/" style={{ color: 'inherit' }}>
        <strong>Adam {nick && `“${nick}”`} Goldman</strong>
      </Link>
      <p><small>Relax, it&apos;s just life ...</small></p>
    </div>
  </section>
)

Ending.defaultProps = { nick: '' }

export default Ending
