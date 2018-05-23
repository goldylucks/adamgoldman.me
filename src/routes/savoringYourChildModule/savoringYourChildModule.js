// @flow

import React from 'react'
import axios from 'axios'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { scrollToElem } from '../../utils'
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
  onLogin: Function,
  onUpdateUser: Function
};

class savoringYourChildSectionModule extends React.Component<Props> {
  state = {
    isFetchingModule: true,
    module: null,
    fetchingModuleError: null,
  }
  componentDidMount() {
    this.fetchModule()
  }

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
            {this.renderModule()}
          </div>
        </div>
      </div>
    )
  }

  renderModule() {
    const { module, isFetchingModule, fetchingModuleError } = this.state
    const { user, title } = this.props
    if (!user._id) {
      return (
        <div className={s.module}>
          <h1>Intro</h1>
          <p>Login to get started</p>
          <FbGateKeeper onLogin={this.onLogin} user={user} />
        </div>
      )
    }
    if (isFetchingModule) {
      return <p>Loading ...</p>
    }
    if (fetchingModuleError) {
      return <p>There was an error loading. Please refresh the page and contact me if it continues</p>
    }
    return (
      <div className={s.module}>
        <div>
          <h1 className="text-center" ref={(ref) => { this.moduleNode = ref }}>{title}</h1>
        </div>
        <div>
          <MultiStepForm
            hiddenFields={{
              childHe: user.savoringChildGender === 'male' ? 'he' : 'she',
              childHis: user.savoringChildGender === 'male' ? 'his' : 'her',
              childHim: user.savoringChildGender === 'male' ? 'him' : 'her',
              childName: user.savoringChildName,
            }}
            hideSubscribeButton
            {...module}
            scrollTop={this.scrollTopOfModule}
            onUpdateProgress={this.updateProgress}
          />
        </div>
      </div>
    )
  }

  fetchModule = () => {
    const { slug } = this.props
    axios.get(`/api/toolResponses/fetchByUserOrCreate/${slug}`)
      .then(({ data: toolResponse }) => {
        this.setState({ module: toolResponse, isFetchingModule: false })
        // update user tool responses if this is a new created module
        if (this.isNewToolResponse(toolResponse)) {
          this.addToolResponseToUser(toolResponse)
        }
      })
      .catch((err) => {
        global.console.error(err)
        this.setState({ fetchingModuleError: err.message, isFetchingModule: false })
      })
  }

  onLogin = (user) => {
    this.props.onLogin(user, this.fetchModule)
  }

  updateProgress = (nextState) => {
    if (nextState.currentStepNum === this.state.module.steps.length - 1) {
      nextState.status = 'Completed'
    }
    axios.put(`/api/toolResponses/${this.state.module._id}`, { ...this.state.module, ...nextState })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  scrollTopOfModule = () => {
    const top = this.moduleNode.getBoundingClientRect().top - document.body.getBoundingClientRect().top
    scrollToElem(document.querySelector('html'), top, 300)
  }
  moduleNode = null

  markToolResponseAsCompleted = (tr) => {
    if (tr._id === this.state.module._id) {
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

  updateUserOnCompletion() {
    const { onUpdateUser, user } = this.props
    onUpdateUser({
      ...user,
      toolResponses: user.toolResponses.map(this.markToolResponseAsCompleted),
    })
  }
}

export default withStyles(s)(savoringYourChildSectionModule)
