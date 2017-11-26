import Tools from './toolsModel'

export default {
  getByUrl, createItem,
}

function getByUrl(req, res, next) {
  const { url } = req.params
  Tools.findOne({ url })
    .then(tool => res.json(tool))
    .catch(next)
}

function createItem(req, res, next) {
  Tools.create(req.body)
    .then(tool => res.status(201).send(tool))
    .catch(next)
}
