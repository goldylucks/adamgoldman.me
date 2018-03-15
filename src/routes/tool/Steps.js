import React from 'react'
import PropTypes from 'prop-types'

import Markdown from '../../components/Markdown'
import { scrollToElem, isMobile, nn } from '../../utils'

import Answers from './Answers'

class Steps extends React.Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    hiddenFields: PropTypes.object.isRequired,
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
        {this.renderTitle()}
        {this.renderDescription()}
        {this.renderInput()}
        {this.renderTextarea()}
        {this.renderAnswers()}
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
    return <Markdown source={this.replaceVars(this.currentStep().description)} />
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
            value={this.state.answerByStep[nn(this.state.currentStep)]}
            onChange={this.stepInputChange}
            placeholder={this.replaceVars(inputPlaceholder)}
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
            value={this.state.answerByStep[nn(this.state.currentStep)]}
            onChange={this.stepInputChange}
            placeholder={this.replaceVars(inputPlaceholder)}
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
          answers={answers}
          onSubmit={this.submitMultipleChoiceAnswer}
          onSubmitOther={this.submitMultipleChoiceOtherAnswer}
        />
      </div>
    )
  }

  renderBack() {
    return this.state.currentStep === 0 ? null : <a onClick={this.back}>Back</a>
  }

  submitMultipleChoiceAnswer = (aIdx) => {
    const answerByStep = { ...this.state.answerByStep }
    const { text, goToStepByNum } = this.getAnswerByAidx(aIdx)
    answerByStep[nn(this.state.currentStep)] = text
    this.setState({ answerByStep })
    if (goToStepByNum) {
      this.goToStep(Number(goToStepByNum), { resetPreviousAnswers: Number(goToStepByNum) < this.state.currentStep }) // eslint-disable-line max-len
    } else {
      this.next()
    }
  }

  submitMultipleChoiceOtherAnswer = (text) => {
    const answerByStep = { ...this.state.answerByStep }
    answerByStep[nn(this.state.currentStep)] = text
    this.setState({ answerByStep })
    this.next()
  }

  getAnswerByAidx(aIdx) {
    return this.props.steps[this.state.currentStep].answers[aIdx]
  }

  populateAnswersState() {
    const answerByStep = { ...this.state.answerByStep }
    for (let i = 0; i < this.props.steps.length; i += 1) {
      answerByStep[nn(i)] = ''
    }
    this.setState({ answerByStep })
  }

  back = () => this.goToStep(this.state.currentStep - 1)
  next = () => this.goToStep(this.state.currentStep + 1)

  goToStep = (step, { resetPreviousAnswers } = {}) => {
    if (resetPreviousAnswers) {
      this.resetPreviousAnswers(step)
    }
    this.setState({ currentStep: step })
    scrollTop()
  }

  resetPreviousAnswers(step) {
    const answerByStep = { ...this.state.answerByStep }
    for (let i = this.state.currentStep; i >= step; i -= 1) {
      delete answerByStep[nn(i)]
    }
    this.setState({ answerByStep })
  }

  stepInputChange = (evt) => {
    const answerByStep = { ...this.state.answerByStep }
    answerByStep[nn(this.state.currentStep)] = evt.target.value
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
        return this.state.answerByStep[nn(this.state.currentStep - 1)]
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
}
export default Steps

function scrollTop() {
  return scrollToElem(document.querySelector('html'), 0, 300)
}
