import controller from './usersController'

// import { decodeToken, isOwner } from '../../auth'

const router = require('express').Router()


router.route('/fbAuth')
  .post(controller.fbAuth)

router.route('/:id')
  .put(controller.updateUser)
//   .get(auth.decodeToken, auth.isOwner, controller.getOne)

router.route('/form/:id')
  .put(controller.updateUserForm)

router.route('/fbAccessToken')
  .get(controller.generateToken)

export default router
