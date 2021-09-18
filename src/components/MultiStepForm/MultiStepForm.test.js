import React from 'react'
import { mount } from 'enzyme'

import MultiStepForm from './MultiStepForm'

describe('MultiStepForm', () => {
  it('should render short answer', () => {
    const wrapper = mountWrapperWithTwoSteps({ type: 'short' })
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').changeInputValue('Answer step 0')
    wrapper.find('form').simulate('submit')
    expect(wrapper).toMatchSnapshot('submitting answer')
    // press back
    // see if matches snapshot
    // press enter on input field
    // see if matches snapshot
  })
  it('should render long answer', () => {
    expect(mountWrapperWithTwoSteps({ type: 'long' })).toMatchSnapshot()
  })
  it('should render radio answers', () => {
    expect(
      mountWrapperWithTwoSteps({
        type: 'radio',
        answers: [{ text: 'answer 1' }],
      }),
    ).toMatchSnapshot()
  })
  it('should render flash answer', () => {
    expect(
      mountWrapperWithTwoSteps({
        type: 'flash',
        answers: [{ text: 'answer 1' }],
      }),
    ).toMatchSnapshot()
  })
  it('should render stars review', () => {
    expect(
      mountWrapperWithTwoSteps({
        type: 'stars-review',
      }),
    ).toMatchSnapshot()
  })
  it('should render payment', () => {
    expect(
      mountWrapperWithTwoSteps({
        type: 'payment',
      }),
    ).toMatchSnapshot()
  })
})

test('MultiStepForm with data', () => {
  const wrapper = mountWrapper({
    steps: [
      { title: 'Title', type: 'short' },
      {
        title: 'Title',
        description: '${echo} and ${s0} and me',
        type: 'short',
      }, // eslint-disable-line no-template-curly-in-string
    ],
    currentStepNum: 1,
    answerByStep: {
      0: 'My name is neo',
    },
    stepsStack: [0],
  })
  expect(wrapper).toMatchSnapshot()
})

test('resets other answer after submit', () => {
  const wrapper = mountWrapper({
    steps: [
      {
        title: 'Title step 1',
        type: 'radio',
        answers: [generateOtherAnswer()],
      },
      {
        title: 'Title step 2',
        type: 'radio',
        answers: [generateOtherAnswer()],
      },
    ],
  })
  const other1 = wrapper.sel('other')
  other1.changeInputValue('foo')
  wrapper.find('form').simulate('submit')
  const other2 = wrapper.sel('other')
  expect(other2.props().value).toBe('')
})

test('stack is synced', () => {
  const wrapper = mountWrapper({
    steps: [
      { title: '0', type: 'radio', answers: [{ text: '0' }] },
      { title: '1', type: 'radio', answers: [{ text: '1' }] },
      { title: '2', type: 'radio', answers: [{ text: '2' }] },
    ],
  })
  expect(wrapper.props().stepsStack).toEqual([])
  wrapper.find('[data-test="answer-0"] a').props().onClick()
  expect(wrapper.state().stepsStack).toEqual([0])
  expect(wrapper.props().onUpdateProgress).toHaveBeenCalledTimes(1)
  expect(wrapper.props().onUpdateProgress).toHaveBeenCalledWith(
    expect.objectContaining({
      currentStepNum: 1,
      stepsStack: [0],
    }),
    expect.any(Object),
  )
  wrapper.find('[data-test="answer-0"] a').props().onClick()
  expect(wrapper.props().onUpdateProgress).toHaveBeenCalledTimes(2)
  expect(wrapper.props().onUpdateProgress).toHaveBeenLastCalledWith(
    expect.objectContaining({
      currentStepNum: 2,
      stepsStack: [0, 1],
    }),
    expect.any(Object),
  )
  // BUG doens't render back button in test
  // wrapper.find('button').props().onClick()
  // expect(wrapper.props().onUpdateProgress).toHaveBeenCalledTimes(3)
  // expect(wrapper.props().onUpdateProgress).toHaveBeenLastCalledWith(expect.objectContaining({
  //   currentStepNum: 1,
  //   stepsStack: [0],
  // }))
})

function mountWrapper(props) {
  const propsToUse = Object.assign(
    {
      steps: [],
      hiddenFields: [],
      path: '/tools/trauma-relief/5ac43ef0d3b723075ebfd200',
      currentStepNum: 0,
      answerByStep: {},
      price: 0,
      stepsStack: [],
      onUpdateProgress: jest.fn(),
      onConcern: jest.fn(),
    },
    props,
  )
  return mount(<MultiStepForm {...propsToUse} />)
}

function mountWrapperWithTwoSteps(step) {
  return mountWrapper({
    steps: [
      {
        title: 'Step 0 Title',
        description: 'Step 0 Description',
        notes: 'Step 0 notes',
        ...step,
      },
      {
        title: 'Step 1 Title: ${echo} and ${s0}',
        description: 'Step 1 Description: ${echo} and ${s0}',
        notes: 'Step 1 notes: ${echo} and ${s0}',
        ...step, // eslint-disable-line no-template-curly-in-string
      },
    ],
  })
}

function generateOtherAnswer() {
  return { isOther: true }
}
