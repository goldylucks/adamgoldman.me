import React from 'react'

import Link from '../Link'
import MainNavMobile from '../MainNavMobile'
import history from '../../history'

const navItems = [
  { to: '/transcripts', text: 'Transcripts' },
  { to: '/tools', text: 'Tutorials' },
  { to: '/i-dont-charge-i-accept', text: 'Donate' },
  { to: '/about', text: 'About' },
  { to: '/lets-talk', text: 'Contact' },
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
              <li className="nav-item" key={to}>
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
