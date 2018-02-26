import React from 'react'

import Layout from '../../components/Layout'

import SavoringYourChild from './SavoringYourChild'

const path = '/savoring-your-child'

function action() {
  return {
    chunks: ['savoringYourChild'],
    title: 'Savoring Your Child',
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
