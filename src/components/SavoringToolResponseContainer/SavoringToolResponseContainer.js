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
    if (nextState.currentStepNum === this.state.toolResponse.steps.length - 1) {
      nextState.status = 'Completed'
      // for intro module to pass gender, name, childName, childGender
      this.updateUserOnCompletion(userPropertiesToUpdateOnCompletion)
    }
    axios.put(`/api/toolResponses/${this.state.toolResponse._id}`, { ...this.state.toolResponse, ...nextState })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
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

  onLogin = (user) => {
    this.props.onLogin(user, this.fetchToolResponse)
  }
}
