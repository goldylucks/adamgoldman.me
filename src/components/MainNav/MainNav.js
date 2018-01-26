import React from 'react'
import FA from 'react-fontawesome'
import cx from 'classnames'

import Link from '../Link'
import MainNavMobile from '../MainNavMobile'
import history from '../../history'

const navItems = [
  { to: '/loss', text: 'Loss' },
  { to: '/transcripts', text: 'Transcripts' },
  { to: '/tools', text: 'Tutorials' },
  { to: '/about', text: 'About' },
  { to: '/lets-talk', text: 'Contact' },
  { to: '/i-dont-charge-i-accept', text: <span><FA name="heart" style={{ color: 'red', marginRight: 5 }} /> Donate</span> },
]

class MainNav extends React.Component {
  state = {
    basePath: '',
  }

  componentDidMount() {
    history.listen(() => {
      if (this.state.isOpen) {
        this.close()
      }
      this.setBasePath()
    })
    this.setBasePath()
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top main-nav navbar-light">
        <div className="container">
          <MainNavMobile navItems={navItems} basePath={this.state.basePath} />
          <Link className="navbar-brand mr-auto" to="/">Adam Goldman</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {
            navItems.map(({ to, text }) => (
              <li className={cx('nav-item', { active: to.substr(1) === this.state.basePath })} key={to}>
                <Link className="nav-link" to={to}>{text}</Link>
              </li>
            ))
          }
              <li className="nav-item" style={{ marginLeft: 10 }}>
                <Link className="nav-link btn btn-primary btn-sm" to="/book">Book a session</Link>
              </li>
            </ul>
          </div>
          <Link className="nav-link btn btn-primary btn-sm d-sm-block d-md-none" to="/book">Book a session</Link>
        </div>
      </nav>
    )
  }

  setBasePath() {
    this.setState({ basePath: window.location.pathname.split('/')[1] })
  }
}

export default MainNav
