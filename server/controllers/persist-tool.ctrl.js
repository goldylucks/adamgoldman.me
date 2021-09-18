const path = require('path')
const fs = require('fs')
const toolsDataDir = path.resolve(__dirname, '../../src/tools')

const persistToolCtrl = (req, res) => {
  const { toolName, steps } = req.body
  const fileWithPath = path.resolve(toolsDataDir, `${toolName}.json`)
  const dataToWrite = JSON.stringify({ steps }, null, 2)
  fs.writeFileSync(fileWithPath, dataToWrite)
  res.send('success')
}

module.exports = persistToolCtrl
