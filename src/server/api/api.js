import toolsRoutes from './tools/toolsRoutes'
import postsRoutes from './posts/postsRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/posts', postsRoutes)

export default router
