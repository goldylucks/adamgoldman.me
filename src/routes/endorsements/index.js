import React from 'react'

import Layout from '../../components/Layout'

import Endorsements from './Endorsements'

const path = '/endorsements'

async function action() {
  return {
    chunks: ['endorsements'],
    title: 'Endorsements',
    path,
    description: 'Endorsements',
    component: (
      <Layout path={path}>
        <Endorsements />
      </Layout>
    ),
  }
}

export default action
