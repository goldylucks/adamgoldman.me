import React from 'react'

import Blog from './Blog'

const title = 'Blog'

function action() {
  return {
    chunks: ['blog'],
    title,
    path: '/blog/',
    description: 'A blog with my humble thoughts and diabolical schemes',
    component: (
      <Blog />
    ),
  }
}

export default action
