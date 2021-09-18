import React from 'react'

import ToolResponse from './ToolResponse'

import Layout from '../../components/Layout'

async function action({ params, path }) {
  return {
    chunks: ['toolResponse'],
    title: 'Tool process',
    description: 'Tool process',
    path,
    component: (
      <Layout path={path}>
        <ToolResponse path={path} responseId={params.toolResponseId} />
      </Layout>
    ),
  }
}

export default action
