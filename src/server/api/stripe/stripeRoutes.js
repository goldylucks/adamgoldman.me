import controller from './stripeController'

const router = require('express').Router()

router.route('/oneTimePayment')
  .post(controller.oneTimePayment)

export default router
