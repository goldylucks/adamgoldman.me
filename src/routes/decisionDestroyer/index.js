import React from 'react'

import DecisionDestroyer from './DecisionDestroyer'

function action({ path }) {
  return {
    chunks: ['decisionDestroyer'],
    title: 'Decision Destroyer',
    path,
    description:
      'How to transform decisions that have a negative impact on your life',
    component: <DecisionDestroyer path={path} />,
  }
}

export default action
