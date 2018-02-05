import React from 'react'

import Layout from '../../components/Layout'

import Blog from './Blog'

const title = 'Blog'
const path = '/blog/'

function action() {
  return {
    chunks: ['blog'],
    title,
    path,
    description: 'A blog with my humble thoughts and diabolical schemes',
    component: (
      <Layout path={path}>
        <Blog />
      </Layout>
    ),
  }
}

export default action
