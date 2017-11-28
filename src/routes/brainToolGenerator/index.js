import React from 'react'
import axios from 'axios'

import BrainToolGenerator from './BrainToolGenerator'

const title = 'Brain Hacking Automation Tools Generator'

async function action({ params }) {
  const { data } = await axios.get(`/api/tools/${params.tool}`)
  const path = `/tool-generator/${params.tool}`
  return {
    chunks: ['brainToolGenerator'],
    title,
    path,
    description:
      'Create a brain tool',
    component: (
      <BrainToolGenerator data={data} url={params.tool} />
    ),
  }
}

export default action
