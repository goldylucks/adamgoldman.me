/* eslint no-use-before-define: 0 */

import path from 'path';
import fs from 'fs';

const pathToWriteFile = path.resolve(
  __dirname,
  '..',
  'src',
  'routes',
  'page',
  'pagesData.js',
);

// read all files in src/posts
const dirToReadPath = path.resolve(__dirname, '..', 'src', 'pages');

const fileToWrite = [
  'book-me.js',
  'i-dont-charge-i-accept.js',
  'lets-talk.js',
  'trainings.js',
  'welcome-apprentice-wizard.js',
  'books.js',
  'legal-stuff.js',
  'quotes.js',
  'who-am-i-anyway.js',
].map(fileNameToObject);

fs.writeFileSync(
  pathToWriteFile,
  `/* eslint-disable */
  export default ${JSON.stringify(fileToWrite, null, 2)}`,
);

function fileNameToObject(fileName) {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const page = require(path.resolve(dirToReadPath, fileName)).default;
  delete page.body;
  delete page.nick;
  delete page.ps;
  return { ...page, url: fileName.split('.js')[0] };
}
