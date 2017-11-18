import React from 'react'

import BrainToolGenerator from './BrainToolGenerator'

const title = 'Brain Hacking Automation Tools Generator'

function action() {
  return {
    chunks: ['brainToolGenerator'],
    title,
    path: '/tool-wizard',
    description:
      'Create a brain tool',
    component: (
      <BrainToolGenerator />
    ),
  }
}

export default action
