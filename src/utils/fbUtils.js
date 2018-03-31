import axios from 'axios'

import { DOMAIN } from '../constants'

export const fbAuth = (cb) => {
  global.FB.login(res => fbAuth2(res, cb), { scope: 'email,public_profile' })
}

export const getFbShareUrl = path => `https://www.facebook.com/sharer/sharer.php?u=${DOMAIN}${path}`

function fbAuth2(response, cb) {
  if (response.status !== 'connected') {
    global.alert('please authorize login to continue')
    return
  }
  const { accessToken, userID } = response.authResponse
  global.FB.api('/me?fields=id,name,picture',
    ({ name, picture }) => {
      userServerLogin({
        fbUserId: userID, fbClientAccessToken: accessToken, name, picture,
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
