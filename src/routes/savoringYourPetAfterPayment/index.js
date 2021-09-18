import React from 'react'

import SavoringYourPetAfterPayment from './savoringYourPetAfterPayment'

function action({ path }) {
  return {
    chunks: ['savoringYourPetAfterPayment'],
    title: 'Savoring Your Pet - Success',
    path,
    description: 'Success page',
    component: <SavoringYourPetAfterPayment path={path} />,
  }
}

export default action
