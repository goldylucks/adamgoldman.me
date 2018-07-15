// @flow

import React from 'react'
import axios from 'axios'

import { nn } from '../../utils'

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
      onAnswerLinkPress: this.answerLinkPress,
      onAnswerNewLinkPress: this.answerNewLinkPress,
      onComplete: this.complete,
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

  updateProgress = (nextMultiFormState, prevMultiFormState) => {
    const { toolResponse } = this.state
    const nextStepN = Number(nextMultiFormState.currentStepNum)
    const nextStep = toolResponse.steps[nextStepN]
    // HACK, need to pass beter info on step change from MultiStepForm
    // if last step answered is star rating:
    if (this.progressIsStarRating(nextMultiFormState, prevMultiFormState)) {
      const stars = nextMultiFormState.answerByStep[nextStepN - 1]
      fireGaEventOnStepChange(toolResponse.title, nextStepN, nextStep.gaEventAction, true, stars)
    } else {
      fireGaEventOnStepChange(toolResponse.title, nextStepN, nextStep.gaEventAction)
    }
    axios.put(`/api/toolResponses/${toolResponse._id}`, { ...toolResponse, ...nextMultiFormState })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }
  progressIsStarRating(nextMultiFormState, prevMultiFormState) {
    const { toolResponse } = this.state
    const previousStepN = Number(nextMultiFormState.currentStepNum) - 1
    const previousStep = toolResponse.steps[previousStepN]
    const isGoingForward = Number(nextMultiFormState.currentStepNum) === Number(prevMultiFormState.currentStepNum + 1)
    const lastStepIsStarr = previousStep.type === 'stars-review'
    return lastStepIsStarr && isGoingForward
  }
  // userPropertiesToUpdate currently only for passing user info on completing intro questionnaire
  complete = (userPropertiesToUpdate) => {
    console.log('DELETE ME: complete!')
    const { toolResponse } = this.state
    fireGaEventToolCompleted(toolResponse.title)
    axios.put(`/api/toolResponses/${toolResponse._id}`, { ...toolResponse, status: 'Completed' })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
    this.updateUserOnCompletion(userPropertiesToUpdate)
    this.updateUserInDb(userPropertiesToUpdate)
  }
  answerLinkPress = (link) => {
    console.log(link)
  }
  answerNewLinkPress = (link) => {
    console.log(link, 'DELETE ME')
    fireGaEventOnOutboundLink(link)
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

  updateUserOnCompletion(userPropertiesToUpdate) {
    const { onUpdateUser, user } = this.props
    onUpdateUser({
      ...user,
      ...userPropertiesToUpdate,
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

function fireGaEventOnStepChange(toolTitle, nextStepN, nextStepGaEventAction, hasValue, value) {
  const options = {
    hitType: 'event',
    eventCategory: 'Savoring Tool',
    eventAction: getEventActionForStepChange(nextStepN, nextStepGaEventAction),
    eventLabel: toolTitle,
  }
  // filling stars or making payment have value. the step object has "hasValue" property
  // for stars, the step answer is the value
  if (hasValue) {
    options.eventValue = Number(value)
  }
  console.log('fireGaEventOnStepChange', options)
  window.ga('send', options)
}

function fireGaEventOnOutboundLink(toolTitle, stepNumber, gaEventAction, link) {
  const options = {
    hitType: 'event',
    eventCategory: 'Savoring Tool',
    eventAction: getEventActionForOutboundLink(stepNumber, gaEventAction, link),
    eventLabel: toolTitle,
  }
  window.ga('send', options)
}

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

function getEventActionForStepChange(nextStepN, nextStepGaEventAction) {
  const _nn = nn(nextStepN)
  if (!nextStepGaEventAction) {
    // 0 is prefix for "go to step" actions
    return `0${_nn} Go to step ${_nn}`
  }
  // 1 is prefix for "ending" actions (review, stars, payment)
  // coming from savoringReviewSteps.js
  return nextStepGaEventAction
}

function getEventActionForOutboundLink(stepNumber, gaEventAction, link) {
  const _nn = nn(stepNumber)
  if (!gaEventAction) {
    // 0 is prefix for "go to step" actions
    return `0${_nn} step - outbound link - ${link}`
  }
  // 1 is prefix for "ending" actions (review, stars, payment)
  // coming from savoringReviewSteps.js
  return `${gaEventAction} oubtound link - ${link}`
}
