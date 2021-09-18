import React from 'react'

import SavoringYourChildIntroQuestionnaire from './savoringYourChildIntroQuestionnaire'

import Layout from '../../components/Layout'
import SavoringToolResponseContainer from '../../components/SavoringToolResponseContainer'

function action({ path }) {
  return {
    chunks: ['savoringYourChildIntroQuestionnaire'],
    title: 'Savoring Your Child Intro Questionnaire',
    path,
    description: 'Savoring Your Child Intro Questionnaire',
    component: (
      <Layout path={path}>
        <SavoringToolResponseContainer toolSlug='savoring-intro'>
          <SavoringYourChildIntroQuestionnaire path={path} {...module} />
        </SavoringToolResponseContainer>
      </Layout>
    ),
  }
}

export default action
