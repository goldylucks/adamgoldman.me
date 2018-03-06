import React from 'react'

import Layout from '../../components/Layout'

import CustomerChat from './customerChat'

const path = '/customer-chat'

function action() {
  return {
    chunks: ['customerChat'],
    title: 'Customer Chat Plugin',
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <CustomerChat />
      </Layout>
    ),
  }
}

export default action
