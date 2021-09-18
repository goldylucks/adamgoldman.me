import React from 'react'

import Endorsements from './Endorsements'

import Layout from '../../components/Layout'

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
