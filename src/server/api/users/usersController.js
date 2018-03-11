import axios from 'axios'

import { fbId, fbSecret, fbPageId, fbPageAccessToken } from '../../../config'
import { signToken } from '../../auth'

import Users from './usersModel'

export default {
  getOne, fbAuth, updateUser, updateUserForm, getFBPageReviews,
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

async function fbAuth(req, res, next) {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }
  const userToCreate = { ...req.body }
  try {
    userToCreate.fbServerAccessToken = req.headers['is-mobile']
      ? userToCreate.fbClientAccessToken
      : await axios.get(`https://graph.facebook.com/oauth/access_token?client_id=${fbId}&client_secret=${fbSecret}&grant_type=fb_exchange_token&fb_exchange_token=${userToCreate.fbClientAccessToken}`)
    let user = await Users.findOneAndUpdate(
      { fbUserId: userToCreate.fbUserId }, userToCreate, options)
    user = prepareUser(user)
    res.json(user)
  } catch (err) {
    next(err)
  }
}

function prepareUser(user) {
  user = user.toObject()
  delete user.fbServerAccessToken
  user.token = signToken(user._id)
  return user
}

function getFBPageReviews(req, res, next) {
  axios.get(`https://graph.facebook.com/${fbPageId}/ratings?access_token=${fbPageAccessToken}`)
    .then(response => res.json(response.data))
    .catch(next)
}
