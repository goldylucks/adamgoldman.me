import toolsRoutes from './tools/toolsRoutes'
import postsRoutes from './posts/postsRoutes'
import mailChimpRoutes from './mailChimp/mailChimpRoutes'
import usersRoutes from './users/usersRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/posts', postsRoutes)
router.use('/mailChimp', mailChimpRoutes)
router.use('/users', usersRoutes)

export default router
