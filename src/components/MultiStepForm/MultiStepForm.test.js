import React from 'react'
import { mount } from 'enzyme'

import MultiStepForm from './MultiStepForm'

describe('MultiStepForm', () => {
  const getComponent = step => mount(
    <MultiStepForm
      steps={[
        {
 title: 'Step 0 Title', description: 'Step 0 Description', notes: 'Step 0 notes', ...step,
},
        {
 title: 'Step 1 Title: ${echo} and ${s0}', description: 'Step 1 Description: ${echo} and ${s0}', notes: 'Step 1 notes: ${echo} and ${s0}', ...step, // eslint-disable-line no-template-curly-in-string
},
      ]}
      hiddenFields={[]}
      path="/tools/trauma-relief/5ac43ef0d3b723075ebfd200"
      currentStepNum={0}
      answerByStep={{}}
      price={0}
      stepsStack={[]}
      onUpdateProgress={jest.fn()}
    />,
  )

  it('should render short answer', () => {
    const component = getComponent({ type: 'short' })
    expect(component).toMatchSnapshot()
    component.find('input').simulate('change', { target: { value: 'Answer step 0' } })
    component.find('button').simulate('click')
    expect(component).toMatchSnapshot() // TODO fix: this should render next step
    // press back
    // see if matches snapshot
    // press enter on input field
    // see if matches snapshot
  })
  it('should render long answer', () => {
    expect(getComponent({ type: 'long' })).toMatchSnapshot()
  })
  it('should render radio answers', () => {
    expect(getComponent({
      type: 'radio',
      answers: [
        { text: 'answer 1' },
      ],
    })).toMatchSnapshot()
  })
  it('should render flash answer', () => {
    expect(getComponent({
      type: 'flash',
      answers: [
        { text: 'answer 1' },
      ],
    })).toMatchSnapshot()
  })
  it('should render stars review', () => {
    expect(getComponent({
      type: 'stars-review',
    })).toMatchSnapshot()
  })
  it('should render payment', () => {
    expect(getComponent({
      type: 'payment',
    })).toMatchSnapshot()
  })
})

test('MultiStepForm with data', () => {
  const component = mount(
    <MultiStepForm
      steps={[
        { title: 'Title', type: 'short' },
        { title: 'Title', description: '${echo} and ${s0} and me', type: 'short' }, // eslint-disable-line no-template-curly-in-string
      ]}
      hiddenFields={[]}
      path="/tools/trauma-relief/5ac43ef0d3b723075ebfd200"
      currentStepNum={1}
      answerByStep={{
        0: 'My name is neo',
      }}
      price={0}
      stepsStack={[0]}
      onUpdateProgress={jest.fn()}
    />,
  )
  expect(component).toMatchSnapshot()
})
