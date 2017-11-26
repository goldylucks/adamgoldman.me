import controller from './toolsController'

const router = require('express').Router()

router.route('/')
  .post(controller.createItem)

router.route('/:url')
  .get(controller.getByUrl)

export default router
