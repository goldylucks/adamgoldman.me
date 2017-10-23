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
// write export default {array} to file
// put file in src/routes/brainTools/brainToolsData.js

function fileNameToObject(fileName) {
  const file = fs.readFileSync(path.resolve(dirToReadPath, fileName), {
    encoding: 'utf-8',
  });
  const title = file.split("export const title = '")[1].split("';")[0];
  const description = file
    .split('export const description = `')[1]
    .split('`;')[0];
  return { title, description, url: fileName.split('.js')[0] };
}

// Filter css files
function onlyJs(fileName) {
  return fileName.includes('.js');
}
