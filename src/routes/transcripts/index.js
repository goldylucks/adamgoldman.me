import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'

import Transcripts from './Transcripts'

const title = 'Transcripts'
const description = 'Transcripts and notes of sessions with "clients"'

async function action({ path }) {
  const { data } = await axios.get('/api/posts/transcripts/')
  return {
    chunks: ['transcripts'],
    title,
    path,
    description,
    component: (
      <Layout path={path}>
        <Transcripts transcripts={data} title={title} description={description} />
      </Layout>
    ),
  }
}

export default action
