import React from 'react'

import Layout from '../../components/Layout'

import MakeAdmin from './MakeAdmin'

async function action({ path }) {
  return {
    chunks: ['makeAdmin'],
    title: 'Adam Goldman\'s Management page',
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
