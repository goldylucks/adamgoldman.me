// @flow

import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToTopOfNode } from '../../utils'
import MultiStepForm from '../../components/MultiStepForm'
import FbGateKeeper from '../../components/FbGateKeeper'

import './savoringYourChildIntroQuestionnaire.css'

type Props = {
  user: Object,
  toolResponse: Object,
  isFetchingToolResponse: boolean,
  fetchingToolResponseError: string,
  onLogin: Function,
  onUpdateProgress: Function,
  onAnswerLinkPress: Function,
  onAnswerNewLinkPress: Function,
  onUpdateUser: Function,
  onConcern: Function,
  onComplete: Function,
  onUpdateUserInDb: Function
}

class savoringYourChildIntroQuestionnaire extends Component<Props> {
  render() {
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle text-center">Intro Questionnaire</h1>
          </div>
          <div style={{ position: 'relative' }}>
            {this.renderToolResponse()}
          </div>
        </div>
      </div>
    )
  }

  renderToolResponse() {
    const {
      toolResponse, isFetchingToolResponse, fetchingToolResponseError, user, onLogin,
    } = this.props
    if (!user._id) {
      return (
        <div className={s.introModule} data-test="noUser">
          <h1>Intro</h1>
          <p>Let me tell you a little bit about how I work with parents, so you can get a gentle idea about the short time we are about to spend together, ok?</p>
          <FbGateKeeper onLogin={onLogin} user={user} />
        </div>
      )
    }
    if (fetchingToolResponseError) {
      return <p data-test="error">There was an error loading. Please refresh the page and contact me if it continues</p>
    }
    if (isFetchingToolResponse || !toolResponse) {
      return <p data-test="loading">Loading ...</p>
    }
    return (
      <div className={s.introModule}>
        <div>
          <h1 className="text-center" ref={(ref) => { this.toolResponseNode = ref }}>Intro Questionnaire</h1>
        </div>
        <div>
          <MultiStepForm
            onAnswerLinkPress={this.answerLinkPress}
            onAnswerNewLinkPress={this.props.onAnswerNewLinkPress}
            {...toolResponse}
            scrollTop={() => scrollToTopOfNode(this.toolResponseNode)}
            onUpdateProgress={this.props.onUpdateProgress}
            onConcern={this.props.onConcern}
          />
        </div>
      </div>
    )
  }
  answerLinkPress = (link, isLastStep, multiFormState) => {
    if (isLastStep) {
      this.completed(link, multiFormState)
    } else {
      this.props.onAnswerLinkPress(link)
    }
  }

  completed(link, multiFormState) {
    const { answerByStep } = multiFormState
    const userPropertiesToUpdate = {
      name: answerByStep[5],
      savoringChildName: answerByStep[6],
      savoringChildGender: answerByStep[7].match(/son/i) ? 'male' : 'female',
      gender: answerByStep[7].match(/father/i) ? 'male' : 'female',
    }
    this.props.onComplete(userPropertiesToUpdate)
  }

  toolResponseNode = null
}

export default withStyles(s)(savoringYourChildIntroQuestionnaire)
