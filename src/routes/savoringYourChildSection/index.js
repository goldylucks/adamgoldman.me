import React from 'react'

import SavoringYourChildSectionSection from './savoringYourChildSectionSection'

import Layout from '../../components/Layout'

async function action({ path }) {
  const sectionName = path.split('/')[2]
  const section = await import(`./${sectionName}.js`)
    .then(module => module.default) // use an object from `export default`
    .catch(error => {
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
    component: (
      <Layout path={path}>
        <SavoringYourChildSectionSection path={path} {...section} />
      </Layout>
    ),
  }
}

export default action
