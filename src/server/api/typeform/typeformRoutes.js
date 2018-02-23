import controller from './typeformController'

const router = require('express').Router()

router.route('/:formId')
  .get(controller.get)

router.route('/typeformUser')
  .post(controller.userForm)

export default router
