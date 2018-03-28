import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import {
  TYPEFORM_ID_SAVORING_INTRO,
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
    user: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
  }

  // componentDidMount() {
  //   this.gateKeeper(this.props.user)
  // }

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

  submitModule = (formId) => {
    global.console.log('submitted form', formId)
    // TODO handle completed forms better
    this.props.onUpdateUser({ ...this.props.user, form: formId })
    history.push('/savoring-your-child/modules')
  }

  // gateKeeper(user) {
  // eslint-disable-next-line max-len
  //   if (!this.props.path.match(/peaceful-ending|reengaging-the-future|relationship-consolidation|reunion|savoring-the-future|special-days/)) {
  //     return
  //   }
  //   if (user.form && user.form.includes(TYPEFORM_ID_SAVORING_INTRO)) {
  //     return
  //   }
  //   history.push('/savoring-your-child')
  // }
}

export default withStyles(s)(Layout)
