import React from 'react'
import PropTypes from 'prop-types'
import ReactStars from 'react-stars'

import { MESSENGER_LINK_TOOL_CONCERN } from '../../constants'
import Markdown from '../../components/Markdown'
import { scrollToElem, isMobile } from '../../utils'

import Answers from './Answers'

class Steps extends React.Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    hiddenFields: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
  }

  state = {
    currentStep: 0,
    answerByStep: {},
  }

  componentWillMount() {
    this.populateAnswersState()
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 30 }}>
          {this.renderTitle()}
        </div>
        {this.renderDescription()}
        {this.renderNotes()}
        {this.renderInput()}
        {this.renderTextarea()}
        {this.renderAnswers()}
        {this.renderStars()}
        {this.renderBack()}
      </div>
    )
  }

  renderTitle() {
    const { title } = this.currentStep()
    if (!title) { return null }
    return <Markdown source={`## ${this.replaceVars(title)}`} />
  }

  renderDescription() {
    const { description } = this.currentStep()
    if (!description) { return null }
    return <Markdown source={this.replaceVars(description)} />
  }

  renderNotes() {
    const { notes } = this.currentStep()
    if (!notes) { return null }
    return <Markdown className="text-muted tool-note" source={this.replaceVars(notes)} />
  }

  renderInput() {
    const { type, inputPlaceholder } = this.currentStep()
    if (type !== 'short') {
      return null
    }
    return (
      <form onSubmit={(evt) => {
        evt.preventDefault()
        this.next()
      }}
      >
        <div className="form-group">
          <input
            value={this.state.answerByStep[this.state.currentStep]}
            onChange={this.stepInputChange}
            placeholder={this.replaceVars(inputPlaceholder || 'write your answer here')}
            required
            autoFocus={!isMobile()}
            className="form-control"
            aria-describedby="inputHelp"
          />
          <small id="inputHelp" className="form-text text-muted">Privacy is sacred. Your data is safe.</small>
        </div>
        <button type="submit" className="btn btn-primary">Press Enter or click to Continue</button>
      </form>
    )
  }

  renderTextarea() {
    const { type, inputPlaceholder } = this.currentStep()
    if (type !== 'long') {
      return null
    }
    return (
      <form onSubmit={(evt) => {
        evt.preventDefault()
        this.next()
      }}
      >
        <div className="form-group">
          <textarea
            value={this.state.answerByStep[this.state.currentStep]}
            onChange={this.stepInputChange}
            placeholder={this.replaceVars(inputPlaceholder || 'write your answer here')}
            required
            autoFocus={!isMobile()}
            className="form-control"
            aria-describedby="inputHelp"
          />
          <small id="inputHelp" className="form-text text-muted">Privacy is sacred. Your data is safe.</small>
        </div>
        <button type="submit" className="btn btn-primary">Continue</button>
      </form>
    )
  }

  renderAnswers() {
    if (!this.currentStep().answers) {
      return null
    }
    const answers = this.currentStep().answers.map((answer) => {
      if (answer.text) { answer.text = this.replaceVars(answer.text) }
      return answer
    })
    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <Answers
          path={this.props.path}
          answers={answers}
          onSubmit={this.submitMultipleChoiceAnswer}
          onSubmitOther={this.submitMultipleChoiceOtherAnswer}
        />
      </div>
    )
  }

  renderStars() {
    if (this.currentStep().type !== 'stars-review') {
      return null
    }
    return <ReactStars half={false} count={5} onChange={this.onStarReviewRating} size={60} />
  }

  renderBack() {
    return this.state.currentStep === 0 ? null : <button className="btn btn-secondary btn-sm" onClick={this.back}>Back</button>
  }

  stepsStack = []

  submitMultipleChoiceAnswer = (aIdx) => {
    const answerByStep = { ...this.state.answerByStep }
    const { text, goToStepByNum, isRepeatProcess } = this.getAnswerByAidx(aIdx)
    answerByStep[this.state.currentStep] = text
    this.setState({ answerByStep })
    if (goToStepByNum) {
      this.goToStep(Number(goToStepByNum), { resetPreviousAnswers: Number(goToStepByNum) < this.state.currentStep }) // eslint-disable-line max-len
    } else if (isRepeatProcess) {
      this.goToStep(Number(0), { resetPreviousAnswers: true })
    } else {
      this.next()
    }
  }

  submitMultipleChoiceOtherAnswer = (aIdx, text) => {
    const answerByStep = { ...this.state.answerByStep }
    const { goToStepByNum } = this.getAnswerByAidx(aIdx)
    answerByStep[this.state.currentStep] = text
    this.setState({ answerByStep })
    if (goToStepByNum) {
      this.goToStep(Number(goToStepByNum), { resetPreviousAnswers: Number(goToStepByNum) < this.state.currentStep }) // eslint-disable-line max-len
    } else {
      this.next()
    }
  }

  getAnswerByAidx(aIdx) {
    return this.props.steps[this.state.currentStep].answers[aIdx]
  }

  populateAnswersState() {
    const answerByStep = { ...this.state.answerByStep }
    for (let i = 0; i < this.props.steps.length; i += 1) {
      answerByStep[i] = ''
    }
    this.setState({ answerByStep })
  }

  back = () => {
    this.setState({ currentStep: this.stepsStack.pop() })
    scrollTop()
  }
  next = () => this.goToStep(this.state.currentStep + 1)

  goToStep = (step, { resetPreviousAnswers } = {}) => {
    if (resetPreviousAnswers) {
      this.resetPreviousAnswers(step)
    }
    this.stepsStack.push(this.state.currentStep)
    this.setState({ currentStep: step })
    scrollTop()
  }

  resetPreviousAnswers(step) {
    const answerByStep = { ...this.state.answerByStep }
    this.stepsStack = this.stepsStack.filter(stepNumber => stepNumber >= step)
    for (let i = this.state.currentStep; i >= step; i -= 1) {
      delete answerByStep[i]
    }
    this.setState({ answerByStep })
  }

  stepInputChange = (evt) => {
    const answerByStep = { ...this.state.answerByStep }
    answerByStep[this.state.currentStep] = evt.target.value
    this.setState({ answerByStep })
  }

  currentStep() {
    return this.props.steps[this.state.currentStep]
  }

  replaceVars(str) {
    if (!str) {
      global.console.warn('replaceVars called on empty value')
      return str
    }
    return str.replace(/\${(.*?)}/g, (...args) => {
      const key = args[1]
      if (key === 'echo') {
        return this.state.answerByStep[this.state.currentStep - 1]
      }
      if (key.indexOf('he') === 0) {
        return this.state.answerByStep[key.slice(2)].match(/female/i) ? 'she' : 'he'
      }
      if (key.indexOf('his') === 0) {
        return this.state.answerByStep[key.slice(3)].match(/female/i) ? 'her' : 'his'
      }
      if (key.indexOf('him') === 0) {
        return this.state.answerByStep[key.slice(3)].match(/female/i) ? 'her' : 'him'
      }
      if (key[0] === 's') {
        return this.state.answerByStep[key.slice(1)]
      }
      if (key[0] === 'h') {
        return this.props.hiddenFields[key.slice(1)]
      }
      return args[1]
    })
  }

  onStarReviewRating = (rating) => {
    const answerByStep = { ...this.state.answerByStep }
    answerByStep[this.state.currentStep] = rating
    if (rating <= 2) {
      if (global.confirm('Glad you are being honest with me and yourself. \nI\'d like to hear how I can help you with this and what didn\'t you like.\n\n click "ok" to start a conversation with me on messenger')) {
        window.open(MESSENGER_LINK_TOOL_CONCERN)
      }
      this.goToStepById('finalComments')
    } else if (rating === 3) {
      this.goToStepById('finalComments')
    } else {
      this.goToStepById('payment')
    }
  }

  goToStepById = (id) => {
    this.goToStep(this.stepNumById(id))
  }

  stepNumById = id => this.props.steps.findIndex(s => s.id === id)
}
export default Steps

function scrollTop() {
  return scrollToElem(document.querySelector('html'), 0, 300)
}
