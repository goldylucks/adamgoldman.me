import React from 'react'

import DecisionDestroyerAfterPayment from './decisionDestroyerAfterPayment'

function action({ path }) {
  return {
    chunks: ['decisionDestroyerAfterPayment'],
    title: 'Decision Destroyer - Success',
    path,
    description: 'Success page',
    component: (
      <DecisionDestroyerAfterPayment path={path} />
    ),
  }
}

export default action
