import React from 'react'

import Layout from '../../components/Layout'

import SavoringYourChildSectionInfo from './savoringYourChildSectionInfo'
import SavoringYourChildSectionForm from './savoringYourChildSectionForm'


async function action({ params }) {
  const path = `/savoring-your-child/modules/${params.section}`
  const section = await import(`./modules/${params.section}.js`)
    .then(module => module.default) // use an object from `export default`
    .catch((error) => {
      if (error.message.startsWith('Cannot find module')) {
        return null // module (section) does not exists
      }
      throw error // loading chunk failed (render error page)
    })
  if (!section) return null // go to next route (or render 404)
  const Comp = params.section.includes('donate')
    ? SavoringYourChildSectionInfo
    : SavoringYourChildSectionForm
  return {
    title: section.title,
    description: section.description,
    path,
    component: (
      <Layout path={path}>
        <Comp path={path} {...section} />
      </Layout>
    ),
  }
}

export default action
