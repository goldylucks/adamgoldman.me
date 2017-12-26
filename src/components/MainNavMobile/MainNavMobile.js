// @flow

import React from 'react'
import ClickOutside from 'react-click-outside'
import FA from 'react-fontawesome'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import history from '../../history'
import Link from '../Link'

import s from './MainNavMobile.css'

type Props = {
  navItems: [],
  basePath: '',
}

class MainNavMobile extends React.Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    history.listen(() => {
      if (this.state.isOpen) {
        this.close()
      }
    })
  }

  props: Props

  render() {
    return (
      <ClickOutside
        onClickOutside={this.close}
        className="clearfix d-sm-block d-md-none"
      >
        <FA name="bars" style={{ marginRight: 10 }} onClick={this.toggle} />
        <div
          className={
            cx(
              s.mobileMenu,
              { [s.isOpen]: this.state.isOpen },
            )
          }
        >
          <nav>
            <h3 className={s.mobileMenuHeadline}>Adam Goldman</h3>
            <ul className="navbar-nav">
              {
                this.props.navItems.map(({ to, text }) => (
                  <li className={cx('nav-item', { active: to.includes(this.props.basePath) })} key={to}>
                    <Link className={cx('nav-link', s.navLink)} to={to}>{text}</Link>
                  </li>
                ))
              }
              <li className="nav-item" style={{ marginTop: 20 }}>
                <Link className="nav-link btn btn-primary btn-block" to="/book">Book a session</Link>
              </li>
            </ul>
          </nav>
        </div>
      </ClickOutside>
    )
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  close = () => this.setState({ isOpen: false })
}

export default withStyles(s)(MainNavMobile)
