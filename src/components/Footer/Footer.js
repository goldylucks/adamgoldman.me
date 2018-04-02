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
      <Link className={`${s.link}`} to="/legal-stuff">legal stuff</Link>
      <Link className={`${s.link}`} style={{ marginLeft: 10 }} to="/privacy">Privacy</Link>
    </p>
    <div className="clearfix" />
  </div>
)

export default withStyles(s)(Footer)
