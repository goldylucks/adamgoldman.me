import React from 'react'

import FbRedirect from './FbRedirect'

function action({ params }) {
  return {
    chunks: ['fbRedirect'],
    title: 'Redirect',
    path: `/fb-redirect/${params.to}`,
    description: 'Adam Goldman Redirecting',
    component: <FbRedirect />,
  }
}

export default action
