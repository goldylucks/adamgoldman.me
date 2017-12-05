import Posts from './postsModel'

export default {
  getByUrl, updateOrCreate,
}

function getByUrl(req, res, next) {
  const { url } = req.params
  Posts.findOne({ url })
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
