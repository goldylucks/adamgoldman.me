// @flow

import React from 'react';
import Link from '../Link';

import { cloudImg } from '../../utils';

type Props = {
  nick?: string,
};

const Ending = ({ nick, ...restProps }: Props) => (
  <section {...restProps}>
    <Link to="/">
      <img
        className="ending-avatar"
        style={{
          borderRadius: '50%',
          display: 'block',
          width: 150,
          marginBottom: 20,
        }}
        src={cloudImg('adamgoldman.me/profile-smiling')}
        alt={`Adam Goldman ${nick}`}
      />
    </Link>
    -{' '}
    <Link to="/">
      <strong style={{ fontSize: 20 }}>
        Adam {nick && `“${nick}”`} Goldman
      </strong>
    </Link>
  </section>
);

Ending.defaultProps = { nick: '' };

export default Ending;
