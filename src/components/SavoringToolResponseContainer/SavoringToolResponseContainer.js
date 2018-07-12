// @flow

import React from 'react'
import axios from 'axios'

type Props = {
  toolSlug: string,
  children: React.Node,
  user: Object,
  onLogin: Function,
  onUpdateUser: Function,
}

export default class SavoringToolResponseContainer extends React.Component<Props> {
  state = {
    isFetchingToolResponse: false,
    toolResponse: null,
    fetchingToolResponseError: null,
  }
  componentDidMount() {
    if (this.props.user._id) {
      this.fetchToolResponse()
    }
  }

  // handle routing to other module
  componentDidUpdate(prevProps) {
    if (this.props.user._id && (this.props.toolSlug !== prevProps.toolSlug)) {
      this.fetchToolResponse()
    }
  }

  render() {
    const {
      isFetchingToolResponse, toolResponse, fetchingToolResponseError,
    } = this.state
    const { children, toolSlug, ...remainingProps } = this.props
    return React.cloneElement(children, {
      ...remainingProps,
      isFetchingToolResponse,
      toolResponse,
      fetchingToolResponseError,
      onLogin: this.onLogin,
      onUpdateProgress: this.updateProgress,
      onConcern: this.onConcern,
      onUpdateUserInDb: this.updateUserInDb,
      // TODO catch link and linkNew answer events
    })
  }

  fetchToolResponse = () => {
    const { toolSlug } = this.props
    this.setState({ isFetchingToolResponse: true })
    axios.get(`/api/toolResponses/fetchByUserOrCreate/${toolSlug}`)
      .then(({ data: toolResponse }) => {
        this.setState({ toolResponse, isFetchingToolResponse: false })
        if (this.isNewToolResponse(toolResponse)) {
          this.addToolResponseToUser(toolResponse)
        }
      })
      .catch((err) => {
        global.console.error(err)
        this.setState({ fetchingToolResponseError: err.message, isFetchingToolResponse: false })
      })
  }

  updateProgress = (nextState, userPropertiesToUpdateOnCompletion = {}) => {
    const { toolResponse } = this.state
    // TODO:: get gaEventAction, hasValue, stepAnswer from the current step
    fireGaEventOnStepChange(toolResponse.title, Number(nextState.currentStepNum), gaEventAction, hasValue, stepAnswer)
    if (nextState.currentStepNum === toolResponse.steps.length - 1) {
      nextState.status = 'Completed'
      fireGaEventToolCompleted(toolResponse.title)
      // for intro module to pass gender, name, childName, childGender
      this.updateUserOnCompletion(userPropertiesToUpdateOnCompletion)
    }
    axios.put(`/api/toolResponses/${toolResponse._id}`, { ...toolResponse, ...nextState })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  onConcern = (currentStepNum) => {
    fireGaEventOnConcern(this.state.toolResponse.title, currentStepNum)
  }
  markToolResponseAsCompleted = (tr) => {
    if (tr._id === this.state.toolResponse._id) {
      tr.status = 'Completed'
    }
    return tr
  }

  isNewToolResponse(toolResponse) {
    const { user } = this.props
    return !user.toolResponses.find(tr => tr.toolId === toolResponse.toolId)
  }

  addToolResponseToUser(newToolResponse) {
    const { onUpdateUser, user } = this.props
    onUpdateUser({
      ...user,
      toolResponses: [...user.toolResponses, {
        createdAt: newToolResponse.createdAt,
        status: newToolResponse.status,
        toolId: newToolResponse.toolId,
        _id: newToolResponse._id,
      }],
    })
  }

  updateUserOnCompletion(userPropertiesToUpdateOnCompletion) {
    const { onUpdateUser, user } = this.props
    onUpdateUser({
      ...user,
      ...userPropertiesToUpdateOnCompletion,
      toolResponses: user.toolResponses.map(this.markToolResponseAsCompleted),
    })
  }

  updateUserInDb = (userPropertiesToUpdate) => {
    axios.put(`/api/users/${this.props.user._id}`, userPropertiesToUpdate)
      .catch((err) => {
        global.console.error(err)
        global.alert('there was an error processing your answers, please contact me')
      })
  }

  onLogin = (user) => {
    this.props.onLogin(user, this.fetchToolResponse)
  }
}

function fireGaEventOnStepChange(toolTitle, stepNumber, gaEventAction, hasValue, stepAnswer) {
  const options = {
    hitType: 'event',
    eventCategory: 'Savoring Tool',
    eventAction: getEventActionForStepChange(stepNumber, gaEventAction),
    eventLabel: toolTitle,
  }
  // filling stars or making payment have value. the step object has "hasValue" property
  // for stars, the step answer is the value
  if (hasValue) {
    options.eventValue = Number(stepAnswer)
  }
  window.ga('send', options)
}

// TODO at the moment this is fired when user sees the finish step.
// should fire this upon clicking the "finish" button
// pass the finish flag somehow from MultiStepForm, or,
// catch the "link" event from MultiStepForm, and identify where link goes
// or if it's an internal link and the process is finished (we are on last step)
// optional hack: listen to history route change
function fireGaEventToolCompleted(toolTitle) {
  window.ga('send', {
    hitType: 'event',
    eventCategory: 'Savoring Tool',
    eventAction: 'Completed',
    eventLabel: toolTitle,
  })
}

function fireGaEventOnConcern(toolTitle, stepNumber) {
  window.ga('send', {
    hitType: 'event',
    eventCategory: 'Savoring Tool',
    eventAction: `300 Concern on step - ${nn(stepNumber)}`,
    eventLabel: toolTitle,
    // eventValue: stepNumber,
  })
}

// TODO :: check
function nn(n) {
  return Number(n) < 10
    ? `0${n}`
    : String(n)
}

function getEventActionForStepChange(stepNumber, gaEventAction) {
  const _nn = nn(stepNumber)
  if (!gaEventAction) {
    // 0 is prefix for "go to step" actions
    return `0${_nn} Go to step ${_nn}`
  }
  // 1 is prefix for "ending" actions (review, stars, payment)
  // coming from savoringReviewSteps.js
  return gaEventAction
}

// todo add step names in savoring review steps

// todo capture link clicks from multistepform
// use it to determine if tool has ended
