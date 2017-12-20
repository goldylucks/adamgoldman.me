import Posts from './postsModel'

export default {
  getByUrl, updateOrCreate, updateTranscript,
}

function getByUrl(req, res, next) {
  Posts.findOne({ url: req.params.url })
    .then(post => res.json(post))
    .catch(next)
}

function updateOrCreate(req, res, next) {
  const query = { url: req.body.url }
  const update = req.body
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }
  Posts.findOneAndUpdate(query, update, options)
    .then(post => res.json(post))
    .catch(next)
}

function updateTranscript(req, res, next) {
  Posts.update({ url: req.params.url }, { transcript: req.body })
    .then(post => res.json(post))
    .catch(next)
}
