import React from 'react'
import renderer from 'react-test-renderer'

import Wrapper from '../../../test/TestWrapper'

import ToolEditor from './ToolEditor'

test('ToolEditor no data', () => {
  const component = renderer.create(
    <Wrapper>
      <ToolEditor url="test" data={{}} />
    </Wrapper>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ToolEditor with data', () => {
  const component = renderer.create(
    <Wrapper>
      <ToolEditor
        url="test"
        data={{
          title: 'Test title',
          description: 'Test description',
          isDraft: true,
          hasReview: true,
          isSavoring: true,
          isGrief: true,
          steps: [
            {
 title: 'Step 0',
description: 'Step 0 description',
notes: 'Step 0 notes',
type: 'radio',
answers: [
              { text: 'answer 1' },
            ],
},
          ],
          hiddenFields: [{ label: 'test hidden field' }],
        }}
      />
    </Wrapper>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
