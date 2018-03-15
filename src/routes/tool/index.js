import React from 'react'
// import axios from 'axios'

import Layout from '../../components/Layout'

import mockShame from './mockShame'
import Tool from './Tool'

async function action({ params }) {
  const path = `/tools/${params.tool}/`

  // const { data } = await axios.get(`/api/tools/${params.tool}`)
  const data = mockShame
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
