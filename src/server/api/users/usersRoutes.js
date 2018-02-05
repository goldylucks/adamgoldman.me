import controller from './usersController'

const router = require('express').Router()


router.route('/fbAuth')
  .post(controller.fbAuth)

// router.route('/:id')
//   .get(auth.decodeToken, auth.isOwner, controller.getOne)
//   .put(auth.decodeToken, auth.isOwner, controller.put)

export default router
