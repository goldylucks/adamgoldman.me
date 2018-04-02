import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'

import Tutorials from './Tutorials'
import hardCodedTutorials from './tutorialsHardCoded'

const title = 'Brain Hacking Automation Tools'
const description = 'Rewire your brain step by step tutorials'


async function action({ path }) {
  const { data } = await axios.get('/api/tools/all/')
  return {
    chunks: ['tutorials'],
    title,
    description,
    path,
    component: (
      <Layout path={path}>
        <Tutorials
          tutorials={data.concat(hardCodedTutorials)}
          title={title}
          path={path}
          description={description}
        />
      </Layout>
    ),
  }
}

export default action
