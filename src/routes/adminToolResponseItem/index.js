import React from 'react'

import AdminToolResponseItem from './AdminToolResponseItem'

import Layout from '../../components/Layout'

async function action({ path, params }) {
  return {
    chunks: ['adminToolResponseItem'],
    title: 'Tool history',
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <AdminToolResponseItem id={params.id} />
      </Layout>
    ),
  }
}

export default action
