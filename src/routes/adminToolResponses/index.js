import React from 'react'

import AdminToolResponses from './AdminToolResponses'

import Layout from '../../components/Layout'

async function action({ path }) {
  return {
    chunks: ['adminToolResponses'],
    title: 'Tool Responses',
    path,
    description: 'Tools responses',
    component: (
      <Layout path={path}>
        <AdminToolResponses path={path} />
      </Layout>
    ),
  }
}

export default action
