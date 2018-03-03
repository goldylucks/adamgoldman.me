import React from 'react'

import Layout from '../../components/Layout'

import AdminTypeform from './AdminTypeform'

const path = '/admin-typeform'

function action() {
  return {
    chunks: ['adminTypeform'],
    title: 'Admin Typeform Page',
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <AdminTypeform />
      </Layout>
    ),
  }
}

export default action
