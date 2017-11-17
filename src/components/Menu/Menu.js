// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import ClickOutside from 'react-click-outside'

import history from '../../history'
import Link from '../Link'

import s from './Menu.css'

class Menu extends React.Component {
  state = {
    isOpen: false,
    isMounted: false,
  };

  componentDidMount() {
    history.listen(() => {
      if (this.state.isOpen) {
        this.close()
      }
    })
    this.setState({ isMounted: true }) // eslint-disable-line react/no-did-mount-set-state
  }

  render() {
    return (
      <ClickOutside
        onClickOutside={this.close}
        className={`clearfix ${s.container}`}
      >
        <div onClick={this.toggle} className={s.hamburgerWrap}>
          <div className={s.hamburger} />
        </div>
        <nav
          className={`cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right ${this
            .state.isOpen
            ? 'cbp-spmenu-open'
            : ''}`}
        >
          <h3 onClick={this.toggle}>Menu</h3>
          {[
            { to: '', text: 'Start Here' },
            { to: 'i-dont-charge-i-accept', text: 'Pricing' },
            { to: 'who-am-i-anyway', text: 'who Am I Anyway' },
            { to: 'tools', text: 'Brain Hacking Tools' },
            { to: 'successes', text: 'Successes' },
            { to: 'tags', text: 'Tags' },
            { to: 'book-me', text: 'Book Me' },
            { to: 'trainings', text: 'Trainings' },
            { to: 'blog', text: 'Blog' },
            { to: 'quotes', text: 'Quotes' },
            { to: 'books', text: 'Books' },
            { to: 'lets-talk', text: "Let's Talk?" },
          ].map(({ to, text }) => (
            <Link key={to} {...this.activeClass(to)} to={`/${to}`}>
              {text}
            </Link>
          ))}
        </nav>
      </ClickOutside>
    )
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  close = () => this.setState({ isOpen: false });

  activeClass(to) {
    return this.state.isMounted && window.location.pathname.split('/')[1] === to
      ? { className: 'active' }
      : {}
  }
}

export default withStyles(s)(Menu)
