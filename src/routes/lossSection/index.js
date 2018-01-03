import React from 'react'

import GriefSection from './GriefSection'

async function action({ params }) {
  const path = `/grief/${params.section}`
  const section = await import(`./${params.section}.js`)
    .then(module => module.default) // use an object from `export default`
    .catch((error) => {
      if (error.message.startsWith('Cannot find module')) {
        return null // module (section) does not exists
      }
      throw error // loading chunk failed (render error page)
    })
  if (!section) return null // go to next route (or render 404)
  return {
    title: section.title,
    description: section.description,
    path,
    component: <GriefSection path={path} {...section} />,
  }
}

export default action
