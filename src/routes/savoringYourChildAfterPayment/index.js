import React from 'react'

import SavoringYourChildAfterPayment from './savoringYourChildAfterPayment'

function action({ path }) {
  return {
    chunks: ['savoringYourChildAfterPayment'],
    title: 'Savoring Your Child - Success',
    path,
    description: 'Success page',
    component: (
      <SavoringYourChildAfterPayment path={path} />
    ),
  }
}

export default action
