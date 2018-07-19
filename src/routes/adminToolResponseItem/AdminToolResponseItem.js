// @flow

import React from 'react'
import axios from 'axios'

import Link from '../../components/Link'
import Markdown from '../../components/Markdown'
import { replaceVarsUtil } from '../../components/MultiStepForm/multiStepFormUtils'

type Props = {
  id: string,
}

class AdminToolResponseItem extends React.Component<Props> {
  state = {
    toolResponse: null,
    isFetchingToolResponse: true,
  }

  componentDidMount() {
    this.fetchToolResponses()
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <Link to="/adminToolResponses">Tools history list</Link>
            <h1 className="sitetitle">Tool History</h1>
          </div>
          {this.renderResponseItem()}
          <hr />
        </div>
      </div>
    )
  }
  renderResponseItem() {
    const { isFetchingToolResponse, toolResponse } = this.state
    if (isFetchingToolResponse) {
      return <div>Loading Responses</div>
    }
    if (!toolResponse) {
      return <div>No response found</div>
    }
    return (
      <div>
        <h2>{toolResponse.title}</h2>
        <p>Created at: {`${new Date(toolResponse.createdAt)}`}</p>
        {/* TODO remove checking for user  after https://github.com/goldylucks/adamgoldman.me/issues/99 */}
        <p>User: {toolResponse.user && toolResponse.user.name}</p>
        <p>Current Step: {toolResponse.currentStepNum}</p>
        <p>Status: {toolResponse.status}</p>
        {this.renderStepsWithAnswers(toolResponse)}
      </div>
    )
  }

  // eslint-disable-next-line class-methods-use-this
  renderStepsWithAnswers({
    steps, answerByStep, currentStepNum, hiddenFields,
  }) {
    return steps.slice(0, currentStepNum).map((step, sIdx) => (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style={{ width: '60%' }}>
            <Markdown source={'## ' + replaceVarsUtil({ // eslint-disable-line prefer-template
    str: step.title, hiddenFields, answerByStep, currentStepNum: sIdx,
    })}
            />
            <Markdown
              dontEmbedd
              source={replaceVarsUtil({
    str: step.description, hiddenFields, answerByStep, currentStepNum: sIdx,
    })}
            />
            <Markdown
              dontEmbedd
              className="text-muted tool-note"
              source={replaceVarsUtil({
    str: step.notes, hiddenFields, answerByStep, currentStepNum: sIdx,
    })}
            />
          </div>
          <div style={{ width: '30%' }}>
            <Markdown source={replaceVarsUtil({
      str: answerByStep[sIdx], hiddenFields, answerByStep, currentStepNum: sIdx,
      })}
            />
          </div>
        </div>
        <hr />
      </div>
    ))
  }

  fetchToolResponses() {
    axios.get(`/api/toolResponses/${this.props.id}`)
      .then(({ data }) => this.setState({ toolResponse: data, isFetchingToolResponse: false }))
      .catch((err) => {
        global.console.log(err)
        this.setState({ isFetchingToolResponse: false })
      })
  }
}

export default AdminToolResponseItem
