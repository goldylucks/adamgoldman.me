import _ from 'lodash'

import { scrollToElem } from '../../utils'

export const stateForGoToStep =
  (stepToGoTo, { shouldResetPreviousAnswers } = {}) =>
  ({ currentStepNum, stepsStack, answerByStep }) => ({
    currentStepNum: stepToGoTo,
    flashedIdx: 0,
    stepsStack: shouldResetPreviousAnswers
      ? stepsStack.filter(stepN => stepN < stepToGoTo)
      : stepsStack.concat(currentStepNum),
    answerByStep: shouldResetPreviousAnswers
      ? _.pickBy(answerByStep, (answer, stepN) => stepN < stepToGoTo)
      : answerByStep,
  })

export const scrollTop = () => {
  scrollToElem(document.querySelector('html'), 0, 300)
}

export const stateForBack = ({ stepsStack }) => ({
  currentStepNum: stepsStack.pop(),
  stepsStack,
  flashedIdx: 0,
})

export const stateForStepInputChange =
  newInput =>
  ({ answerByStep, currentStepNum }) => ({
    answerByStep: { ...answerByStep, [currentStepNum]: newInput },
  })

export const initialAnswerByStepState = ({
  answerByStep,
  currentStepNum,
  stepsCount,
}) => {
  for (let i = currentStepNum; i <= stepsCount; i += 1) {
    answerByStep[i] = ''
  }
  return answerByStep
}

export const replaceVarsUtil = ({
  str,
  hiddenFields,
  answerByStep,
  currentStepNum,
  steps,
}) => {
  if (!str) {
    return ''
  }
  str = String(str)
  try {
    return str.replace(/\${(.*?)}/g, (...args) => {
      const key = args[1]
      if (isPronoun(key)) return pronounFor({ key, steps, answerByStep })
      if (key === 'echo') {
        return `***“${answerByStep[currentStepNum - 1]}”***`
      }
      if (key[0] === 's') {
        return answerByStep[key.slice(1)]
      }
      if (key[0] === 'h') {
        return hiddenFields[key.slice(1)]
      }
      return args[1]
    })
  } catch (err) {
    global.console.info('error for string:', str)
    global.console.info(err)
    return str
  }
}

export const stateForReviewRating =
  rating =>
  ({ answerByStep, currentStepNum }) => ({
    rating,
    answerByStep: { ...answerByStep, [currentStepNum]: String(rating) },
    currentStepNum: currentStepNum + 1,
  })

export const stepNumById = (id, steps) => steps.findIndex(s => s.id === id)

const isPronoun = key => !!key.match(/he|him|his/)

const pronounFor = ({ key, steps, answerByStep }) => {
  const pronounStep = steps.find(s => s.isPronouns)
  const pronounStepIdx = steps.indexOf(pronounStep)
  const pronounAnswer = answerByStep[pronounStepIdx]
  if (key === 'he') {
    return pronounAnswer.split(' / ')[0].toLowerCase()
  }
  if (key.indexOf('him') === 0) {
    return pronounAnswer.split(' / ')[1].toLowerCase()
  }
  if (key === 'his') {
    return pronounAnswer.split(' / ')[2].toLowerCase()
  }
}
