// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToTopOfNode, cloudImg } from '../../utils'
import LoomEmbedd from '../../components/LoomEmbedd'
import ExternalA from '../../components/ExternalA'
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
  onUpdateUser: Function,
  onConcern: Function,
  onUpdateUserInDb: Function
}

class SavoringYourChild extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle text-center">How to honor your child&apos;s memory after the transition</h1>
            <p className="lead text-center">And savor the relationship in a healing way</p>
            <LoomEmbedd src="f4c6f6f44e4f4a008bc4ba63fdd8ec27" />
            <GetStarted style={{ marginTop: 80, marginBottom: 80 }} />
          </div>
          <hr className={s.hr} />
          <section>
            <h1 className="text-center">Parents share ... <span className={s.asterixDisclaimer}>*</span></h1>
            <Testimonials testimonials={testimonials} />
            <small>* Results may vary (<ExternalA href="/legal-stuff" style={{ color: 'inherit' }}>full disclaimer</ExternalA>)</small>
          </section>
          <GetStarted />
          <hr className={s.hr} />
          {this.renderBenefitsSection()}
          <hr className={s.hr} />
          <section>
            <FAQContainer />
          </section>
          <hr className={s.hr} />
          <GetStarted />
          <hr className={s.hr} />
          {this.renderPartenrshipsSection()}
          <hr className={s.hr} />
          <GetStarted />
          <hr className={s.hr} />
          {this.renderAboutMeSection()}
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

  renderBenefitsSection() {
    return (
      <section>
        <h1 className="text-center">Learn how to ...<span className={s.asterixDisclaimer}>*</span></h1>
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
        <small>* Results may vary (<ExternalA href="/legal-stuff" style={{ color: 'inherit' }}>full disclaimer</ExternalA>)</small>
      </section>
    )
  }

  renderPartenrshipsSection() {
    return (
      <section>
        <h1 className="text-center" style={{ marginBottom: 30 }}>Partnerships and acknowledgements</h1>
        <h3 className="text-center">Helping Parents Heal</h3>
        <p className="lead">I work closely with helping parents heal, a non profit organization dedicated to support parents in a very accepting, loving, non judgemental way, regardless of personal belief.</p>
        <img
          src={cloudImg('adamgoldman.me/helping-parents-heal-cover-min')}
          alt="Helping Parents Heal"
          style={{ maxWidth: '100%' }}
        />
        <h3 className="text-center" style={{ marginTop: 50 }}>Connirae & Steve Andreas</h3>
        <p className="lead">Connirae and Steve and  have developed the base for many of the processes we will work together through, among countless other books, programs, and training material.</p>
        <div className={s.andreasContainerBoth}>
          <div className={s.andreasContainerIndividual}>
            <img
              src={cloudImg('adamgoldman.me/Connirae_Andreas')}
              alt="Connirae Andreas"
            />
            <ExternalA className={s.andreasCaption} href="https://andreasnlptrainings.com/connirae-andreas-bio/">Connirae Andreas, Ph.D., master trainer</ExternalA>
          </div>
          <div className={s.andreasContainerIndividual}>
            <img
              src={cloudImg('adamgoldman.me/Steve_Andreas')}
              alt="Steve Andreas"
            />
            <ExternalA className={s.andreasCaption} href="http://steveandreas.com/cv.html">Steve Andreas, M.A., master trainer</ExternalA>
          </div>
        </div>
        <blockquote style={{ marginTop: 20 }}>
            Adam Goldman is a brilliant new colleague whose depth and breadth of understanding of the principles of personal change is exceptional, combined with the hands-on skills to manifest this in the experience of clients.
          <br />
          <br />
            Perceptive, intelligent, creative, confident, one of the fastest and most thorough learners I’ve ever met, able and willing to question established wisdom and discuss differences of opinion openly when that’s appropriate.
          <br />
          <br />

He has created open-source online programs to guide parents through effective change processes on their own, a huge opportunity for so many who would otherwise not be able to even think of affording it.
          <br />
          <br />
His work is a detailed challenge to the rest of us to learn how to “up our game” or be left behind in the dustbin of history.
          <br />
- Steve Andreas, MA, master trainer and author.
        </blockquote>

      </section>
    )
  }
  renderAboutMeSection() {
    return (
      <section>
        <h1 className="text-center">About Me (Adam)</h1>
        <div className={s.aboutContainer}>
          <img
            src={cloudImg('adamgoldman.me/profile-smiling')}
            alt="About Adam Goldman"
          />
          <p className="lead">
            I&apos;ve been guiding people through personal change processes for over 8 years. My latest focus is helping you (and fellow parents) savor the relationship with your child, to align your brain, mind and body, towards a compelling brightening future, and let the light of your child shine through you as you carry it wherever you go.
          </p>
        </div>
      </section>
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
            hideSubscribeButton
            {...toolResponse}
            scrollTop={() => scrollToTopOfNode(this.toolResponseNode)}
            onUpdateProgress={this.updateProgress}
            onConcern={this.props.onConcern}
          />
        </div>
      </div>
    )
  }

  updateProgress = (nextState) => {
    const { onUpdateProgress, toolResponse, onUpdateUserInDb } = this.props
    const { answerByStep } = nextState
    if (nextState.currentStepNum === toolResponse.steps.length - 1) {
      const userPropertiesToUpdate = {
        name: answerByStep[6],
        savoringChildName: answerByStep[7],
        savoringChildGender: answerByStep[8].match(/son/i) ? 'male' : 'female',
        gender: answerByStep[8].match(/father/i) ? 'male' : 'female',
      }
      onUpdateProgress(nextState, userPropertiesToUpdate)
      onUpdateUserInDb(userPropertiesToUpdate)
    } else {
      onUpdateProgress(nextState)
    }
  }

  toolResponseNode = null
}

export default withStyles(s)(SavoringYourChild)
