import { isAdmin, decodeToken, getFreshUser } from '../../auth'

import controller from './toolsController'

const router = require('express').Router()

router.route('/')
  .post(decodeToken, getFreshUser, isAdmin, controller.updateOrCreate)

router.route('/all')
  .get(controller.getAll)

router.route('/:url')
  .get(controller.getByUrl)

export default router
