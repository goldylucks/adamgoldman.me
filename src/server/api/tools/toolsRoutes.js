import { isAdmin, decodeToken, getFreshUser } from '../../auth'

import controller from './toolsController'

const router = require('express').Router()

router.route('/')
  .post(controller.updateOrCreate)

router.route('/all')
  .get(controller.getAll)

router.route('/:url')
  .get(controller.getByUrl)
  .delete(decodeToken, getFreshUser, isAdmin, controller.delByUrl)

export default router
