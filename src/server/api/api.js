import toolsRoutes from './tools/toolsRoutes'
import toolResponsesRoutes from './toolResponses/toolResponsesRoutes'
import postsRoutes from './posts/postsRoutes'
import usersRoutes from './users/usersRoutes'
import stripeRoutes from './stripe/stripeRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/toolResponses', toolResponsesRoutes)
router.use('/posts', postsRoutes)
router.use('/users', usersRoutes)
router.use('/stripe', stripeRoutes)

export default router
