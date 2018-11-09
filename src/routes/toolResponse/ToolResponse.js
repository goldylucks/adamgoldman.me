// @flow

import React from 'react'
import axios from 'axios'

import MultiStepForm from '../../components/MultiStepForm'

type Props = {
  user: object,
  path: string,
  responseId: string,
}
class ToolResponse extends React.Component<Props> {
  state = {
    toolResponse: null,
    isFetchingToolResponse: true,
  }

  componentDidMount() {
    this.fetchToolResponse()
  }

  render() {
    const { path } = this.props
    const { toolResponse, isFetchingToolResponse } = this.state
    if (isFetchingToolResponse) {
      return <h1>Loading ...</h1>
    }
    if (!toolResponse) {
      return <h1>Process not found, please contact me, sorry!</h1>
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-xs-12" />
          <div className="col-md-8 col-xs-12">
            <div className="mainheading">
              <h1 className="posttitle">{toolResponse.title}</h1>
            </div>
            <div className="article-post">
              <MultiStepForm
                {...toolResponse}
                path={path}
                onUpdateProgress={this.updateProgress}
                onConcern={this.onConcern}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  fetchToolResponse() {
    const { responseId } = this.props
    axios.get(`/api/toolResponses/${responseId}`)
      .then(({ data }) => this.setState({ toolResponse: data, isFetchingToolResponse: false }))
      .catch((err) => {
        global.console.log(err)
        this.setState({ isFetchingToolResponse: false })
      })
  }

  updateProgress = (nextState) => {
    console.log(nextState)
    // fireGaEventOnStepChange(this.state.toolResponse.title, Number(nextState.currentStepNum))
    if (nextState.currentStepNum === this.state.toolResponse.steps.length - 1) {
      nextState.status = 'Completed'
      // fireGaEventToolCompleted(this.state.toolResponse.title)
    }
    axios.put(`/api/toolResponses/${this.props.responseId}`, { ...this.state.toolResponse, ...nextState })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  onConcern = () => {
    // fireGaEventOnConcern(this.state.toolResponse.title, currentStepNum)
  }
}

export default ToolResponse

// function fireGaEventOnStepChange(toolTitle, stepNumber) {
//   window.ga('send', {
//     hitType: 'event',
//     eventCategory: 'Mind Tool',
//     eventAction: 'Go To Step',
//     eventLabel: toolTitle,
//     eventValue: stepNumber,
//   })
// }

// function fireGaEventToolCompleted(toolTitle) {
//   window.ga('send', {
//     hitType: 'event',
//     eventCategory: 'Mind Tool',
//     eventAction: 'Completed',
//     eventLabel: toolTitle,
//   })
// }

// function fireGaEventOnConcern(toolTitle, stepNumber) {
//   window.ga('send', {
//     hitType: 'event',
//     eventCategory: 'Mind Tool',
//     eventAction: 'Concern on step:',
//     eventLabel: toolTitle,
//     eventValue: stepNumber,
//   })
// }
