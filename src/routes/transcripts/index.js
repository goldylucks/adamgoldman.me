import React from 'react'
import axios from 'axios'

import Transcripts from './Transcripts'

const title = 'Transcripts'
const description = 'Transcripts and notes of sessions with "clients"'

async function action() {
  const { data } = await axios.get('/api/posts/transcripts')
  return {
    chunks: ['transcripts'],
    title,
    description,
    path: '/transcripts',
    component: (
      <Transcripts transcripts={data} title={title} description={description} />
    ),
  }
}

export default action
