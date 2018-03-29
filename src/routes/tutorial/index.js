import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'

import BrainToolV1 from './BrainTool-v1'
import BrainToolV3 from './BrainTool-v3'

const toolsV1 = [
  'internal-dialog-scrambeler',
  'loved-one-amplifier',
  'reverse-feeling-spin2',
]

const toolsV3 = [
  'perfect-day',
  'recurring-time-distortion',
  'grief-to-appreciation',
  'grief-to-appreciation-he',
]

async function action({ params }) {
  const path = getPath(params.tool)
  // to test new v3 tools
  if (params.tool.match(/EXP/)) {
    const { data } = await axios.get(`/api/tools/${params.tool.replace('EXP', '')}`)
    return {
      title: data.title,
      description: data.description,
      path,
      component: (
        <Layout path={path}>
          <BrainToolV3 tool={data} path={path} />
        </Layout>
      ),
    }
  }

  if (toolsV3.includes(params.tool)) {
    const { data } = await axios.get(`/api/tools/${params.tool}`)
    return {
      title: data.title,
      description: data.description,
      path,
      component: (
        <Layout path={path}>
          <BrainToolV3 tool={data} path={path} />
        </Layout>
      ),
    }
  }

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

function getPath(tool) {
  return tool.match(/trauma-relief-he|coming-to-wholeness|reverse-feeling-spin|internal-dialog-scrambeler|reverse-feeling-spin/)
    ? `/tools/${tool}`
    : `/tools/${tool}/`
}
