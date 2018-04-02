import toolsRoutes from './tools/toolsRoutes'
import toolsHistoryRoutes from './toolsHistory/toolsHistoryRoutes'
import postsRoutes from './posts/postsRoutes'
import usersRoutes from './users/usersRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/toolsHistory', toolsHistoryRoutes)
router.use('/posts', postsRoutes)
router.use('/users', usersRoutes)

export default router
