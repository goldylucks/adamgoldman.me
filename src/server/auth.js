import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'

import { adminPass, jwtSecret } from '../config'

const checkToken = expressJwt({ secret: jwtSecret })

export function isAdmin(req, res, next) {
  if (req.headers['admin-pass'] !== adminPass) {
    res.status(401).send('turn away slowly. No questions asked.')
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

export function isOwner(req, res, next) {
  if (req.user._id !== req.params.id) {
    res.status(401).send('Only the owner can do this operation!')
    return
  }

  next()
}
