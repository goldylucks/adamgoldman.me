// @flow

import React from 'react'
import FA from 'react-fontawesome'
import cx from 'classnames'

import Link from '../Link'
import MainNavMobile from '../MainNavMobile'
import FbLoginbutton from '../FbLoginButton'

type Props = {
  path: string,
  user: Object,
  onLogin: Function,
  onLogout: Function,
}

class MainNav extends React.Component {
  props: Props

  render() {
    const { onLogin, onLogout, user } = this.props
    return (
      <nav className="navbar navbar-expand-lg fixed-top main-nav navbar-light">
        <div className="container">
          <MainNavMobile
            navItems={this.navItems()}
            basePath={this.basePath()}
            logoLink={this.logoLink()}
            title={this.title()}
            isSavoring={this.isSavoring()}
          />
          <Link className="navbar-brand mr-auto" to={this.logoLink()}>{this.title()}</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {
            this.navItems().map(({ to, text }) => (
              <li className={cx('nav-item', { active: to.substr(1) === this.basePath() })} key={to}>
                <Link className="nav-link" to={to}>{text}</Link>
              </li>
            ))
          }
              <li className="nav-item" style={{ marginLeft: 10 }}>
                { !this.isSavoring()
                ? <Link className="nav-link btn btn-primary btn-sm" to="/book">Book a session</Link>
                : <span className="nav-link btn btn-primary btn-sm"><FbLoginbutton onLogin={onLogin} onLogout={onLogout} user={user} /></span>
            }
              </li>
            </ul>
          </div>
          { !this.isSavoring()
            ? <Link className="nav-link btn btn-primary btn-sm d-sm-block d-md-none" to="/book">Book a session</Link>
            : <span className="nav-link btn btn-primary btn-sm d-sm-block d-md-none"><FbLoginbutton onLogin={onLogin} onLogout={onLogout} user={user} /></span>
          }
        </div>
      </nav>
    )
  }

  basePath() {
    return this.props.path.split('/')[1]
  }

  isSavoring() {
    return this.props.path.includes('savoring-your-child')
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
        { to: '/savoring-your-child/donate', text: <span>Pricing <FA name="heart" style={{ color: 'red', marginLeft: 5 }} /></span> },
      ]
      : [
        { to: '/loss', text: 'Loss' },
        { to: '/transcripts', text: 'Transcripts' },
        { to: '/tools', text: 'Tutorials' },
        { to: '/about', text: 'About' },
        { to: '/lets-talk', text: 'Contact' },
        { to: '/i-dont-charge-i-accept', text: <span>Pricing <FA name="heart" style={{ color: 'red', marginLeft: 5 }} /></span> },
      ]
  }
}

export default MainNav
