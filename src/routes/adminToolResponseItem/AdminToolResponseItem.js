import React from 'react'
import { Fetch } from 'react-data-fetching'
import PropTypes from 'prop-types'

import Link from '../../components/Link'

class AdminToolResponseItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <Link to="/adminToolResponses">Tools history list</Link>
            <h1 className="sitetitle">Tool History</h1>
          </div>
          <Fetch url={`/api/toolResponses/${this.props.id}`}>
            {({ data }) => (
              <div>
                <h2>{data.title}</h2>
                <p>Created at: {`${new Date(data.createdAt)}`}</p>
                {/* TODO remove checking for user  after https://github.com/goldylucks/adamgoldman.me/issues/99 */}
                <p>User: {data.user && data.user.name}</p>
                <p>Current Step: {data.currentStepNum}</p>
                <p>Status: {data.status}</p>
                {this.renderStepsWithAnswers(data)}
              </div>
            )}
          </Fetch>
          <hr />
        </div>
      </div>
    )
  }
  // eslint-disable-next-line class-methods-use-this
  renderStepsWithAnswers({ steps, answerByStep }) {
    return steps.map((step, idx) => (
      <div>
        <h6>{step.title}</h6>
        <p>{step.description}</p>
        <hr style={{ marginLeft: 0, width: 100 }} />
        <p>{answerByStep[idx]}</p>
        <hr />
      </div>
    ))
  }
}

export default AdminToolResponseItem
