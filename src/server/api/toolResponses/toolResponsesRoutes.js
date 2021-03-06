import { isAdminMiddlewares, decodeToken, getFreshUser } from '../../auth'

import controller from './toolResponsesController'

const router = require('express').Router()

router.route('/')
  .get(...isAdminMiddlewares, controller.getAll)
  .post(controller.create)

router.route('/fetchByUserOrCreate/:toolSlug')
  .get(decodeToken, getFreshUser, controller.fetchByUserOrCreate)

router.route('/:id/')
  .get(decodeToken, getFreshUser, controller.get)
  .put(controller.update)
  .delete(...isAdminMiddlewares, controller.del)

export default router
