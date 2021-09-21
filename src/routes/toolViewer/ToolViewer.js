import React from 'react'
import { useParams } from 'react-router'

import toolsData from '../../tools/tools-data'
import MultiStepForm from '../../components/MultiStepForm/MultiStepForm'

const ToolViewer = () => {
  const { tool } = useParams()
  const toolData = toolsData[tool]

  return (
    <div
      style={{
        maxWidth: 600,
        margin: '40px auto',
      }}
    >
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
    </div>
  )

  function onConcern() {
    alert('concern')
  }

  function onUpdateProgress(...args) {
    // eslint-disable-next-line no-console
    // console.log('[onUpdateProgress]', ...args)
  }
}

export default ToolViewer
