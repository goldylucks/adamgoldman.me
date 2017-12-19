import React from 'react'
import axios from 'axios'

import BlogPost from './BlogPost'
import Transcript from './Transcript'

const dbPosts = [
  'foo',
]

async function action({ params }) {
  if (dbPosts.includes(params.post)) {
    const { data } = await axios.get(`/api/posts/${params.post}`)
    console.log('data', data)
    const Comp = data.transcript.length ? Transcript : BlogPost
    return {
      title: data.title,
      description: data.description,
      path: `/posts/${params.post}`,
      component: <Comp {...data} />,
    }
  }

  const post = await import(`../../posts/${params.post}.js`)
    .then(module => module.default) // use an object from `export default`
    .catch((error) => {
      if (error.message.startsWith('Cannot find module')) {
        return null // module (post) does not exists
      }
      throw error // loading chunk failed (render error page)
    })
  if (!post) return null // go to next route (or render 404)
  const Comp = post.transcript ? Transcript : BlogPost

  return {
    title: post.title,
    path: getPath(params.post),
    description: post.description,
    component: <Comp {...post} />,
  }
}

export default action

function getPath(post) {
  return post.match(/healing-metaphors-water-slime|dora-talias-cancer/)
    ? `/blog/${post}`
    : `/blog/${post}/`
}
