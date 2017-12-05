import React from 'react'

import BlogPost from './BlogPost'
import Transcript from './Transcript'

async function action({ params }) {
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
    path: `/blog/${params.post}/`,
    description: post.description,
    component: <Comp {...post} />,
  }
}

export default action
