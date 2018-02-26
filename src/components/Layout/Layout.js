// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import {
  TYPEFORM_ID_SAVORING_INTRO,
  // TYPEFORM_ID_SAVORING_PEACEFUL_ENDING,
  // TYPEFORM_ID_SAVORING_REENGAGING_THE_FUTURE,
  // TYPEFORM_ID_SAVORING_RELATIONSHIP_CONSOLIDATION,
  // TYPEFORM_ID_SAVORING_REUNION,
  // TYPEFORM_ID_SAVORING_SAVORING_THE_FUTURE,
  // TYPEFORM_ID_SAVORING_SPECIAL_DAYS,
} from '../../constants'
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
    const user = this.syncUserFromLS()
    this.gateKeeper(user)
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
        <MessengerFixed path={path} />
      </div>
    )
  }

  syncUserFromLS() {
    let user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      global.console.log('user logged in', user)
      this.setState({ user })
    }
    return user || {}
  }

  login = (user) => {
    global.console.log('user login', user)
    this.updateUser(user)
  }

  submitIntro = ({ gender, childName, genderParent }) => {
    const user = Object.assign(
      {},
      this.state.user,
      { gender, childName, genderParent },
      { form: [TYPEFORM_ID_SAVORING_INTRO] },
    )
    this.updateUser(user)
    axios.put(`/api/users/${user._id}`, user)
      .then(history.push('/savoring-your-child/test1'))
      .catch(err => global.console.error(err))
  }

  submitModule = async (formId) => {
    global.console.log('submitted form', formId)
    const user = Object.assign({}, this.state.user)
    user.form.push(formId)
    this.updateUser(user)
    axios.put(`/api/users/form/${user._id}`, formId)
      .catch(err => global.console.error(err))
    try {
      const formResponses = await axios.get(`api/typeform/${formId}`)
      const formData = formResponses.data.responses.filter(res => res.hidden.user_id === user._id)[0].answers // eslint-disable-line max-len
      global.console.log('formData', formData)
    } catch (err) {
      global.alert('there was an error, please contact me, sorry for this!')
      global.console.error('err', err)
    }
    // if (objections) {
    //   openMessengerBotSavoringConcern(formId)
    //   return
    // }
    history.push('/savoring-your-child/modules')
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

  gateKeeper(user) {
    if (!this.props.path.match(/peaceful-ending|reengaging-the-future|relationship-consolidation|reunion|savoring-the-future|special-days|test1|test2/)) {
      return
    }
    if (user.form && user.form.includes(TYPEFORM_ID_SAVORING_INTRO)) {
      return
    }
    history.push('/savoring-your-child')
  }
}

export default withStyles(s)(Layout)

/* eslint-disable max-len */
// function openMessengerBotSavoringConcern(formId) {
//   let formName
//   if (formId === TYPEFORM_ID_SAVORING_PEACEFUL_ENDING) { formName = 'peaceful-ending' }
//   if (formId === TYPEFORM_ID_SAVORING_REENGAGING_THE_FUTURE) { formName = 'reengaging-the-future' }
//   if (formId === TYPEFORM_ID_SAVORING_RELATIONSHIP_CONSOLIDATION) { formName = 'relationship-consolidation' }
//   if (formId === TYPEFORM_ID_SAVORING_REUNION) { formName = 'reunion' }
//   if (formId === TYPEFORM_ID_SAVORING_SAVORING_THE_FUTURE) { formName = 'savoring-the-future' }
//   if (formId === TYPEFORM_ID_SAVORING_SPECIAL_DAYS) { formName = 'special-days' }
//   window.open(`https://m.me/adamgoldman.me?ref=${formName}-concern`, '_newtab')
// }
/* eslint-enable max-len */
