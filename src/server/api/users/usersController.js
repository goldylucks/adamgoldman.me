import axios from 'axios'

import { fbId, fbSecret, fbPageId, fbPageAccessToken, adminPass } from '../../../config'
import { signToken } from '../../auth'
import ToolResponses from '../toolResponses/toolResponsesModel'

import Users from './usersModel'

export default {
  getOne, fbAuth, updateUser, updateUserForm, getFBPageReviews, makeAdmin,
}

async function getOne(req, res, next) {
  try {
    const getUserCall = Users.findById(req.params.id)
    const getToolResponsesCall = getToolResponses(req.params.id)
    const [user, toolResponses] = [await getUserCall, await getToolResponsesCall]
    if (!user) {
      throw Error('user doesn\'t exist')
    }
    res.json(prepareUser(user, toolResponses))
  } catch (err) {
    next(err)
  }
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
  const options = {
    upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true,
  }
  const userToCreate = { ...req.body }
  try {
    userToCreate.fbServerAccessToken = req.headers['is-mobile']
      ? userToCreate.fbClientAccessToken
      : await axios.get(`https://graph.facebook.com/oauth/access_token?client_id=${fbId}&client_secret=${fbSecret}&grant_type=fb_exchange_token&fb_exchange_token=${userToCreate.fbClientAccessToken}`)
    let user = await Users.findOneAndUpdate(
      { fbUserId: userToCreate.fbUserId }, userToCreate, options)
    user = prepareUser(user, await getToolResponses(user._id))
    res.json(user)
  } catch (err) {
    next(err)
  }
}

function makeAdmin(req, res, next) {
  if (req.body.password !== adminPass) {
    res.status(401).send('Turn away slowly. No Qs asked.')
    return
  }
  Users.update({ _id: req.params.id }, { $set: { isAdmin: true } })
    .then(resp => res.json(resp))
    .catch(next)
}

function prepareUser(user, toolResponses) {
  user = user.toObject()
  delete user.fbServerAccessToken
  user.token = signToken(user._id)
  user.toolResponses = toolResponses
  return user
}

function getFBPageReviews(req, res, next) {
  axios.get(`https://graph.facebook.com/${fbPageId}/ratings?access_token=${fbPageAccessToken}`)
    .then(response => res.json(response.data))
    .catch(next)
}

function getToolResponses(user) {
  return ToolResponses.find({ user }).select('status createdAt toolId')
}
