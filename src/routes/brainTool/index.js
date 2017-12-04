import React from 'react'
import axios from 'axios'

import BrainToolV1 from './BrainTool-v1'
import BrainToolV2 from './BrainTool-v2'
import BrainToolV3 from './BrainTool-v3'

const toolsV1 = [
  'smoking-destroyer',
  'grief-to-appreciation',
  'nail-biting-destroyer',
  'trauma-relief',
  'internal-dialog-scrambeler',
  'loved-one-amplifier',
  'reverse-feeling-spin',
  'reverse-feeling-spin2',
]

// const toolsV2 = [
//   'coming-to-wholeness',
// ]

const toolsV3 = [
  'feel-good-generator',
  'perfect-day',
  'recurring-time-distortion',
]

async function action({ params }) {
  // to test new v3 tools
  if (params.tool.match(/EXP/)) {
    const { data } = await axios.get(`/api/tools/${params.tool.replace('EXP', '')}`)
    return {
      title: data.title,
      description: data.description,
      path: `/tools/${params.tool}`,
      component: <BrainToolV3 tool={data} />,
    }
  }

  if (toolsV3.includes(params.tool)) {
    const { data } = await axios.get(`/api/tools/${params.tool}`)
    return {
      title: data.title,
      description: data.description,
      path: `/tools/${params.tool}`,
      component: <BrainToolV3 tool={data} />,
    }
  }

  const tool = await import(`../../brainTools/${params.tool}.js`)
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
    : BrainToolV2

  return {
    title: tool.title,
    description: tool.description,
    path: `/tools/${params.tool}`,
    component: <Comp tool={tool} />,
  }
}

export default action
