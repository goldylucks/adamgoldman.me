import Posts from './postsModel'

export default {
  getByUrl, updateOrCreate, updateTranscript, getTranscripts,
}

function getByUrl(req, res, next) {
  Posts.findOne({ url: req.params.url })
    .then(post => res.json(post))
    .catch(next)
}

function updateOrCreate(req, res, next) {
  const query = { url: req.body.url }
  const update = req.body
  const options = {
    upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true,
  }
  Posts.findOneAndUpdate(query, update, options)
    .then(post => res.json(post))
    .catch(next)
}

function updateTranscript(req, res, next) {
  Posts.update({ url: req.params.url }, { transcript: req.body })
    .then(post => res.json(post))
    .catch(next)
}

function getTranscripts(req, res, next) {
  Posts.find({ tags: { $in: ['Transcripts'] } }, {
    url: 1, title: 1, createdAt: 1, description: 1, tags: 1,
  })
    .then(transcripts => res.send(transcripts))
    .catch(next)
}
