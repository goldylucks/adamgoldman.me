import { validateOwner } from '../../auth'

import ToolsHistory from './toolsHistoryModel'

export default {
  getAll, get, create, update,
}

function getAll(req, res, next) {
  ToolsHistory.find()
    .then(tools => res.json(tools))
    .catch(next)
}

function get(req, res, next) {
  ToolsHistory.findOne({ _id: req.params.id })
    .then(validateOwner(req.user._id))
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
