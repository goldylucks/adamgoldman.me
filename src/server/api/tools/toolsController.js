import fs from 'fs'
import path from 'path'

import _ from 'lodash'

import Tools from './toolsModel'

export default {
  getAll, getByUrl, updateOrCreate, delByUrl, exportTool,
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
  const options = {
    upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true,
  }
  Tools.findOneAndUpdate(query, update, options)
    .then(tool => res.status(200).send(tool))
    .catch(next)
}

function exportTool(req, res, next) {
  const fileName = toolFileName(req.body.url)
  try {
    fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'server', 'seedDb', `${fileName}.json`), JSON.stringify(req.body, null, 2))
    let text = fs.readFileSync(path.resolve(__dirname, '..', 'src', 'server', 'seedDb', 'seedDbData.js'), 'utf8')
    if (!text.includes(fileName)) {
      text = `import ${fileName} from './${fileName}.json'\n${text}`
      text = text.split('tools = [').join(`tools = [\n  ${fileName},`)
      fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'server', 'seedDb', 'seedDbData.js'), text)
    }
    res.send('saved to file!')
  } catch (err) {
    next(err)
  }
}

export function toolFileName(str) {
  return `seedDb${str.split('-').map(_.capitalize).join('')}ToolData`
}
