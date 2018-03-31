import React from 'react'

import Layout from '../../components/Layout'

import ToolByHistoryId from './ToolByHistoryId'

async function action({ params, path }) {
  return {
    title: 'Tool process',
    description: 'Tool process',
    path,
    component: (
      <Layout path={path}>
        <ToolByHistoryId path={path} historyId={params.historyId} />
      </Layout>
    ),
  }
}

export default action
