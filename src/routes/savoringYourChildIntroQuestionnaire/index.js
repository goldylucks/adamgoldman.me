import React from 'react'

import Layout from '../../components/Layout'
import SavoringToolResponseContainer from '../../components/SavoringToolResponseContainer'

import SavoringYourChildIntroQuestionnaire from './savoringYourChildIntroQuestionnaire'

function action({ path }) {
  return {
    chunks: ['savoringYourChildIntroQuestionnaire'],
    title: 'Savoring Your Child Intro Questionnaire',
    path,
    description: 'Savoring Your Child Intro Questionnaire',
    component: (
      <Layout path={path}>
        <SavoringToolResponseContainer toolSlug="savoring-intro">
          <SavoringYourChildIntroQuestionnaire path={path} {...module} />
        </SavoringToolResponseContainer>
      </Layout>
    ),
  }
}

export default action
