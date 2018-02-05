export default {
  getDummy,
}

function getDummy(req, res) {
  res.send(`your name is ${req.params.name}`)
}
