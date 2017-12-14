import controller from './mailChimpController'

const router = require('express').Router()

router.route('/:listId/subscribe')
  .post(controller.subscribe)

export default router
