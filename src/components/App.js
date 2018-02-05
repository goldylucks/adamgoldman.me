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

import { isProd, isMobile } from '../utils'
import { FB_APP_ID } from '../constants'

axios.defaults.baseURL = isProd ? 'http://www.adamgoldman.me' : 'http://localhost:3000'

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

const setAdminPass = () => {
  axios.defaults.headers.common['admin-pass'] = localStorage.getItem('adminPass')
}

class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context
  }

  componentDidMount() {
    initFbSdk()
    setAdminPass()
    axios.defaults.headers.common['is-mobile'] = isMobile()
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return React.Children.only(this.props.children)
  }
}

export default App
