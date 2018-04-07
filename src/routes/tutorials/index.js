import React from 'react'

import Layout from '../../components/Layout'

import Tutorials from './Tutorials'

const title = 'Brain Hacking Automation Tools'
const description = 'Rewire your brain step by step tutorials'

async function action({ path }) {
  return {
    chunks: ['tutorials'],
    title,
    description,
    path,
    component: (
      <Layout path={path}>
        <Tutorials
          title={title}
          path={path}
          description={description}
        />
      </Layout>
    ),
  }
}

export default action
