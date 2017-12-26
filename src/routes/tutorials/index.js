import React from 'react'
import axios from 'axios'

import Tutorials from './Tutorials'
import hardCodedTutorials from './tutorialsHardCoded'

const title = 'Brain Hacking Automation Tools'
const description = 'Rewire your brain step by step tutorials'

async function action() {
  const { data } = await axios.get('/api/tools/all')
  return {
    chunks: ['tutorials'],
    title,
    description,
    path: '/tools',
    component: (
      <Tutorials
        tutorials={data.concat(hardCodedTutorials)}
        title={title}
        description={description}
      />
    ),
  }
}

export default action
