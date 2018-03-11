import React from 'react'
import axios from 'axios'

import TutorialGenerator from './TutorialGenerator'

const title = 'Brain Hacking Automation Tools Generator'

async function action({ params }) {
  const { data } = await axios.get(`/api/tools/${params.tool}`)
  const path = `/tutorial-generator/${params.tool}`
  return {
    chunks: ['tutorialGenerator'],
    title,
    path,
    description:
      'Create a brain tool',
    component: (
      <TutorialGenerator data={data} url={params.tool} />
    ),
  }
}

export default action
