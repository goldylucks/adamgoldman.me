// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToTopOfNode } from '../../utils'
import Benefits from '../../components/Benefits'
import MultiStepForm from '../../components/MultiStepForm'
import Testimonials from '../../components/Testimonials'
import GetStarted from '../../components/GetStartedButton'
import MessageMe from '../../components/MessageMe'
import FbGateKeeper from '../../components/FbGateKeeper'

import FAQContainer from './FAQContainer'
import s from './SavoringYourChild.css'
import { testimonials } from './data'

type Props = {
  user: Object,
  toolResponse: Object,
  isFetchingToolResponse: boolean,
  fetchingToolResponseError: string,
  onLogin: Function,
  onUpdateProgress: Function,
  onUpdateUser: Function
}

class SavoringYourChild extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle text-center">How to honor your child&apos;s memory after the transition</h1>
            <p className="lead text-center">And savor the relationship in a healing way</p>
            <GetStarted style={{ marginTop: 80, marginBottom: 80 }} />
          </div>
          <hr className={s.hr} />
          <section>
            <h1 className="text-center">Parents share ...</h1>
            <Testimonials testimonials={testimonials} />
          </section>
          <GetStarted />
          <hr className={s.hr} />
          <section>
            <h1 className="text-center">Learn how to ...</h1>
            <div className="row justify-content-md-center">
              <div className="col col-lg-10">
                <Benefits benefits={[
                  'Enjoy thinking about your child again',
                  'Focus on the good experiences',
                  'Feel your child\'s presence even more',
                  'Enjoy looking forward to your future',
                  'Increase the peace & love in your life',
                ]}
                />
              </div>
            </div>
          </section>
          <hr className={s.hr} />
          <section>
            <FAQContainer />
          </section>
          <hr className={s.hr} />
          <GetStarted />
          <hr className={s.hr} />
          <MessageMe />
          <hr className={s.hr} />
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
    if (isFetchingToolResponse || !toolResponse) {
      return <p data-test="loading">Loading ...</p>
    }
    if (fetchingToolResponseError) {
      return <p data-test="error">There was an error loading. Please refresh the page and contact me if it continues</p>
    }
    return (
      <div className={s.introModule}>
        <div>
          <h1 className="text-center" ref={(ref) => { this.toolResponseNode = ref }}>Intro Questionnaire</h1>
        </div>
        <div>
          <MultiStepForm
            hideSubscribeButton
            {...toolResponse}
            scrollTop={() => scrollToTopOfNode(this.toolResponseNode)}
            onUpdateProgress={this.updateProgress}
          />
        </div>
      </div>
    )
  }

  updateProgress = (nextState) => {
    const { onUpdateProgress, toolResponse } = this.props
    const { answerByStep } = nextState
    if (nextState.currentStepNum === toolResponse.steps.length - 1) {
      const userPropertiesToUpdate = {
        name: answerByStep[6],
        savoringChildName: answerByStep[7],
        savoringChildGender: answerByStep[8].match(/son/i) ? 'male' : 'female',
        gender: answerByStep[8].match(/father/i) ? 'male' : 'female',
      }
      onUpdateProgress(nextState, userPropertiesToUpdate)
    } else {
      onUpdateProgress(nextState)
    }
  }

  toolResponseNode = null
}

export default withStyles(s)(SavoringYourChild)
