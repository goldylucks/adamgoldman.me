import React from 'react'
import renderer from 'react-test-renderer'

import { initFbSdk } from '../../utils/fbUtils'
import Wrapper from '../../../test/TestWrapper'

describe('Layout', () => {
  test('renders children correctly', () => {
    const wrapper = renderer
      .create(
        <Wrapper>
          <div className="child" />
        </Wrapper>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
    expect(initFbSdk).toHaveBeenCalled()
  })
})
