import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import catAllergyData from '../../tools/cat-allergy.json'
import MultiStepForm from '../../components/MultiStepForm/MultiStepForm'

const toolsData = {
  'cat-allergy': catAllergyData,
}

const ToolViewer = () => {
  const { tool } = useParams()
  const toolData = toolsData[tool]

  return (
    <MultiStepForm
      steps={toolData.steps}
      hiddenFields={[]}
      currentStepNum={0}
      answerByStep={{}}
      price={0}
      stepsStack={[]}
      onUpdateProgress={onUpdateProgress}
      onConcern={onConcern}
    />
  )

  function onConcern() {
    alert('concern')
  }

  function onUpdateProgress(...args) {
    // eslint-disable-next-line no-console
    console.log('[onUpdateProgress]', ...args)
  }
}

export default ToolViewer
