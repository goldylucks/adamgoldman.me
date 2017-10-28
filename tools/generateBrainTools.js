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

// tools by rendering order
const fileToWrite = [
  'smoking-destroyer',
  'feel-good-generator',
  'grief-to-appreciation',
  'nail-biting-destroyer',
  'coming-to-wholeness',
  'perfect-day',
  'trauma-relief',
  'internal-dialog-scrambeler',
  'loved-one-amplifier',
  'reverse-feeling-spin',
  'reverse-feeling-spin2',
  'recurring-time-distortion',
].map(fileNameToObject);

// write file brainTools.js
fs.writeFileSync(
  pathToWriteFile,
  `/* eslint-disable */
  export default ${JSON.stringify(fileToWrite, null, 2)}`,
);

function fileNameToObject(fileName) {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const { ...tool } = require(path.resolve(dirToReadPath, fileName));
  delete tool.default;
  delete tool.stepCount;
  delete tool.nick;
  return { ...tool, url: fileName.split('.js')[0] };
}
