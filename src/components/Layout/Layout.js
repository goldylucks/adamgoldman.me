import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Footer from '../Footer'
import MainNav from '../MainNav'
import MessengerFixed from '../MessengerFixed'

import './Layout.css'

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
      children, path, onLogin, onLogout, user, onStartToolResponse, onUpdateUser,
    } = this.props
    return (
      <div className={s.container}>
        <MainNav path={path} user={user} onLogin={onLogin} onLogout={onLogout} />
        <div className={s.innerContainer}>
          {React.cloneElement(children, {
            user,
            onLogin,
            onStartToolResponse,
            onUpdateUser,
            onSubmitIntro: this.submitIntro,
            onSubmitModule: this.submitModule,
          })}
        </div>
        <div className="container container-footer">
          <Footer />
        </div>
        <MessengerFixed path={path} />
      </div>
    )
  }
}

export default withStyles(s)(Layout)
