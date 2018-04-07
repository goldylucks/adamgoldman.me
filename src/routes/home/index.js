import React from 'react'

import Layout from '../../components/Layout'

import Home from './Home'

const tutorials = [
  {
    title: 'Trauma Relief',
    description: 'Soften traumas, bad memories, arguments, and fights',
    url: 'trauma-relief',
  },
  {
    title: 'Resolving Feelings',
    description: 'Resolve shame, guilt, anger, and more',
    url: 'resolving-feelings',
  },
  {
    title: 'Loved One Amplifier',
    description: 'Intensify the good feelings from the people you enjoy in your life',
    url: 'loved-one-amplifier',
  },
]

const path = '/'

async function action() {
  return {
    chunks: ['home'],
    title: 'Adam Goldman\'s Virtual Home',
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <Home
          tutorials={tutorials}
        />
      </Layout>
    ),
  }
}

export default action
