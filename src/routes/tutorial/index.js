import React from 'react'

import BrainToolV3 from './BrainTool-v3'

async function action({ params, path }) {
  const toolSlug = path.split('/')[2]
  const tool = await import(`../../tutorials/${toolSlug}.js`).catch(error => {
    if (error.message.startsWith('Cannot find module')) {
      console.error(`module ${params.tool} does not exists`) // eslint-disable-line no-console
      return null // module (tool) does not exists
    }
    throw error // loading chunk failed (render error page)
  })
  if (!tool) return null // go to next route (or render 404)

  return {
    title: tool.title,
    description: tool.description,
    path,
    component: <BrainToolV3 tool={tool} path={path} />,
  }
}

export default action
