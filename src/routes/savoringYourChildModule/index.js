import React from 'react'

import SavoringYourChildModule from './savoringYourChildModule'

import Layout from '../../components/Layout'
import SavoringToolResponseContainer from '../../components/SavoringToolResponseContainer'

async function action({ params, path }) {
  const module = await import(`./${params.module}.js`)
    .then(_module => _module.default) // use an object from `export default`
    .catch(error => {
      if (error.message.startsWith('Cannot find module')) {
        return null // module (module) does not exists
      }
      throw error // loading chunk failed (render error page)
    })
  if (!module) return null // go to next route (or render 404)

  return {
    title: module.title,
    description: module.description,
    path,
    component: (
      <Layout path={path}>
        <SavoringToolResponseContainer toolSlug={`savoring-${params.module}`}>
          <SavoringYourChildModule path={path} {...module} />
        </SavoringToolResponseContainer>
      </Layout>
    ),
  }
}

export default action
