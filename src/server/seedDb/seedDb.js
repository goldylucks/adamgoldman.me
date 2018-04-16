import deasync from 'deasync'
import prompt from 'prompt-sync' // eslint-disable-line import/no-extraneous-dependencies

import Tools from '../api/tools/toolsModel'
import ToolsHistory from '../api/toolsHistory/toolsHistoryModel'

import { tools, toolsHistory } from './seedDbData'

const ModelsToCleanDb = [Tools, ToolsHistory]

if (prompt()('Seed DB? (type yes to prcoeed)') !== 'yes') {
  process.exit(0)
}

// init
global.console.log('Seeding DB ...')

export default run()

function run() {
  let ready // eslint-disable-line no-unmodified-loop-condition
  cleanDB()
    .then(seedTools)
    .then(seedToolsHistory)
    .then(onSeedSuccess)
    .catch(onSeedError)
    .then(() => { ready = true })
    // make seed sync so test won't run before it is completed
  while (ready === undefined) { // eslint-disable-line no-unmodified-loop-condition
    deasync.sleep(100)
  }
}

function cleanDB() {
  global.console.log('Cleaning the DB ...')
  const promises = ModelsToCleanDb.map(model => model.remove().exec())
  return Promise.all(promises)
}

function seedTools() {
  global.console.log('Seeding tools ...')
  const promises = tools.map(p => Tools.create(p))
  return Promise.all(promises)
}

function seedToolsHistory() {
  global.console.log('Seeding toolsHistory ...')
  const promises = toolsHistory.map(p => ToolsHistory.create(p))
  return Promise.all(promises)
}

function onSeedSuccess() {
  global.console.log('Seeded DB!')
}

function onSeedError(err) {
  global.console.error('error seeding DB:', err)
}
