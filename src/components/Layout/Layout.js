import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import {
  TYPEFORM_ID_SAVORING_INTRO,
  TYPEFORM_ID_SAVORING_PEACEFUL_ENDING,
  TYPEFORM_ID_SAVORING_REENGAGING_THE_FUTURE,
  TYPEFORM_ID_SAVORING_RELATIONSHIP_CONSOLIDATION,
  TYPEFORM_ID_SAVORING_REUNION,
  TYPEFORM_ID_SAVORING_SAVORING_THE_FUTURE,
  TYPEFORM_ID_SAVORING_SPECIAL_DAYS,
  TYPEFORM_ID_SAVORING_REVIEW_TEST,
} from '../../constants'
import history from '../../history'
import Footer from '../Footer'
import MainNav from '../MainNav'
import MessengerFixed from '../MessengerFixed'

import s from './Layout.css'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    path: PropTypes.string.isRequired,
    user: PropTypes.Object.isRequired,
    onLogin: PropTypes.function.isRequired,
    onLogout: PropTypes.function.isRequired,
    onUpdateUser: PropTypes.function.isRequired,
  }

  componentDidMount() {
    this.gateKeeper(this.props.user)
  }

  render() {
    const {
      children, path, onLogin, onLogout, user,
    } = this.props
    return (
      <div className={s.container}>
        <MainNav path={path} user={user} onLogin={onLogin} onLogout={onLogout} />
        <div>
          {React.cloneElement(children, {
            user,
            onLogin,
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

  submitIntro = ({ gender, childName, genderParent }) => {
    const user = Object.assign(
      {},
      this.props.user,
      { gender, childName, genderParent },
      { form: [TYPEFORM_ID_SAVORING_INTRO] },
    )
    this.props.onUpdateUser(user)
    axios.put(`/api/users/${user._id}`, user)
      .then(history.push('/savoring-your-child/peaceful-ending'))
      .catch(err => global.console.error(err))
  }

  submitModule = async (formId) => {
    global.console.log('submitted form', formId)
    const user = Object.assign({}, this.props.user)
    user.form.push(formId)
    this.props.onUpdateUser(user)
    axios.put(`/api/users/form/${user._id}`, formId)
      .catch(err => global.console.error(err))
    try {
      const formResponses = await axios.get(`api/typeform/${formId}`)
      const formData = formResponses.data.responses.filter(res => res.hidden.user_id === user._id)[0].answers // eslint-disable-line max-len
      global.console.log('formData', formData)
      if (formData.rating_i8cl728cKMFg <= 2 || !formData.rating_i8cl728cKMFg) {
        openMessengerBotSavoringConcern(formId)
        return
      }
    } catch (err) {
      global.alert('there was an error, please contact me, sorry for this!')
      global.console.error('err', err)
    }
    history.push('/savoring-your-child/modules')
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
function openMessengerBotSavoringConcern(formId) {
  let formName
  if (formId === TYPEFORM_ID_SAVORING_PEACEFUL_ENDING) { formName = 'peaceful-ending' }
  if (formId === TYPEFORM_ID_SAVORING_REENGAGING_THE_FUTURE) { formName = 'reengaging-the-future' }
  if (formId === TYPEFORM_ID_SAVORING_RELATIONSHIP_CONSOLIDATION) { formName = 'relationship-consolidation' }
  if (formId === TYPEFORM_ID_SAVORING_REUNION) { formName = 'reunion' }
  if (formId === TYPEFORM_ID_SAVORING_SAVORING_THE_FUTURE) { formName = 'savoring-the-future' }
  if (formId === TYPEFORM_ID_SAVORING_SPECIAL_DAYS) { formName = 'special-days' }
  if (formId === TYPEFORM_ID_SAVORING_REVIEW_TEST) { formName = 'review-test' }
  window.open(`https://m.me/adamgoldman.me?ref=${formName}-concern`, '_newtab')
}
/* eslint-enable max-len */
