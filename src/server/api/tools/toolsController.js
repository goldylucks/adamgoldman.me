import Tools from './toolsModel'

export default {
  getAll, getByUrl, updateOrCreate, delByUrl,
}

function getAll(req, res, next) {
  Tools.find()
    .then(tools => res.json(tools))
    .catch(next)
}

function getByUrl(req, res, next) {
  const { url } = req.params
  Tools.findOne({ url })
    .then(tool => res.json(tool))
    .catch(next)
}

function delByUrl(req, res, next) {
  Tools.deleteOne({ url: req.params.url })
    .then(tool => res.json(tool))
    .catch(next)
}

function updateOrCreate(req, res, next) {
  const query = { url: req.body.url }
  const update = req.body
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }
  Tools.findOneAndUpdate(query, update, options)
    .then(tool => res.status(200).send(tool))
    .catch(next)
}
