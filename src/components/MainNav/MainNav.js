// @flow

import React from 'react'
import cx from 'classnames'

import { isSavoring } from '../../utils'
import {
  MESSENGER_LINK_BOOK_SESSION,
  MESSENGER_LINK_WELCOME,
} from '../../constants'
import ExternalA from '../ExternalA'
import Link from '../Link'
import MainNavMobile from '../MainNavMobile'

type Props = {
  path: string,
}

class MainNav extends React.Component {
  props: Props

  render() {
    return (
      <nav className='navbar navbar-expand-lg fixed-top main-nav navbar-light'>
        <div className='container'>
          <MainNavMobile
            navItems={this.navItems()}
            basePath={this.basePath()}
            logoLink={this.logoLink()}
            title={this.title()}
            isSavoring={this.isSavoring()}
          />
          <Link className='navbar-brand mr-auto' to={this.logoLink()}>
            {this.title()}
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
              {this.navItems().map(({ to, href, text }, idx) => (
                <li
                  className={cx('nav-item', {
                    active: to && to.substr(1) === this.basePath(),
                  })}
                  key={idx}
                >
                  {to ? (
                    <Link className='nav-link' to={to}>
                      {text}
                    </Link>
                  ) : (
                    <ExternalA className='nav-link' href={href}>
                      {text}
                    </ExternalA>
                  )}
                </li>
              ))}
              <li className='nav-item' style={{ marginLeft: 10 }}>
                {!this.isSavoring() && (
                  <ExternalA
                    className='nav-link btn btn-primary btn-sm'
                    href={MESSENGER_LINK_BOOK_SESSION}
                  >
                    Book a session
                  </ExternalA>
                )}
              </li>
            </ul>
          </div>
          {!this.isSavoring() && (
            <ExternalA
              className='nav-link btn btn-primary btn-sm d-sm-block d-md-none'
              href={MESSENGER_LINK_BOOK_SESSION}
            >
              Book a session
            </ExternalA>
          )}
        </div>
      </nav>
    )
  }

  basePath() {
    return this.props.path.split('/')[1]
  }

  isSavoring() {
    return isSavoring(this.props.path)
  }

  title() {
    return this.isSavoring() ? 'Savoring Your Child' : 'Adam Goldman'
  }

  logoLink() {
    return this.isSavoring() ? '/savoring-your-child' : '/'
  }

  navItems() {
    return this.isSavoring()
      ? [
          { to: '/savoring-your-child/modules', text: 'Modules' },
          { href: MESSENGER_LINK_WELCOME, text: 'Contact' },
        ]
      : [
          { to: '/endorsements', text: 'Endorsements' },
          { to: '/about', text: 'About' },
          { href: MESSENGER_LINK_WELCOME, text: 'Contact' },
        ]
  }
}

export default MainNav
