import { validateOwnerOrAdmin } from '../../auth'

import ToolResponses from './toolResponsesModel'

export default {
  getAll, get, create, update,
}

function getAll(req, res, next) {
  ToolResponses.find()
    .populate('user')
    .then(tools => res.json(tools))
    .catch(next)
}

function get(req, res, next) {
  ToolResponses.findOne({ _id: req.params.id })
    .populate('user')
    .then(validateOwnerOrAdmin(req.user))
    .then(tool => res.json(tool))
    .catch(next)
}

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
