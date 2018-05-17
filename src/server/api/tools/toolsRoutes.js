import { isAdminMiddlewares } from '../../auth'

import controller from './toolsController'

const router = require('express').Router()

router.route('/')
  .post(...isAdminMiddlewares, controller.updateOrCreate)

router.route('/all/')
  .get(controller.getAll)

router.route('/:url/')
  .get(controller.getByUrl)
  .delete(...isAdminMiddlewares, controller.delByUrl)

router.route('/export/')
  .post(...isAdminMiddlewares, controller.exportTool)

export default router
