/* eslint no-use-before-define: 0 */

import path from 'path';
import fs from 'fs';

const pathToWriteFile = path.resolve(
  __dirname,
  '..',
  'src',
  'routes',
  'blog',
  'postsData.js',
);

// read all files in src/posts
const dirToReadPath = path.resolve(__dirname, '..', 'src', 'posts');

const fileToWrite = fs.readdirSync(dirToReadPath).map(fileNameToObject);

fs.writeFileSync(
  pathToWriteFile,
  `/* eslint-disable */
  export default ${JSON.stringify(fileToWrite, null, 2)}`,
);

function fileNameToObject(fileName) {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const post = require(path.resolve(dirToReadPath, fileName)).default;
  return { ...post, url: fileName.split('.js')[0] };
}
