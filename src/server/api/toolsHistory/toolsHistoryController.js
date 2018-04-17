import { validateOwnerOrAdmin } from '../../auth'

import ToolsHistory from './toolsHistoryModel'

export default {
  getAll, get, create, update,
}

function getAll(req, res, next) {
  ToolsHistory.find()
    .populate('user')
    .then(tools => res.json(tools))
    .catch(next)
}

function get(req, res, next) {
  ToolsHistory.findOne({ _id: req.params.id })
    .populate('user')
    .then(validateOwnerOrAdmin(req.user))
    .then(tool => res.json(tool))
    .catch(next)
}

function create(req, res, next) {
  ToolsHistory.create(req.body)
    .then(tool => res.status(201).json(tool))
    .catch(next)
}

function update(req, res, next) {
  ToolsHistory.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(DBres => res.json(DBres))
    .catch(next)
}
