import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'
import reviewSteps from '../../components/MultiStepForm/reviewSteps'

import Tool from './Tool'

async function action({ path }) {
  let { data } = await axios.get(`/api${path}`)
  if (!data) {
    global.console.warn('data is empty!')
    data = {}
  }
  if (data.hasReview) {
    data.steps = data.steps.concat(reviewSteps)
  }
  return {
    title: data.title,
    description: data.description,
    path,
    component: (
      <Layout path={path}>
        <Tool tool={data} path={path} />
      </Layout>
    ),
  }
}

export default action
