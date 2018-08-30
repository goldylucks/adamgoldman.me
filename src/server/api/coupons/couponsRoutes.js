import { isAdminMiddlewares } from '../../auth'

import controller from './couponsController'

const router = require('express').Router()

router.route('/validate/:product/:coupon')
  .get(controller.validate)

router.route('/getAll')
  .get(...isAdminMiddlewares, controller.getAll)

router.route('/create')
  .post(...isAdminMiddlewares, controller.create)

router.route('/delete/:coupon')
  .delete(...isAdminMiddlewares, controller.del)

export default router
