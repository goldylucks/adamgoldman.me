import React from 'react'

import Layout from '../../components/Layout'

import SavoringYourChildModules from './savoringYourChildModules'

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
