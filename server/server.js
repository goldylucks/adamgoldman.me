const express = require('express')

const persistToolCtrl = require('./controllers/persist-tool.ctrl')
const app = express()

const PORT = process.env.PORT || 3004

app.use(express.json())
app.post('/persist-tool', persistToolCtrl)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on ' + PORT)
})
