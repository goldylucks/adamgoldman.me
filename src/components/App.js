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

import { isProd } from '../utils'
import { FB_APP_ID } from '../constants'

import Layout from './Layout'

axios.defaults.baseURL = isProd ? 'http://adamgoldman.me' : 'http://localhost:3000'

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
const initDrip = () => {
  var _dcq = _dcq || [];
  var _dcs = _dcs || {};
  _dcs.account = '3809371';
  const dc = document.createElement('script');
  dc.type = 'text/javascript';
  dc.async = true;
  dc.src = '//tag.getdrip.com/3809371.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(dc, s);
};

const initFbSdk = () => {
  (function(d, s, id) {
    let js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src =
      `//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=${FB_APP_ID}`;
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};
/* eslint-enable */

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
    initDrip()
    initFbSdk()
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return React.Children.only(<Layout>{this.props.children}</Layout>)
  }
}

export default App
