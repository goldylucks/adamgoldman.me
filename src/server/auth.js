import { adminPass } from '../config'

// eslint-disable-next-line import/prefer-default-export
export function isAdmin(req, res, next) {
  if (req.headers['admin-pass'] !== adminPass) {
    res.status(401).send('turn away slowly. No questions asked.')
    return
  }

  next()
}
