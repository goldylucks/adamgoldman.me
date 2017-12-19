import toolsRoutes from './tools/toolsRoutes'
import postsRoutes from './posts/postsRoutes'
import mailChimpRoutes from './mailChimp/mailChimpRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/posts', postsRoutes)
router.use('/mailChimp', mailChimpRoutes)

export default router
