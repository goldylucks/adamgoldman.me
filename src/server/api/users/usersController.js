import axios from 'axios'

import { fbId, fbSecret } from '../../../config'
import { signToken } from '../../auth'

import Users from './usersModel'

export default {
  get, getOne, fbAuth, updateUser, updateUserForm, generateToken,
}

function get(req, res, next) {
  Users.find()
    .then(users => res.json(users))
    .catch(next)
}

function getOne(req, res, next) {
  const { id } = req.params
  Users.findById(id)
    .then((user) => {
      if (!user) {
        throw Error('user doesn\'t exist')
      }
      return user
    })
    .then(prepareUser)
    .then(user => res.json(user))
    .catch(next)
}

function updateUserForm(req, res, next) {
  Users.update({ _id: req.params.id },
    { $addToSet: { form: req.body } })
    .then(DBres => res.json(DBres))
    .catch(next)
}

function updateUser(req, res, next) {
  Users.update({ _id: req.params.id }, { $set: req.body })
    .then(DBres => res.json(DBres))
    .catch(next)
}

function generateToken(req, res, next) {
  axios.get(`https://graph.facebook.com/oauth/access_token?client_id=${fbId}&client_secret=${fbSecret}&grant_type=client_credentials`)
    .then(response => res.json(response.data))
    .catch(next)
}

function fbAuth(req, res, next) {
  const {
    name, userID, fbPictureUrl, gender, childName, genderParent, accessToken: fbClientAccessToken,
  } = req.body
  const update = {
    name,
    fbUserId: userID,
    fbPictureUrl,
    gender,
    childName,
    genderParent,
  }
  // Find or create user
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }
  Users.findOneAndUpdate({ fbUserId: userID }, update, options)
    .then(prepareUser)
    .then(_user => res.json(_user))
    .catch(next)
  // client get the user object response
  // exchange client token for long term server token behind the scenes
  // and save it on user collection
    .then(() => (req.headers['is-mobile'] ? fbClientAccessToken : axios.get(`https://graph.facebook.com/oauth/access_token?client_id=${fbId}&client_secret=${fbSecret}&grant_type=fb_exchange_token&fb_exchange_token=${fbClientAccessToken}`)))
    .then(fbAccessToken => Users.findOneAndUpdate(
      { fbUserId: userID },
      { $set: { fbAccessToken } },
    ))
    .catch(next)
}

function prepareUser(user) {
  user = user.toObject()
  delete user.password
  user.token = signToken(user._id)
  return user
}
