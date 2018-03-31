import toolsRoutes from './tools/toolsRoutes'
import toolsHistoryRoutes from './toolsHistory/toolsHistoryRoutes'
import postsRoutes from './posts/postsRoutes'
import mailChimpRoutes from './mailChimp/mailChimpRoutes'
import usersRoutes from './users/usersRoutes'
import typeformRoutes from './typeform/typeformRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/toolsHistory', toolsHistoryRoutes)
router.use('/posts', postsRoutes)
router.use('/mailChimp', mailChimpRoutes)
router.use('/users', usersRoutes)
router.use('/typeform', typeformRoutes)

export default router
