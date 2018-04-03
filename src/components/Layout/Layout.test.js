import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'
import { initFbSdk } from '../../utils/fbUtils'

import Layout from './Layout'


jest.mock('../../utils/fbUtils')

describe('Layout', () => {
  test('renders children correctly', () => {
    const wrapper = renderer
      .create(
        <App context={{ insertCss: () => {}, fetch: () => {} }}>
          <Layout path="/test">
            <div className="child" />
          </Layout>
        </App>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
    expect(initFbSdk).toHaveBeenCalled()
  })
})
