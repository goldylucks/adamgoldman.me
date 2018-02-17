// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import randomstring from 'randomstring'

import Footer from '../Footer'
import MainNav from '../MainNav'
import MessengerFixed from '../MessengerFixed'

import s from './Layout.css'

type Props = {
  children: any,
  path: string,
}

class Layout extends React.Component {
  state = {
    user: {},
    typeformUserId: '',
  }

  componentDidMount() {
    this.syncUserFromLS()
    this.syncTypeformIdFromLS()
  }

  props: Props

  render() {
    const { children, path } = this.props
    const { user, typeformUserId } = this.state
    return (
      <div>
        <MainNav path={path} user={user} onLogin={this.login} onLogout={this.logout} />
        <div>
          {React.cloneElement(children, { user, typeformUserId, onLogin: this.login })}
        </div>
        <div className="container">
          <Footer />
        </div>
        <MessengerFixed />
      </div>
    )
  }

  syncUserFromLS() {
    const user = localStorage.getItem('user')
    if (user) {
      console.log('user', user)
      this.setState({ user: JSON.parse(user) })
    }
  }

  syncTypeformIdFromLS() {
    const typeformUserId = localStorage.getItem('typeformUserId')
    if (typeformUserId) {
      this.setState({ typeformUserId })
    } else {
      const newTypeformUserId = randomstring.generate()
      this.setState({ typeformUserId: newTypeformUserId })
      localStorage.setItem('typeformUserId', newTypeformUserId)
    }
  }

  login = (user) => {
    console.log('user', user)
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  logout = () => {
    localStorage.removeItem('user')
    this.setState({ user: {} })
  }
}
export default withStyles(s)(Layout)
