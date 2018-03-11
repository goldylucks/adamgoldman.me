import { decodeToken, isOwner } from '../../auth'

import controller from './usersController'

const router = require('express').Router()

router.route('/fbAuth')
  .post(controller.fbAuth)

router.route('/:id')
  .put(decodeToken, isOwner, controller.updateUser)
  .get(decodeToken, isOwner, controller.getOne)

router.route('/form/:id')
  .put(decodeToken, isOwner, controller.updateUserForm)

// router.route('/getFbReviews')
//   .get(controller.getFBPageReviews) // consider isAdmin check

export default router
