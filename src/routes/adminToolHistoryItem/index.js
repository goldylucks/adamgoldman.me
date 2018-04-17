import React from 'react'

import Layout from '../../components/Layout'

import AdminToolHistoryItem from './AdminToolHistoryItem'

async function action({ path, params }) {
  return {
    chunks: ['adminToolHistoryItem'],
    title: 'Tool history',
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <AdminToolHistoryItem id={params.id} />
      </Layout>
    ),
  }
}

export default action
