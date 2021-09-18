// // uncomment to test, issue reported
// // https://github.com/kriasoft/react-starter-kit/issues/1618

test('dummy', () => {
  expect(true).toBe(true)
})

// import React from 'react'
// import { mount } from 'enzyme'

// import Wrapper from '../../../test/TestWrapper'

// import SavoringYourChildModule from './savoringYourChildModule'

// test('Testimonials rendered when present', () => {
//   // setup
//   const wrapper = mountWrapper({ testimonials: [{ title: '' }] })
//   const testimonial = wrapper.find('Testimonials')
//   // assertions
//   expect(testimonial).toHaveLength(1)
// })
// test('Testimonials NOT rendered when empty', () => {
//   // setup
//   const wrapper = mountWrapper({ testimonials: [] })
//   const testimonial = wrapper.find('Testimonials')
//   // assertions
//   expect(testimonial).toHaveLength(0)
// })

// test('benefits rendered when present', () => {
//   // setup
//   const wrapper = mountWrapper({ benefits: ['benefit'] })
//   const benefit = wrapper.find('Benefits')
//   // assertions
//   expect(benefit).toHaveLength(1)
// })
// test('benefits NOT rendered when empty', () => {
//   // setup
//   const wrapper = mountWrapper({ benefits: [] })
//   const benefit = wrapper.find('Benefits')
//   // assertions
//   expect(benefit).toHaveLength(0)
// })

// test('when user not logged in, display noUser, no loading, error or MultiForm', () => {
//   // setup
//   const wrapper = mountWrapper()
//   const noUser = wrapper.sel('noUser')
//   const loading = wrapper.sel('loading')
//   const error = wrapper.sel('error')
//   const MultiForm = wrapper.find('MultiForm')
//   // assertions
//   expect(noUser).toHaveLength(1)
//   expect(loading).toHaveLength(0)
//   expect(error).toHaveLength(0)
//   expect(MultiForm).toHaveLength(0)
// })

// // cant test rendering if user exists, since user is cloned from App component

// function mountWrapper(props) {
//   const propsToUse = {
//     title: 'test module title',
//     description: 'test module description',
//     slug: 'test-module',
//     path: '',
//     faq: [],
//     testimonials: [],
//     benefits: [],
//     user: {},
//     toolResponse: null,
//     isFetchingToolResponse: false,
//     fetchingToolResponseError: null,
//     onLogin: jest.fn(),
//     onUpdateProgress: jest.fn(),
//     onUpdateUser: jest.fn(),
//     ...props,
//   }
//   return mount(<Wrapper><SavoringYourChildModule {...propsToUse} /></Wrapper>)
// }
