import React from 'react'

import Layout from '../../components/Layout'

import SavoringYourChildFeedback from './savoringYourChildFeedback'

const title = 'Savoring Your Child Feedback'

function action({ path }) {
  return {
    chunks: ['savoringYourChildFeedback'],
    title,
    path,
    description: 'Feedback from parents',
    component: (
      <Layout path={path}>
        <SavoringYourChildFeedback />
      </Layout>
    ),
  }
}

export default action
