import toolsRoutes from './tools/toolsRoutes'

const router = require('express').Router()

router.use('/tools', toolsRoutes)

export default router
