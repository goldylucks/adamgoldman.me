import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'

import BlogPost from './BlogPost'
import Transcript from './Transcript'

const dbPosts = [
  'healing-metaphors-water-slime',
  'ocd-and-guilt-gone-in-one-session',
  'resolving-cramps-with-metaphors',
  'oliver-anxiety-ocd',
]

async function action({ params, path }) {
  if (dbPosts.includes(params.post)) {
    const { data } = await axios.get(`/api/posts/${params.post}`)
    const Comp = data.transcript.length ? Transcript : BlogPost
    return {
      title: data.title,
      description: data.description,
      path,
      component: (
        <Layout path={path}>
          <Comp {...data} />
        </Layout>
      ),
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
    path,
    description: post.description,
    component: (
      <Layout path={path}>
        <Comp {...post} />
      </Layout>
    ),
  }
}

export default action
