import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'

import { jwtSecret } from '../config'

import User from './api/users/usersModel'

const checkToken = expressJwt({ secret: jwtSecret })

export function isAdmin(req, res, next) {
  if (!req.user.isAdmin) {
    res.status(401).send('Only admins can do this operation!')
    return
  }
  next()
}

export function signToken(_id) {
  return jwt.sign({ _id }, jwtSecret)
}

export function decodeToken(req, res, next) {
  if (req.query && req.query.hasOwnProperty('access_token')) { // eslint-disable-line no-prototype-builtins
    req.headers.authorization = `Bearer ${req.query.access_token}`
  }
  const authorization = req.headers.authorization || req.headers.Authorization
  if (!authorization || !authorization.match('Bearer ')) {
    next()
    return
  }
  checkToken(req, res, next)
}

export function isUserOwner(req, res, next) {
  if (req.user._id !== req.params.id) {
    res.status(401).send('Only the owner can do this operation!')
    return
  }
  next()
}

export const validateOwner = userId => (item) => {
  if (!item.userId.equals(userId)) {
    throw Error('item don\'t exist or you are not the owner')
  }
  return item
}

export const validateOwnerOrAdmin = (user, itemUserId) => {
  if (!itemUserId.equals(user._id) && !user.isAdmin) {
    throw Error('item don\'t exist or you are not the owner')
  }
}

export function getFreshUser(req, res, next) {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        res.status(401).send("token didn't match any user")
        return
      }
      req.user = user
      next()
    })
    .catch(next)
}

export const isAdminMiddlewares = !__DEV__ // eslint-disable-line no-undef
  ? [decodeToken, getFreshUser, isAdmin]
  : [function noopMiddleware(req, res, next) {
    next()
  }]
