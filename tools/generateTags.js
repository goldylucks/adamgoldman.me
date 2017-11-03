import path from 'path'
import fs from 'fs'

import postsData from '../src/routes/blog/postsData'
import pagesData from '../src/routes/page/pagesData'
import brainToolsData from '../src/routes/brainTools/brainToolsData'

/* eslint-disable no-console */
console.log('\n*******************')
console.log('Are all posts, pages and brain tools generated?')
console.log('*******************\n')
/* eslint-enable no-console */

const pathToWriteFile = path.resolve(
  __dirname,
  '..',
  'src',
  'routes',
  'tags',
  'tagsData.js',
)

const tags = []

const dataIterator = (data, type) => {
  data.forEach((item) => {
    if (!item.tags) {
      return
    }
    item.tags.forEach((t) => {
      // if tag doesn't exist, create it
      const previousTag = tags.find(tag => tag.title === t)
      const newItem = { url: item.url, type }
      if (!previousTag) {
        tags.push({ title: t, items: [newItem] })
        return
      }
      // add url of post to tag items
      previousTag.items.push(newItem)
    })
  })
}

dataIterator(postsData, 'blog')
dataIterator(pagesData, 'page')
dataIterator(brainToolsData, 'tools')

fs.writeFileSync(
  pathToWriteFile,
  `/* eslint-disable */
  export default ${JSON.stringify(tags, null, 2)}`,
)
