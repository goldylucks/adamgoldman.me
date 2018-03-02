import controller from './typeformController'

const router = require('express').Router()

router.route('/:formId')
  .get(controller.get)

export default router
