import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

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
    onStartToolResponse: PropTypes.func.isRequired,
  }

  render() {
    const {
      children, path, onLogin, onLogout, user, onStartToolResponse,
    } = this.props
    return (
      <div className={s.container}>
        <MainNav path={path} user={user} onLogin={onLogin} onLogout={onLogout} />
        <div>
          {React.cloneElement(children, {
            user,
            onLogin,
            onStartToolResponse,
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

  submitModule = (formId) => {
    global.console.log('submitted form', formId)
    // TODO handle completed forms better
    this.props.onUpdateUser({ ...this.props.user, form: formId })
    history.push('/savoring-your-child/modules')
  }
}

export default withStyles(s)(Layout)
