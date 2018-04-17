import React from 'react'

import Layout from '../../components/Layout'

import AdminToolHistory from './AdminToolHistory'

async function action({ path }) {
  return {
    chunks: ['adminToolHistory'],
    title: 'Tool history',
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <AdminToolHistory path={path} />
      </Layout>
    ),
  }
}

export default action
