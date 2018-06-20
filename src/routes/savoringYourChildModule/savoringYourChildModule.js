// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToTopOfNode } from '../../utils'
import Benefits from '../../components/Benefits'
import MessageMe from '../../components/MessageMe'
import Testimonials from '../../components/Testimonials'
import FAQ from '../../components/FAQ'
import GetStarted from '../../components/GetStartedButton'
import FbGateKeeper from '../../components/FbGateKeeper'
import MultiStepForm from '../../components/MultiStepForm'

import s from './SavoringYourChildModule.css'

type Props = {
  title: string,
  description: string,
  slug: string,
  path: string,
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
  onConcern: Function,
};

class savoringYourChildSectionModule extends React.Component<Props> {
  render() {
    const {
      title, description, faq, benefits, testimonials,
    } = this.props
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle text-center">{title}</h1>
            <p className="lead text-center">{description}</p>
            <GetStarted style={{ marginTop: 80, marginBottom: 80 }} />
          </div>
          <hr />
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
            hiddenFields={{
              childHe: user.savoringChildGender === 'male' ? 'he' : 'she',
              childHis: user.savoringChildGender === 'male' ? 'his' : 'her',
              childHim: user.savoringChildGender === 'male' ? 'him' : 'her',
              childName: user.savoringChildName,
            }}
            hideSubscribeButton
            scrollTop={() => scrollToTopOfNode(this.toolResponseNode)}
            onUpdateProgress={onUpdateProgress}
            onConcern={this.props.onConcern}
          />
        </div>
      </div>
    )
  }

  toolResponseNode = null
}

export default withStyles(s)(savoringYourChildSectionModule)
