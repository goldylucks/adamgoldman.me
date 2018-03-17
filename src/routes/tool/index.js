import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'

import Tool from './Tool'

async function action({ path }) {
  const { data } = await axios.get(`/api${path}`)
  return {
    title: data.title,
    description: data.description,
    path,
    component: (
      <Layout path={path}>
        <Tool tool={data} path={path} />
      </Layout>
    ),
  }
}

export default action
