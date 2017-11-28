import { isAdmin } from '../../auth'

import controller from './toolsController'

const router = require('express').Router()

router.route('/')
  .post(isAdmin, controller.updateOrCreate)

router.route('/:url')
  .get(controller.getByUrl)

export default router
