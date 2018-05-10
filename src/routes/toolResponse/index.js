import React from 'react'

import Layout from '../../components/Layout'

import ToolResponse from './ToolResponse'

async function action({ params, path }) {
  return {
    chunks: ['toolResponse'],
    title: 'Tool process',
    description: 'Tool process',
    path,
    component: (
      <Layout path={path}>
        <ToolResponse path={path} responseId={params.historyId} />
      </Layout>
    ),
  }
}

export default action
