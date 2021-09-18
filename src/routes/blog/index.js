import React from 'react'

import Blog from './Blog'

import Layout from '../../components/Layout'

const title = 'Blog'

function action({ path }) {
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
