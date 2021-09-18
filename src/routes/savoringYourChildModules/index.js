import React from 'react'

import SavoringYourChildModules from './savoringYourChildModules'

import Layout from '../../components/Layout'

const title = 'Savoring Your Child Modules'

function action({ path }) {
  return {
    chunks: ['savoringYourChildModules'],
    title,
    path,
    description: 'Which module you want to explore next?',
    component: (
      <Layout path={path}>
        <SavoringYourChildModules />
      </Layout>
    ),
  }
}

export default action
