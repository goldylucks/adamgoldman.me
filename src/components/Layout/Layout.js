// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import history from '../../history'
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
  }

  componentDidMount() {
    this.syncUserFromLS()
  }

  props: Props

  render() {
    const { children, path } = this.props
    const { user } = this.state
    return (
      <div>
        <MainNav path={path} user={user} onLogin={this.login} onLogout={this.logout} />
        <div>
          {React.cloneElement(children, {
            user,
            onLogin: this.login,
            onSubmitIntro: this.submitIntro,
            onSubmitModule: this.submitModule,
          })}
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
      global.console.log('user logged in')
      global.console.log(user)
      this.setState({ user: JSON.parse(user) })
    }
  }

  login = (user) => {
    global.console.log('user login')
    global.console.log(user)
    this.updateUser(user)
  }

  submitIntro = ({ gender, childName, genderParent }) => {
    const user = Object.assign({}, this.state.user, { gender, childName, genderParent }, { form: ['VHYYNS'] })
    this.updateUser(user)
    axios.put(`/api/users/${user._id}`, user)
      .then(history.push('/savoring-your-child/test1'))
      .catch(err => global.console.error(err))
  }

  submitModule = (formId) => {
    const user = Object.assign({}, this.state.user)
    user.form.push(formId)
    this.updateUser(user)
    axios.put(`/api/users/form/${user._id}`, formId)
      .then(history.push('/savoring-your-child/modules'))
      .catch(err => global.console.error(err))
  }

  logout = () => {
    global.console.log('user logout')
    localStorage.removeItem('user')
    this.setState({ user: {} })
  }

  updateUser(user) {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }
}
export default withStyles(s)(Layout)
