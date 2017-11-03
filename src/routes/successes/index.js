import React from 'react'

import Successes from './Successes'

function action() {
  return {
    chunks: ['successes'],
    title: 'Successes',
    description: "Students' successes",
    path: '/successes',
    component: (
      <Successes />
    ),
  }
}

export default action
