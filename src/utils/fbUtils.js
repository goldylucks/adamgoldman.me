import axios from 'axios'

import { DOMAIN, FB_APP_ID } from '../constants'

export const fbLinkByUserId = id => `https://www.facebook.com/profile.php?id${id}`

export const fbAuth = (cb) => {
  global.FB.login(res => fbAuth2(res, cb), { scope: 'email,public_profile' })
}

export const getFbShareUrl = path => `https://www.facebook.com/sharer/sharer.php?u=${DOMAIN}${path}`

/* eslint-disable */
export const initFbSdk = () => {
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

function fbAuth2(response, cb) {
  if (response.status !== 'connected') {
    global.alert('please authorize login to continue')
    return
  }
  const { accessToken, userID } = response.authResponse
  global.FB.api('/me?fields=id,name,picture,gender',
    ({ name, picture, gender }) => {
      userServerLogin({
        fbUserId: userID, fbClientAccessToken: accessToken, name, picture, gender,
      }, cb)
    },
  )
}

function userServerLogin(user, cb) {
  if (user.picture && user.picture.data && user.picture.data.url) {
    user.fbPictureUrl = user.picture.data.url
  }
  axios.post('/api/users/fbAuth', user)
    .then((serverRes) => { cb(serverRes.data) })
    .catch((err) => {
      global.console.error(err)
      global.alert('there was an error, please contact me')
    })
}
