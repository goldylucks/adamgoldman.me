// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Footer from '../Footer'
import MainNav from '../MainNav'
import MessengerFixed from '../MessengerFixed'

import s from './Layout.css'

type Props = {
  children: any,
  path: string,
}

const Layout = ({ children, path }: Props) => (
  <div>
    <MainNav path={path} />
    <div>
      {children}
    </div>
    <div className="container">
      <Footer />
    </div>
    <MessengerFixed />
  </div>
)

export default withStyles(s)(Layout)
