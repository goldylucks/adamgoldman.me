import { isAdmin, decodeToken, getFreshUser, isAdminMiddlewares } from '../../auth'

import controller from './toolsController'

const router = require('express').Router()

router.route('/')
  // .post(decodeToken, getFreshUser, isAdmin, controller.updateOrCreate)
  .post(...isAdminMiddlewares, controller.updateOrCreate) // uncomment for dev

router.route('/all')
  .get(controller.getAll)

router.route('/:url')
  .get(controller.getByUrl)
  .delete(decodeToken, getFreshUser, isAdmin, controller.delByUrl)

router.route('/export')
  .post(...isAdminMiddlewares, controller.exportTool)

export default router
