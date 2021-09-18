import React from 'react'

import Layout from '../../components/Layout'
import Page from '../page/Page'

import notFound from './notFound'

const path = '/404/'

function action() {
  return {
    title: 'Welcome! To the middle of fucking nowhere ...',
    decription: "Where am I? Who am I? What's the meaning of all this?",
    chunks: ['not-found'],
    component: (
      <Layout path={path}>
        <Page {...notFound} />
      </Layout>
    ),
    status: 404,
  }
}

export default action
