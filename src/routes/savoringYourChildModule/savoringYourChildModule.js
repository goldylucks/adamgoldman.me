// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToTopOfNode } from '../../utils'
import BreadCrumbs from '../../components/BreadCrumbs'
import Benefits from '../../components/Benefits'
import MessageMe from '../../components/MessageMe'
import Testimonials from '../../components/Testimonials'
import FAQ from '../../components/FAQ'
import LoomEmbedd from '../../components/LoomEmbedd'
import GetStarted from '../../components/GetStartedButton'
import FbGateKeeper from '../../components/FbGateKeeper'
import MultiStepForm from '../../components/MultiStepForm'

import './SavoringYourChildModule.css'

type Props = {
  title: string,
  description: string,
  slug: string,
  path: string,
  loom?: string,
  faq: [],
  testimonials: [],
  benefits: Array<String>,
  user: Object,
  toolResponse: Object,
  isFetchingToolResponse: boolean,
  fetchingToolResponseError: string,
  onLogin: Function,
  onUpdateProgress: Function,
  onUpdateUser: Function,
  onAnswerLinkPress: Function,
  onAnswerNewLinkPress: Function,
  onConcern: Function,
  onComplete: Function,
};

class savoringYourChildSectionModule extends React.Component<Props> {
  render() {
    const {
      title, description, faq, benefits, testimonials, loom,
    } = this.props
    return (
      <div>
        <div className="container">
          <BreadCrumbs
            basePath="/savoring-your-child"
            crumbs={[
              { text: 'Modules', path: '/savoring-your-child/modules' },
              { text: title },
            ]}
          />
          <div className="mainheading">
            <h1 className="sitetitle text-center">{title}</h1>
            <p className="lead text-center">{description}</p>
            {loom && <LoomEmbedd src={loom} />}
            <GetStarted style={{ marginTop: 80, marginBottom: 80 }} />
          </div>
          <hr />
          {!benefits.length
            ? null
            : (
              <section>
                <h1 className="text-center">What will I learn?</h1>
                <div className="row justify-content-md-center">
                  <div className="col col-lg-10">
                    <Benefits benefits={benefits} />
                  </div>
                </div>
                <hr />
                <GetStarted style={{ marginTop: 80, marginBottom: 80 }} />
                <hr />
              </section>
            )}
          {!testimonials.length
            ? null
            : (
              <section>
                <h1 className="text-center">Parents Share</h1>
                <Testimonials testimonials={testimonials} />
                <hr />
                <GetStarted style={{ marginTop: 80, marginBottom: 80 }} />
                <hr />
              </section>
            )}
          {!faq.length
            ? null
            : (
              <section>
                <h1 className="text-center">F.A.Q.</h1>
                <FAQ faq={faq} />
                <hr />
              </section>
            )}
          <MessageMe />
          <hr />
          <div style={{ position: 'relative' }}>
            {this.renderToolResponse()}
          </div>
        </div>
      </div>
    )
  }

  renderToolResponse() {
    const {
      toolResponse, isFetchingToolResponse, fetchingToolResponseError, user, title, onLogin, onUpdateProgress,
    } = this.props
    if (!user._id) {
      return (
        <div className={s.toolResponse} data-test="noUser">
          <h1>Intro</h1>
          <p>Login to get started</p>
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
      <div className={s.toolResponse}>
        <div>
          <h1 className="text-center" ref={(ref) => { this.toolResponseNode = ref }}>{title}</h1>
        </div>
        <div>
          <MultiStepForm
            {...toolResponse}
            onAnswerLinkPress={this.props.onAnswerLinkPress}
            onAnswerNewLinkPress={this.answerNewLinkPress}
            hiddenFields={{
              childHe: user.savoringChildGender === 'male' ? 'he' : 'she',
              childHis: user.savoringChildGender === 'male' ? 'his' : 'her',
              childHim: user.savoringChildGender === 'male' ? 'him' : 'her',
              childName: user.savoringChildName,
            }}
            scrollTop={() => scrollToTopOfNode(this.toolResponseNode)}
            onUpdateProgress={onUpdateProgress}
            onConcern={this.props.onConcern}
          />
        </div>
      </div>
    )
  }

  answerNewLinkPress = (link, isLastStep) => {
    if (isLastStep) {
      this.props.onComplete()
    } else {
      this.props.onAnswerNewLinkPress(link)
    }
  }

  toolResponseNode = null
}

export default withStyles(s)(savoringYourChildSectionModule)
