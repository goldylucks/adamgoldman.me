// @flow

import React from 'react'
import ClickOutside from 'react-click-outside'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import history from '../../history'

import s from './MobileNav.css'

type Props = {
  items: [],
  title: '',
  onItemClick: Function
}

type State = {
  isOpen: boolean
}

class MobileNav extends React.Component<Props, State> {
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

  render() {
    return (
      <ClickOutside
        onClickOutside={this.close}
        className="clearfix d-sm-block d-lg-none"
      >
        <span style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faBars} style={{ marginRight: 10 }} onClick={this.toggle} />
        </span>
        <div
          className={
            cx(
              s.mobileMenu,
              { [s.isOpen]: this.state.isOpen },
            )
          }
        >
          <nav>
            <h3 className={s.mobileMenuHeadline} onClick={this.toggle}>{this.props.title}</h3>
            <ul className="navbar-nav">
              {this.props.items.map(({ text, nodeId }) => (
                <li className="nav-item" key={nodeId}>
                  <a className="nav-link" onClick={() => this.onItemClick(nodeId)}>{text}</a>
                </li>
            ))}
              <li className="nav-item">
                <a className="nav-link btn btn-primary btn-sm" onClick={() => this.props.onItemClick('elBuyNow')}>Claim Access</a>
              </li>
            </ul>
          </nav>
        </div>
      </ClickOutside>
    )
  }

  onItemClick(nodeId) {
    this.close()
    this.props.onItemClick(nodeId)
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  close = () => this.setState({ isOpen: false })
}

export default withStyles(s)(MobileNav)
