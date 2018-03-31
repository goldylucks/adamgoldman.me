import { isAdminMiddlewares, decodeToken, getFreshUser } from '../../auth'

import controller from './toolsHistoryController'

const router = require('express').Router()

router.route('/')
  .get(...isAdminMiddlewares, controller.getAll)
  .post(decodeToken, getFreshUser, controller.create)

router.route('/:id')
  .get(decodeToken, getFreshUser, controller.get)
  .put(controller.update)

export default router
