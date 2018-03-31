import { decodeToken, isUserOwner } from '../../auth'

import controller from './usersController'

const router = require('express').Router()

router.route('/fbAuth')
  .post(controller.fbAuth)

router.route('/:id')
  .put(decodeToken, isUserOwner, controller.updateUser)
  .get(decodeToken, isUserOwner, controller.getOne)

router.route('/form/:id')
  .put(decodeToken, isUserOwner, controller.updateUserForm)

router.route('/:id/make-admin')
  .put(decodeToken, isUserOwner, controller.makeAdmin)

// router.route('/getFbReviews')
//   .get(controller.getFBPageReviews) // consider isAdmin check

export default router
