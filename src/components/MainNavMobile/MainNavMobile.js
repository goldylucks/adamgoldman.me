// @flow

import React from 'react'
import ClickOutside from 'react-click-outside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/free-solid-svg-icons/faBars'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { MESSENGER_LINK_BOOK_SESSION } from '../../constants'
import history from '../../history'
import Link from '../Link'
import ExternalA from '../ExternalA'

import './MainNavMobile.css'

type Props = {
  navItems: [],
  title: '',
  logoLink: '',
  basePath: '',
  isSavoring: Boolean,
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
        className='clearfix d-sm-block d-md-none'
      >
        <span style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ marginRight: 10 }}
            onClick={this.toggle}
          />
        </span>
        <div className={cx(s.mobileMenu, { [s.isOpen]: this.state.isOpen })}>
          <nav>
            <h3 className={s.mobileMenuHeadline} onClick={this.toggle}>
              {this.props.title}
            </h3>
            <ul className='navbar-nav'>
              {[{ to: this.props.logoLink, text: 'Home' }]
                .concat(this.props.navItems)
                .map(({ to, href, text }, idx) => (
                  <li
                    className={cx('nav-item', {
                      active: to && to.substr(1) === this.props.basePath,
                    })}
                    key={idx}
                  >
                    {to ? (
                      <Link className={cx('nav-link', s.navLink)} to={to}>
                        {text}
                      </Link>
                    ) : (
                      <ExternalA
                        className={cx('nav-link', s.navLink)}
                        href={href}
                      >
                        {text}
                      </ExternalA>
                    )}
                  </li>
                ))}
              <li className='nav-item' style={{ marginTop: 20 }}>
                {!this.props.isSavoring && (
                  <ExternalA
                    className='nav-link btn btn-primary btn-block'
                    href={MESSENGER_LINK_BOOK_SESSION}
                  >
                    Book a session
                  </ExternalA>
                )}
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
