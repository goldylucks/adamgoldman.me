import controller from './typeformController'

const router = require('express').Router()

router.route('/:name')
  .get(controller.getDummy)

export default router
