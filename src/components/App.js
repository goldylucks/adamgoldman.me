/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { isMobile } from '../utils'
import { FB_APP_ID, BASE_URL } from '../constants'
import LoadingSite from '../components/LoadingSite'

axios.defaults.baseURL = BASE_URL

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Universal HTTP client
  fetch: PropTypes.func.isRequired,
}

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <div>
 *         <LandingPage />
 *       </div>
 *     </App>,
 *     container,
 *   );
 */

/* eslint-disable */
const initFbSdk = () => {
  window.fbAsyncInit = function() {
    FB.init({
      appId            : FB_APP_ID,
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
};
/* eslint-enable */

class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  state = {
    user: {},
    isUiReady: false,
  }

  getChildContext() {
    return this.props.context
  }

  componentDidMount() {
    initFbSdk()
    axios.defaults.headers.common['is-mobile'] = isMobile()
    this.syncUserFromLS()
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    if (!this.state.isUiReady) {
      return <LoadingSite />
    }
    return React.Children.only(React.cloneElement(this.props.children, {
      user: this.state.user,
      onLogin: this.login,
      onLogout: this.logout,
      onUpdateUser: this.updateUser,
    }))
  }

  login = (user) => {
    global.console.log('user login', user)
    setAuthHeader(user.token)
    this.updateUser(user)
  }

  logout = () => {
    global.console.log('user logout')
    localStorage.removeItem('user')
    delete axios.defaults.headers.common.authorization // TODO :: check if this works
    this.setState({ user: {} })
  }

  updateUser = (user) => {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  syncUserFromLS() {
    let user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.setState({ user })
      setAuthHeader(user.token)
      axios.get(`/api/users/${user._id}`)
        .then(({ data }) => {
          global.console.log('[user logged in]', user)
          this.updateUser(data)
          this.setState({ isUiReady: true })
        })
        .catch((err) => {
          this.setState({ isUiReady: true })
          global.alert('there was an error logging you on, I will look into it and get back at you')
          global.console.error(err)
        })
    } else {
      this.setState({ isUiReady: true })
    }
  }
}

export default App

function setAuthHeader(token) {
  axios.defaults.headers.common.authorization = `Bearer ${token}`
}
