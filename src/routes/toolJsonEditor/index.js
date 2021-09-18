import React from 'react'

import ToolJsonEditor from './ToolJsonEditor'

const title = 'Brain Hacking Automation Tools Generator'

async function action({ path }) {
  return {
    chunks: ['toolEditor'],
    title,
    path,
    description: 'Create a brain tool',
    component: <ToolJsonEditor />,
  }
}

export default action
