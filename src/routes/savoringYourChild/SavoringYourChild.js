// @flow

import React from 'react'
import axios from 'axios'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToElem } from '../../utils'
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
  onLogin: Function,
}

class SavoringYourChild extends React.Component {
  state = {
    isFetchingIntroModule: true,
    introModule: null,
    fetchingIntroModuleError: null,
  }
  componentDidMount() {
    if (this.props.user._id) {
      this.fetchIntroModule()
    }
  }
  props: Props

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
            {this.renderIntroModule()}
          </div>
        </div>
      </div>
    )
  }

  renderIntroModule() {
    const { introModule, isFetchingIntroModule, fetchingIntroModuleError } = this.state
    const { user, onLogin } = this.props
    if (!user._id) {
      return (
        <div className={s.introModule}>
          <h1>Intro</h1>
          <p>Let me tell you a little bit about how I work with parents, so you can get a gentle idea about the short time we are about to spend together, ok?</p>
          <FbGateKeeper onLogin={onLogin} user={user} />
        </div>
      )
    }
    if (isFetchingIntroModule) {
      return <p>Loading ...</p>
    }
    if (fetchingIntroModuleError) {
      return <p>There was an error loading. Please refresh the page and contact me if it continues</p>
    }
    return (
      <div className={s.introModule}>
        <div>
          <h1 className="text-center" ref={(ref) => { this.introNode = ref }}>Intro Questionnaire</h1>
        </div>
        <div>
          <MultiStepForm
            hideSubscribeButton
            {...introModule}
            scrollTop={this.scrollTopOfIntroModule}
            onUpdateProgress={this.updateProgress}
          />
        </div>
      </div>
    )
  }

  fetchIntroModule() {
    axios.get('/api/toolResponses/fetchByUserOrCreate/savoring-intro')
      .then(({ data }) => { this.setState({ introModule: data, isFetchingIntroModule: false }) })
      .catch((err) => {
        global.console.error(err)
        this.setState({ fetchingIntroModuleError: err.message, isFetchingIntroModule: false })
      })
  }

  updateProgress = (nextState) => {
    if (nextState.currentStepNum === this.state.introModule.steps.length - 1) {
      nextState.status = 'Completed'
      // TODO go to peaceful ending
    }
    axios.put(`/api/toolResponses/${this.state.introModule._id}`, { ...this.state.introModule, ...nextState })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  scrollTopOfIntroModule = () => {
    const top = this.introNode.getBoundingClientRect().top - document.body.getBoundingClientRect().top
    scrollToElem(document.querySelector('html'), top, 300)
  }
  introNode = null
}

export default withStyles(s)(SavoringYourChild)
