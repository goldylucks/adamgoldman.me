import React from 'react'
import axios from 'axios'

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
      <PostsGenerator data={data} url={params.post} />
    ),
  }
}

export default action
