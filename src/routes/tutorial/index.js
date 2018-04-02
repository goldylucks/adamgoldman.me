import React from 'react'

import Layout from '../../components/Layout'

import BrainToolV1 from './BrainTool-v1'
import BrainToolV3 from './BrainTool-v3'

const toolsV1 = [
  'internal-dialog-scrambeler',
]

async function action({ params, path }) {
  const tool = await import(`../../tutorials/${params.tool}.js`)
    .catch((error) => {
      if (error.message.startsWith('Cannot find module')) {
        console.error(`module ${params.tool} does not exists`) // eslint-disable-line no-console
        return null // module (tool) does not exists
      }
      throw error // loading chunk failed (render error page)
    })
  if (!tool) return null // go to next route (or render 404)
  const Comp = toolsV1.includes(params.tool)
    ? BrainToolV1
    : BrainToolV3

  return {
    title: tool.title,
    description: tool.description,
    path,
    component: (
      <Layout path={path}>
        <Comp tool={tool} path={path} />
      </Layout>
    ),
  }
}

export default action
