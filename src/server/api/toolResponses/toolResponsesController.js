import { validateOwnerOrAdmin } from '../../auth'
import Tools from '../tools/toolsModel'

import savoringReviewSteps from './savoringReviewSteps'
import ToolResponses from './toolResponsesModel'

export default {
  getAll, get, create, update, fetchByUserOrCreate,
}

function getAll(req, res, next) {
  ToolResponses.find()
    .select('createdAt user title currentStepNum status')
    .sort('-createdAt')
    .populate('user')
    .then(tools => res.json(tools))
    .catch(next)
}

function get(req, res, next) {
  ToolResponses.findOne({ _id: req.params.id })
    .populate('user')
    .then((tool) => {
      validateOwnerOrAdmin(req.user, tool.user._id)
      return tool
    })
    .then(tool => res.json(tool))
    .catch(next)
}

// updating create method might require updating fetchByUserOrCreate as well
function create(req, res, next) {
  ToolResponses.create(req.body)
    .then(tool => res.status(201).json(tool))
    .catch(next)
}

function update(req, res, next) {
  ToolResponses.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(DBres => res.json(DBres))
    .catch(next)
}

// assumption: only used by savoring modules
// other tools have different way to handle reviews
async function fetchByUserOrCreate(req, res, next) {
  const { user, params: { toolSlug } } = req
  try {
    const tool = await Tools.findOne({ url: toolSlug })
    const existingToolResponse = await ToolResponses.findOne({ user: user._id, toolId: tool._id })
    if (existingToolResponse !== null) {
      res.json(existingToolResponse)
      return
    }
    global.console.log('creating tool response!')
    const toolObject = tool.toObject()
    if (toolObject.hasReview) {
      toolObject.steps = toolObject.steps.concat(savoringReviewSteps)
    }
    const toolResponseToCreate = { ...toolObject, user: user._id, toolId: tool._id }
    ToolResponses.create(toolResponseToCreate)
      .then((toolResponse) => {
        res.status(201).json(toolResponse)
      })
  } catch (err) {
    next(err)
  }
}
