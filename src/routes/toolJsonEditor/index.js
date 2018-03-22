import React from 'react'

import ToolJsonEditor from './ToolJsonEditor'

const title = 'Brain Hacking Automation Tools Generator'

async function action() {
  const path = '/tool-json-editor'
  return {
    chunks: ['toolEditor'],
    title,
    path,
    description:
      'Create a brain tool',
    component: (
      <ToolJsonEditor />
    ),
  }
}

export default action
