import toolsRoutes from './tools/toolsRoutes'
import toolResponsesRoutes from './toolResponses/toolResponsesRoutes'
import postsRoutes from './posts/postsRoutes'
import usersRoutes from './users/usersRoutes'
import couponsRoutes from './coupons/couponsRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/toolResponses', toolResponsesRoutes)
router.use('/posts', postsRoutes)
router.use('/users', usersRoutes)

router.post('/savoringPetCoupon', savoringPetCoupon)
router.use('/coupons', couponsRoutes)

export default router

function savoringPetCoupon(req, res) {
  const { coupon } = req.body
  if (coupon === process.env.I_LOVE_VET_LAUNCH_COUPON) {
    res.send(true)
  } else {
    res.send(false)
  }
}
