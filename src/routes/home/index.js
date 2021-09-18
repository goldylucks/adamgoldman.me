import React from 'react'

import Home from './Home'

import Layout from '../../components/Layout'

const path = '/'

async function action() {
  return {
    chunks: ['home'],
    title: "Adam Goldman's Virtual Home",
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <Home />
      </Layout>
    ),
  }
}

export default action
