import React from 'react'
import axios from 'axios'

import PostsGenerator from './PostsGenerator'

import Layout from '../../components/Layout'

const title = 'Posts Generator'

async function action({ params, path }) {
  const { data } = await axios.get(`/api/posts/${params.post}`)
  return {
    chunks: ['postsGenerator'],
    title,
    path,
    description: 'Create a post',
    component: (
      <Layout path={path}>
        <PostsGenerator data={data} url={params.post} />
      </Layout>
    ),
  }
}

export default action
