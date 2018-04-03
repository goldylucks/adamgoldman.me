import React from 'react'
import PropTypes from 'prop-types'

import App from '../src/components/App'
import Layout from '../src/components/Layout'

// eslint-disable-next-line react/prefer-stateless-function
export default class TestWrapper extends React.Component {
  render() {
    return (
      <App context={{ insertCss: () => {}, fetch: () => {} }}>
        <Layout path="/test">
          {this.props.children}
        </Layout>
      </App>
    )
  }
}

TestWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
}
