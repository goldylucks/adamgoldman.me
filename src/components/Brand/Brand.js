// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { cloudImg } from '../../utils'
import Link from '../Link'
import FbShareButton from '../FbShareButton'
import FbPageBox from '../FbPageBox'
import { BigScreen } from '../Responsive'

import s from './Brand.css'

const Brand = () => (
  <section className={s.brand}>
    <BigScreen>
      <Link to="/">
        <img
          className={`${s.logo}`}
          alt="Adam Goldman logo"
          src={cloudImg('adamgoldman.me/logo')}
        />
      </Link>
    </BigScreen>
    <header>
      <Link to="/">
        <h1 className={s.headline}>Adam Goldman</h1>
      </Link>
      <BigScreen>
        <Link to="/">
          <h2 className={s.tagline}>Relax, it&apos;s just life ...</h2>
        </Link>
      </BigScreen>
    </header>
    <BigScreen>
      <div>
        <FbPageBox data-width="250" />
        <div className={s.fbShare}>
          <FbShareButton urlProp="/" />
        </div>
      </div>
    </BigScreen>
  </section>
)

export default withStyles(s)(Brand)
