import path from 'path'
import fs from 'fs'

// read all files in src/tutorials
const pathToWriteFile = path.resolve(
  __dirname,
  '..',
  'src',
  'routes',
  'tutorials',
  'tutorialsHardCoded.js',
)
const dirToReadPath = path.resolve(__dirname, '..', 'src', 'tutorials')

// tools by rendering order
const fileToWrite = [
  'trauma-relief-he',
  'coming-to-wholeness',
  'internal-dialog-scrambler',
].map(fileNameToObject)

// write file tutorials.js
fs.writeFileSync(
  pathToWriteFile,
  `/* eslint-disable */
  export default ${JSON.stringify(fileToWrite, null, 2)}`,
)

function fileNameToObject(fileName) {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const { ...tool } = require(path.resolve(dirToReadPath, fileName))
  delete tool.default
  delete tool.stepCount
  delete tool.nick
  return { ...tool, url: fileName.split('.js')[0] }
}
