export const freshAnswer = opts => ({
  isOther: false,
  text: '',
  hasGoToStep: false,
  goToStepByNum: '',
  isLink: false,
  link: '',
  isLinkNew: false,
  linkNew: '',
  isConcern: false,
  concern: '',
  ...opts,
})

export const freshStep = opts => ({
  title: '',
  description: '',
  type: 'radio',
  inputPlaceholder: '',
  answers: [freshAnswer()],
  ...opts,
})

export const updateVariableReferencesAfterAddStep = (str, sIdx) => str.replace(/\${(.*?)}/g, (...args) => {
  const key = args[1]
  if (key[0] === 's') {
    const stepNum = Number(key.slice(1))
    if (stepNum > sIdx) {
      return '${' + `s${stepNum + 1}` + '}' // eslint-disable-line no-useless-concat
    }
  }
  return '${' + key + '}' // eslint-disable-line prefer-template
})

export const updateVariableReferencesAfterRemoveStep = (str, sIdx) => str.replace(/\${(.*?)}/g, (...args) => {
  const key = args[1]
  if (key[0] === 's') {
    const stepNum = Number(key.slice(1))
    if (stepNum === sIdx) {
      throw new Error('cant remove step that has dependencies')
    }
    if (stepNum > sIdx) {
      return '${' + `s${stepNum - 1}` + '}' // eslint-disable-line no-useless-concat
    }
  }
  return '${' + key + '}' // eslint-disable-line prefer-template
})

export const updateLogicalJumpsAfterAddStep = (sIdx, nextSteps) => nextSteps.map((step) => {
  if (step.title) {
    step.title = updateVariableReferencesAfterAddStep(step.title, sIdx)
  }
  if (step.description) {
    step.description = updateVariableReferencesAfterAddStep(step.description, sIdx)
  }
  if (step.inputPlaceholder) {
    step.inputPlaceholder = updateVariableReferencesAfterAddStep(step.inputPlaceholder, sIdx)
  }
  step.answers = step.answers.map((a) => {
    if (a.hasGoToStep && (Number(a.goToStepByNum) > sIdx)) {
      a.goToStepByNum = String(Number(a.goToStepByNum) + 1)
    }
    if (a.text) {
      a.text = updateVariableReferencesAfterAddStep(a.text, sIdx)
    }
    return a
  })
  if (step.hasGoToStep && (Number(step.goToStepByNum) > sIdx)) {
    step.goToStepByNum = String(Number(step.goToStepByNum) + 1)
  }
  return step
})

export const updateLogicalJumpsAfterRemoveStep = (sIdx, nextSteps) => nextSteps.map((step) => {
  if (step.title) {
    step.title = updateVariableReferencesAfterRemoveStep(step.title, sIdx)
  }
  if (step.description) {
    step.description = updateVariableReferencesAfterRemoveStep(step.description, sIdx)
  }
  if (step.inputPlaceholder) {
    step.inputPlaceholder = updateVariableReferencesAfterRemoveStep(step.inputPlaceholder, sIdx)
  }
  step.answers = step.answers.map((a) => {
    if (a.hasGoToStep && (Number(a.goToStepByNum) > sIdx)) {
      a.goToStepByNum = String(Number(a.goToStepByNum) - 1)
    }
    if (a.hasGoToStep && (Number(a.goToStepByNum) === sIdx)) {
      throw new Error('cant remove step that has dependencies')
    }
    if (a.text) {
      a.text = updateVariableReferencesAfterRemoveStep(a.text, sIdx)
    }
    return a
  })
  if (step.hasGoToStep && (Number(step.goToStepByNum) > sIdx)) {
    step.goToStepByNum = String(Number(step.goToStepByNum) - 1)
  }
  if (step.hasGoToStep && (Number(step.goToStepByNum) === sIdx)) {
    throw new Error('cant remove step that has dependencies')
  }
  return step
})
