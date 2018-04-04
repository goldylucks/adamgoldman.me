import _ from 'lodash'

import { scrollToElem } from '../../utils'

export const stateForGoToStep = (stepToGoTo, { shouldResetPreviousAnswers } = {}) => ({
  currentStepNum, stepsStack, answerByStep,
}) => ({
  currentStepNum: stepToGoTo,
  flashedIdx: 0,
  stepsStack: shouldResetPreviousAnswers
    ? stepsStack.filter(stepN => stepN < stepToGoTo) : stepsStack.concat(currentStepNum),
  answerByStep: shouldResetPreviousAnswers
    ? _.pickBy(answerByStep, (answer, stepN) => stepN < stepToGoTo) : answerByStep,
})

export const scrollTop = () => {
  scrollToElem(document.querySelector('html'), 0, 300)
}

export const stateForBack = ({ stepsStack }) => ({
  currentStepNum: stepsStack.pop(),
  stepsStack,
  flashedIdx: 0,
})

export const stateForStepInputChange = newInput => ({
  answerByStep, currentStepNum,
}) => ({
  answerByStep: { ...answerByStep, [currentStepNum]: newInput },
})

export const initialAnswerByStepState = ({ answerByStep, currentStepNum, stepsCount }) => {
  for (let i = currentStepNum; i <= stepsCount; i += 1) {
    answerByStep[i] = ''
  }
  return answerByStep
}

export const replaceVarsUtil = ({
  str, hiddenFields, answerByStep, currentStepNum,
}) => {
  if (!str) {
    return ''
  }
  return str.replace(/\${(.*?)}/g, (...args) => {
    const key = args[1]
    if (key === 'echo') {
      return `***“${answerByStep[currentStepNum - 1]}”***`
    }
    if (key.indexOf('he') === 0) {
      return answerByStep[key.slice(2)].match(/female/i) ? 'she' : 'he'
    }
    if (key.indexOf('his') === 0) {
      return answerByStep[key.slice(3)].match(/female/i) ? 'her' : 'his'
    }
    if (key.indexOf('him') === 0) {
      return answerByStep[key.slice(3)].match(/female/i) ? 'her' : 'him'
    }
    if (key[0] === 's') {
      return answerByStep[key.slice(1)]
    }
    if (key[0] === 'h') {
      return hiddenFields[key.slice(1)]
    }
    return args[1]
  })
}

export const stateForReviewRating = (rating, steps) => ({ answerByStep, currentStepNum }) => ({
  answerByStep: { ...answerByStep, [currentStepNum]: rating },
  currentStepNum: stepNumById(rating <= 3 ? 'finalComments' : 'choosePaymentAmount', steps),
})

export const stepNumById = (id, steps) => steps.findIndex(s => s.id === id)
