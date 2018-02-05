import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'

import PostsGenerator from './PostsGenerator'

const title = 'Posts Generator'

async function action({ params }) {
  const { data } = await axios.get(`/api/posts/${params.post}`)
  const path = `/posts-generator/${params.post}`
  return {
    chunks: ['postsGenerator'],
    title,
    path,
    description:
      'Create a post',
    component: (
      <Layout path={path}>
        <PostsGenerator data={data} url={params.post} />
      </Layout>
    ),
  }
}

export default action
