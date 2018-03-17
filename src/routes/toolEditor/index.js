import React from 'react'
import axios from 'axios'

import ToolEditor from './ToolEditor'

const title = 'Brain Hacking Automation Tools Generator'

async function action({ params }) {
  const { data } = await axios.get(`/api/tools/${params.tool}`)
  const path = `/tool-editor/${params.tool}`
  return {
    chunks: ['toolEditor'],
    title,
    path,
    description:
      'Create a brain tool',
    component: (
      <ToolEditor data={data} url={params.tool} />
    ),
  }
}

export default action
