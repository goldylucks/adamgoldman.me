import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../Link'

import s from './Footer.css'

const Footer = () => (
  <div className="footer">
    <p className="pull-left">
       Copyright &copy; 2017 <Link className={s.link} to="/">Adam Goldman</Link>
    </p>
    <p className="pull-right">
      <Link className={`${s.link} legal-stuff`} to="/legal-stuff/">
        legal stuff
      </Link>
    </p>
    <div className="clearfix" />
  </div>
)

export default withStyles(s)(Footer)
