import { isProd } from '../utils'
import { adminPass } from '../config'

// eslint-disable-next-line import/prefer-default-export
export function isAdmin(req, res, next) {
  if (!isProd) {
    next()
    return
  }

  if (req.headers.adminPass !== adminPass) {
    res.status(401).send('turn away slowly. No questions asked.')
    return
  }

  next()
}
