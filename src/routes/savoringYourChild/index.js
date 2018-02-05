import React from 'react'

import Layout from '../../components/Layout'

import SavoringYourChild from './SavoringYourChild'

const path = '/savoring-your-child'

function action() {
  return {
    chunks: ['savoringYourChild'],
    title: 'My Virtual SavoringYourChild',
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <SavoringYourChild />
      </Layout>
    ),
  }
}

export default action
