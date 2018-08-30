import React from 'react'

import Layout from '../../components/Layout'

import AdminCoupons from './adminCoupons'

async function action({ path }) {
  return {
    chunks: ['adminCoupons'],
    title: 'Admin Coupons Page',
    path,
    description: 'Admin Coupons Page',
    component: (
      <Layout path={path}>
        <AdminCoupons />
      </Layout>
    ),
  }
}

export default action
