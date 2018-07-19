import { replaceVarsUtil, stateForGoToStep, stateForBack, stateForStepInputChange, stateForReviewRating, initialAnswerByStepState } from './multiStepFormUtils'

describe('stateForGoToStep', () => {
  it('should skip ahead', () => {
    const stepToGoTo = 2
    const options = { shouldResetPreviousAnswers: false }
    const state = {
      answerByStep: {},
      stepsStack: [],
      currentStepNum: 0,
    }
    expect(stateForGoToStep(stepToGoTo, options)(state)).toEqual({
      stepsStack: [0],
      answerByStep: {},
      currentStepNum: stepToGoTo,
      flashedIdx: 0,
    })
  })
  it('should reset previous answers', () => {
    const stepToGoTo = 1
    const options = { shouldResetPreviousAnswers: true }
    const state = {
      answerByStep: {
        0: 'answer 0',
        1: 'answer 1',
        2: 'answer 2',
        4: 'answer 4',
      },
      stepsStack: [0, 1, 2, 4],
      currentStepNum: 5,
    }
    expect(stateForGoToStep(stepToGoTo, options)(state)).toEqual({
      stepsStack: [0],
      answerByStep: { 0: 'answer 0' },
      currentStepNum: stepToGoTo,
      flashedIdx: 0,
    })
  })
  it('should reset previous answers, and go to step that hasnt been visited before', () => {
    const stepToGoTo = 1
    const options = { shouldResetPreviousAnswers: true }
    const state = {
      answerByStep: {
        0: 'answer 0',
        2: 'answer 2',
        4: 'answer 4',
      },
      stepsStack: [0, 2, 4],
      currentStepNum: 5,
    }
    expect(stateForGoToStep(stepToGoTo, options)(state)).toEqual({
      stepsStack: [0],
      answerByStep: { 0: 'answer 0' },
      currentStepNum: stepToGoTo,
      flashedIdx: 0,
    })
  })
})

test('stateForBack', () => {
  const state = {
    stepsStack: [0, 1],
    currentStepNum: 2,
  }
  expect(stateForBack(state)).toEqual({
    stepsStack: [0],
    currentStepNum: 1,
    flashedIdx: 0,
  })
})

test('stateForStepInputChange', () => {
  const state = {
    answerByStep: {
      0: 'answer 0',
      1: '',
    },
    currentStepNum: 1,
  }
  const newInput = 'answer 1'
  expect(stateForStepInputChange(newInput)(state)).toEqual({
    answerByStep: {
      0: 'answer 0',
      1: newInput,
    },
  })
})

describe('initialAnswerByStepState', () => {
  it('should set all answers to empty strings', () => {
    const params = {
      answerByStep: {},
      currentStepNum: 0,
      stepsCount: 2,
    }
    expect(initialAnswerByStepState(params)).toEqual({
      0: '',
      1: '',
      2: '',
    })
  })
  it('should set only zero answer from params', () => {
    const params = {
      answerByStep: {
        0: 'answer 0',
      },
      currentStepNum: 0,
      stepsCount: 2,
    }
    expect(initialAnswerByStepState(params)).toEqual({
      0: params.answerByStep[0],
      1: '',
      2: '',
    })
  })
})

describe('replaceVarsUtil', () => {
  it('should return same string', () => {
    const params = {
      str: 'I am just a string',
    }
    expect(replaceVarsUtil(params)).toEqual(params.str)
  })
  it('should return string with replaced variable from hidden field', () => {
    const name = 'Neo'
    const params = {
      str: 'My name is ${hname}', // eslint-disable-line no-template-curly-in-string
      hiddenFields: { name },
    }
    expect(replaceVarsUtil(params)).toEqual(`My name is ${name}`)
  })
  it('should return string with replaced variable from last step', () => {
    const lastAnswer = 'answer 1'
    const params = {
      str: '${echo} is nice', // eslint-disable-line no-template-curly-in-string
      answerByStep: {
        0: 'answer 0',
        1: lastAnswer,
      },
      currentStepNum: 2,
    }
    expect(replaceVarsUtil(params)).toEqual(`***“${lastAnswer}”*** is nice`)
  })
  it('should return string with replaced variable from step 0', () => {
    const zeroAnswer = 'answer 0'
    const params = {
      str: '${s0} is nice', // eslint-disable-line no-template-curly-in-string
      answerByStep: {
        0: 'answer 0',
        1: 'answer 1',
      },
      currentStepNum: 2,
    }
    expect(replaceVarsUtil(params)).toEqual(`${zeroAnswer} is nice`)
  })
  it('should return string with replaced gender for male', () => {
    const params = {
      str: '${he0} is nice, ${his0} hand is long, and we like ${him0}', // eslint-disable-line no-template-curly-in-string
      answerByStep: {
        0: 'male',
      },
      currentStepNum: 2,
    }
    expect(replaceVarsUtil(params)).toEqual('he is nice, his hand is long, and we like him')
  })
  it('should return string with replaced gender for female', () => {
    const params = {
      str: '${he0} is nice, ${his0} hand is long, and we like ${him0}', // eslint-disable-line no-template-curly-in-string
      answerByStep: {
        0: 'female',
      },
      currentStepNum: 2,
    }
    expect(replaceVarsUtil(params)).toEqual('she is nice, her hand is long, and we like her')
  })
})

describe('stateForReviewRating', () => {
  it('should go to finalComments', () => {
    const rating = 3
    const steps = [{}, { id: 'choosePaymentAmount' }, { id: 'finalComments' }]
    const state = {
      currentStepNum: 0,
    }
    expect(stateForReviewRating(rating, steps)(state)).toEqual({
      answerByStep: {
        0: String(rating),
      },
      currentStepNum: 2,
      rating,
    })
  })
  it('should go to choosePaymentAmount', () => {
    const rating = 4
    const steps = [{}, { id: 'choosePaymentAmount' }, { id: 'finalComments' }]
    const state = {
      currentStepNum: 0,
    }
    expect(stateForReviewRating(rating, steps)(state)).toEqual({
      answerByStep: {
        0: String(rating),
      },
      currentStepNum: 1,
      rating,
    })
  })
})
