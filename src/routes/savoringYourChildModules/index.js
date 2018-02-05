import React from 'react'

import Layout from '../../components/Layout'

import SavoringYourChildModules from './savoringYourChildModules'

const title = 'SavoringYourChildModules'
const path = '/savoring-your-child/modules'

function action() {
  return {
    chunks: ['savoringYourChildModules'],
    title,
    path,
    description: 'List of modules',
    component: (
      <Layout path={path}>
        <SavoringYourChildModules />
      </Layout>
    ),
  }
}

export default action
