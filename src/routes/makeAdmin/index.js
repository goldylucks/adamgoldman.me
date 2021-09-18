import React from 'react'

import MakeAdmin from './MakeAdmin'

import Layout from '../../components/Layout'

async function action({ path }) {
  return {
    chunks: ['makeAdmin'],
    title: "Adam Goldman's Management page",
    path,
    description: 'Adminize page',
    component: (
      <Layout path={path}>
        <MakeAdmin />
      </Layout>
    ),
  }
}

export default action
