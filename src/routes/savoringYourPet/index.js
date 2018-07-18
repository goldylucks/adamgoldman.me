import React from 'react'

import SavoringYourPet from './SavoringYourPet'

function action({ path }) {
  return {
    chunks: ['savoringYourPet'],
    title: 'Savoring Your Pet',
    path,
    description: "How to honor your furry friend's memory after the transition, and savor the relationship in a healing way",
    component: (
      <SavoringYourPet path={path} />
    ),
  }
}

export default action
