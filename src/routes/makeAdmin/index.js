import React from 'react'

import Layout from '../../components/Layout'

import MakeAdmin from './MakeAdmin'

const path = '/make-admin'

// @TODO hide from robot.txt
async function action() {
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
