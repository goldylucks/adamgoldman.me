import React from 'react'

import Layout from '../../components/Layout'

import SignupWithEmail from './signupWithEmail'

async function action({ path }) {
  return {
    chunks: ['signupWithEmail'],
    title: 'Signup With Email',
    path,
    description: 'Signup with email',
    component: (
      <Layout path={path}>
        <SignupWithEmail />
      </Layout>
    ),
  }
}

export default action
