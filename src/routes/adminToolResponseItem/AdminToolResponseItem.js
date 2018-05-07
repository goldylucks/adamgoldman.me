import React from 'react'
import { Fetch } from 'react-data-fetching'
import PropTypes from 'prop-types'

import Link from '../../components/Link'
import Markdown from '../../components/Markdown'
import { replaceVarsUtil } from '../../components/MultiStepForm/multiStepFormUtils'

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
  renderStepsWithAnswers({
    steps, answerByStep, currentStepNum, hiddenFields,
  }) {
    return steps.map((step, idx) => (
      <div>
        <Markdown source={'## ' + replaceVarsUtil({ // eslint-disable-line prefer-template
 str: step.title, hiddenFields, answerByStep, currentStepNum,
})}
        />
        <Markdown source={replaceVarsUtil({
str: step.description, hiddenFields, answerByStep, currentStepNum,
})}
        />
        <Markdown
          className="text-muted tool-note"
          source={replaceVarsUtil({
 str: step.notes, hiddenFields, answerByStep, currentStepNum,
})}
        />
        <Markdown source={replaceVarsUtil({
 str: answerByStep[idx], hiddenFields, answerByStep, currentStepNum,
})}
        />
        <hr />
      </div>
    ))
  }
}

export default AdminToolResponseItem
