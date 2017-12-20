import { isAdmin } from '../../auth'

import controller from './postsController'

const router = require('express').Router()

router.route('/')
  .post(isAdmin, controller.updateOrCreate)

router.route('/:url/transcript')
  .put(isAdmin, controller.updateTranscript)

router.route('/:url')
  .get(controller.getByUrl)

export default router
