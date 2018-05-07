import toolsRoutes from './tools/toolsRoutes'
import toolResponsesRoutes from './toolResponses/toolResponsesRoutes'
import postsRoutes from './posts/postsRoutes'
import usersRoutes from './users/usersRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/toolResponses', toolResponsesRoutes)
router.use('/posts', postsRoutes)
router.use('/users', usersRoutes)

export default router
