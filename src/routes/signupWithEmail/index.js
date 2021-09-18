import React from 'react'

import SignupWithEmail from './signupWithEmail'

import Layout from '../../components/Layout'

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
