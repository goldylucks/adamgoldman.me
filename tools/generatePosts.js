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

const fileToWrite = [
  'fibromyalgia-0-julianne-1',
  'ocd-and-guilt-gone-in-one-session',
  'im-not-like-the-others',
  'brain-exploration',
  'sol-and-the-authorized-rapist',
  'what-we-are-not-doing',
  'panic-attacks-a-broken-heart',
  'depression-and-betrayal-gone-in-minutes',
  'aprils-bus-phobia',
  'anat-the-down-syndrome-religious-thief',
  'bars-ceiling-of-self-image',
  'blind-cheryl-learns-about-colors',
  'calibrate-intervene-calibrate',
  'rachel-turns-family-trauma-to-parody',
  'ron-diving-panic-and-physical-pain',
  'rosie-fills-her-clinic',
  'shedding-grief-with-extra-weight',
  'dan-cuts-smoking',
  'dan-gets-laid',
  'jelous-nathan',
  'avoid-meetings',
  'mind-like-water-tartar-sauce',
  'my-teaching-history',
  'night-feeding',
  'nose-breathers-unite',
  'a-mind-for-numbers',
  'bandler-rare-1981',
  'bitcoin-first-steps',
  'coffee',
  'common-misconceptions',
  'dumb-rituals',
  'hard-confidence',
  'hello-slave',
  'how-to-ask-a-good-programming-question',
  'man-cant-think-or-reason',
  'memorize-numbers-fast',
  'open-source',
  'panic-away-insiders-view',
  'programming-resources',
  'rules',
  'sort-out-your-past',
  'streamlining-communication',
  'tea',
  'the-executed-king',
  'israel-insiders-tips',
  'tokyo',
  'udemy-super-learner',
  'your-current-life-situation',
].map(fileNameToObject);

fs.writeFileSync(
  pathToWriteFile,
  `/* eslint-disable */
  export default ${JSON.stringify(fileToWrite, null, 2)}`,
);

function fileNameToObject(fileName) {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const post = require(path.resolve(dirToReadPath, fileName)).default;
  delete post.body
  delete post.html
  delete post.nick
  delete post.ps
  return { ...post, url: fileName.split('.js')[0] };
}
