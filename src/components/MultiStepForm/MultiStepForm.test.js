import React from 'react'
import renderer from 'react-test-renderer'

import Wrapper from '../../../test/TestWrapper'

import MultiStepForm from './MultiStepForm'

describe('MultiStepForm', () => {
  const getTree = step => renderer.create(
    <Wrapper>
      <MultiStepForm
        steps={[{
 title: 'Title', description: 'Description', notes: 'notes', ...step,
}]}
        hiddenFields={[]}
        path="/tools/trauma-relief/5ac43ef0d3b723075ebfd200"
        currentStep={0}
        answerByStep={{}}
        price={0}
        stepsStack={[]}
        onUpdateProgress={jest.fn()}
      />
    </Wrapper>,
  ).toJSON()

  it('should render short answer', () => {
    expect(getTree({ type: 'short' })).toMatchSnapshot()
  })
  it('should render long answer', () => {
    expect(getTree({ type: 'long' })).toMatchSnapshot()
  })
  it('should render radio answers', () => {
    expect(getTree({
      type: 'radio',
      answers: [
        { text: 'answer 1' },
      ],
    })).toMatchSnapshot()
  })
  it('should render flash answer', () => {
    expect(getTree({
      type: 'flash',
      answers: [
        { text: 'answer 1' },
      ],
    })).toMatchSnapshot()
  })
  it('should render stars review', () => {
    expect(getTree({
      type: 'stars-review',
    })).toMatchSnapshot()
  })
  it('should render payment', () => {
    expect(getTree({
      type: 'payment',
    })).toMatchSnapshot()
  })
})

test('MultiStepForm with data', () => {
  const component = renderer.create(
    <Wrapper>
      <MultiStepForm
        steps={[
          { title: 'Title', type: 'short' },
          { title: 'Title', description: '${echo} and ${s0} and me', type: 'short' }, // eslint-disable-line no-template-curly-in-string
        ]}
        hiddenFields={[]}
        path="/tools/trauma-relief/5ac43ef0d3b723075ebfd200"
        currentStep={1}
        answerByStep={{
          0: 'My name is neo',
        }}
        price={0}
        stepsStack={[0]}
        onUpdateProgress={jest.fn()}
      />
    </Wrapper>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  component.root.findByType(MultiStepForm).instance.back()
  expect(tree).toMatchSnapshot()
})
