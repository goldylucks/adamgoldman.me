import toolsRoutes from './tools/toolsRoutes'
import mailChimpRoutes from './mailChimp/mailChimpRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)
router.use('/mailChimp', mailChimpRoutes)

export default router
