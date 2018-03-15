import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'

import Tool from './Tool'

async function action({ pathname }) {
  const path = `/tools/${pathname}/`

  const { data } = await axios.get(`/api/tools/${pathname}`)
  console.log('data', data)
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
