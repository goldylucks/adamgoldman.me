require('dotenv').config()

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error('Do not import `config.js` from inside the client-side code.')
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`,
  },

  adminPass: process.env.ADMIN_PASS || 'foo',
  jwtSecret: process.env.JWT_SECRET || 'foo',
  fbId: process.env.FACEBOOK_APP_ID || '1957034857888787',
  fbSecret: process.env.FACEBOOK_APP_SECRET,

  mailChimpApiKy: process.env.MAILCHIMP_API_KEY,

  dbUrl: process.env.MONGODB_URI || 'mongodb://localhost/adamgoldman',

  typeFormId: process.env.TYPEFORM_API_KEY,

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

}
