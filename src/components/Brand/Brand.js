// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { cloudImg } from '../../utils';
import s from './Brand.css';
import Link from '../Link';

import FbShareButton from '../FbShareButton';
import FbPageBox from '../FbPageBox';

const Brand = () => (
  <section className={s.brand}>
    <Link to="/">
      <img
        className={`${s.logo} mobile-hide`}
        alt="Adam Goldman logo"
        src={cloudImg('adamgoldman.me/logo')}
      />

      <img
        className={`${s.logo} mobile-show`}
        alt="Adam Goldman logo"
        src={cloudImg('adamgoldman.me/profile-smiling')}
      />
    </Link>
    <header>
      <Link to="/">
        <h1 className={s.headline}>Adam Goldman</h1>
      </Link>
      <Link to="/">
        <h2 className={s.tagline}>Relax, it&apos;s just life ...</h2>
      </Link>
    </header>
    <div>
      <FbPageBox data-width="250" />
      <div className={s.fbShare}>
        <FbShareButton urlProp="/" />
      </div>
    </div>
  </section>
);

export default withStyles(s)(Brand);
