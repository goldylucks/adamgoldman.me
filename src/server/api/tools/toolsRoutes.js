import { isAdmin } from '../../auth'

import controller from './toolsController'

const router = require('express').Router()

router.route('/')
  .post(isAdmin, controller.updateOrCreate)

router.route('/all')
  .get(controller.getAll)

router.route('/:url')
  .get(controller.getByUrl)

export default router
