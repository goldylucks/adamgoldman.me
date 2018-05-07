import React from 'react'

import Layout from '../../components/Layout'

import AdminToolResponses from './AdminToolResponses'

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
