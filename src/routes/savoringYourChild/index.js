import React from 'react'

import SavoringYourChild from './SavoringYourChild'

import Layout from '../../components/Layout'
import SavoringToolResponseContainer from '../../components/SavoringToolResponseContainer'

function action({ path }) {
  return {
    chunks: ['savoringYourChild'],
    title: 'Savoring Your Child',
    path,
    description:
      "How to honor your child's memory after the transition, and savor the relationship in a healing way",
    component: (
      <Layout path={path}>
        <SavoringToolResponseContainer toolSlug='savoring-intro'>
          <SavoringYourChild path={path} {...module} />
        </SavoringToolResponseContainer>
      </Layout>
    ),
  }
}

export default action
