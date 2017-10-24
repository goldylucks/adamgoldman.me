/* eslint no-use-before-define: 0 */

import path from 'path';
import fs from 'fs';

// read all files in src/brainTools
const pathToWriteFile = path.resolve(
  __dirname,
  '..',
  'src',
  'routes',
  'brainTools',
  'brainToolsData.js',
);
const dirToReadPath = path.resolve(__dirname, '..', 'src', 'brainTools');
const fileToWrite = fs
  .readdirSync(dirToReadPath)
  .filter(onlyJs)
  .map(fileNameToObject);

// write file brainTools.js
fs.writeFileSync(
  pathToWriteFile,
  `/* eslint-disable */
  export default ${JSON.stringify(fileToWrite, null, 2)}`,
);
function fileNameToObject(fileName) {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const { ...tool } = require(path.resolve(dirToReadPath, fileName))
  delete tool.default
  delete tool.stepCount
  delete tool.nick
  return { ...tool, url: fileName.split('.js')[0] };
}

// Filter css files
function onlyJs(fileName) {
  return fileName.includes('.js');
}
