import React from 'react'
import PropTypes from 'prop-types'

import Markdown from '../../../components/Markdown'
import Testimony from '../../../components/Testimony'
import SignupFormToolFollowup from '../../../components/SignupFormToolFollowup'
import { scrollToElem } from '../../../utils'

import AnswersV3 from './Answers-v3'

class StepsV3 extends React.Component {
  static propTypes = {
    initialState: PropTypes.object,
    testimony1Text: PropTypes.string,
    testimony1Src: PropTypes.string,
    testimony1Name: PropTypes.string,
    steps: PropTypes.array.isRequired,
    isRtl: PropTypes.boolean,
  }

  static defaultProps = {
    initialState: {},
    isRtl: false,
    testimony1Text: '',
    testimony1Src: '',
    testimony1Name: '',
  }

  state = {
    ...this.props.initialState,
    currentStep: 0,
  }

  render() {
    const { steps, isRtl } = this.props
    const { currentStep } = this.state

    return (
      <div>
        <h3 style={{ marginBottom: 60 }} className={!isRtl ? '' : 'rtl'}>
          {!isRtl ? 'Step' : 'צעד'} {currentStep}/{steps.length - 1}
        </h3>
        {this.renderTitle()}
        {this.renderTestimonials()}
        {this.renderDescription()}
        {this.renderInput()}
        {this.renderSignup()}
        {this.renderAnswers()}
      </div>
    )
  }

  renderTitle() {
    const step = this.props.steps[this.state.currentStep]
    if (!step.title) { return null }
    return (
      <Markdown
        className={!this.props.isRtl ? '' : 'rtl'}
        source={`## ${replaceVars(step.title, this.state)}`}
      />
    )
  }

  renderTestimonials() {
    const {
      testimony1Text, testimony1Src, testimony1Name,
    } = this.props
    if (this.state.currentStep !== 0) {
      return null
    }
    if (!testimony1Text) {
      return null
    }
    return (
      <Testimony
        imgSrc={testimony1Src}
        text={testimony1Text}
        name={testimony1Name}
      />
    )
  }

  renderDescription() {
    const step = this.props.steps[this.state.currentStep]
    return (
      <Markdown
        className={!this.props.isRtl ? '' : 'rtl'}
        source={replaceVars(step.description, this.state)}
      />
    )
  }

  renderInput() {
    const { inputId, inputPlaceholder } = this.props.steps[this.state.currentStep]
    if (!inputId) {
      return null
    }
    return (
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          this.next()
        }}
        className="tool-form"
      >
        <input
          value={this.state[`${inputId}`]}
          onChange={this.inputsChange(inputId)}
          className={`input ${!this.props.isRtl ? '' : 'rtl'}`}
          placeholder={replaceVars(inputPlaceholder, this.state)}
          required
        />
        <button className="button">{!this.props.isRtl ? 'Let\'s continue' : 'בוא נמשיך'}</button>
      </form>
    )
  }

  renderSignup() {
    const { listId } = this.props.steps[this.state.currentStep]
    if (!listId) {
      return null
    }
    return (
      <SignupFormToolFollowup listId={listId} onNext={this.next} />
    )
  }

  renderAnswers() {
    const answers = this.props.steps[this.state.currentStep].answers.map((answer) => {
      if (answer.text) {
        answer.text = replaceVars(answer.text, this.state)
      }
      return answer
    })
    return (
      <AnswersV3
        gender={this.state.gender}
        isRtl={this.props.isRtl}
        answers={answers}
        onGoToStepByTitle={this.goToStepByTitle}
        onResetInputs={this.resetInputs}
        onSetInput={this.setInput}
        onNext={this.next}
        noBack={this.state.currentStep === 0}
      />
    )
  }

  back = n =>
    this.goToStep(this.state.currentStep - (typeof n === 'number' ? n : 1));
  next = n =>
    this.goToStep(this.state.currentStep + (typeof n === 'number' ? n : 1));

  goToStep = (step) => {
    scrollToElem(document.querySelector('#main-layout'), 0, 300)
    this.setState({ currentStep: step })
  };

  goToStepByTitle = (title) => {
    const { steps } = this.props
    scrollToElem(document.querySelector('#main-layout'), 0, 300)
    this.setState({
      currentStep: steps.indexOf(steps.find(s => s.title === title)),
    })
  };

  inputsChange = id => evt => this.setState({ [id]: evt.target.value })

  resetInputs = inputIdsToReset => inputIdsToReset.forEach(id => this.setState({ [id]: '' }))

  setInput = (id, value) => {
    this.setState({ [id]: value })
  }
}
export default StepsV3

function replaceVars(str, state) {
  return str.replace(/\${(.*?)}/g, (...args) => {
    const key = args[1]
    if (key.indexOf('heShe') === 0) {
      const genderKey = key.replace('heShe(', '').replace(')', '')
      return state[genderKey] === 'male' ? 'he' : 'she'
    }
    if (key.indexOf('hisHer') === 0) {
      const genderKey = key.replace('hisHer(', '').replace(')', '')
      return state[genderKey] === 'male' ? 'his' : 'her'
    }
    if (key.indexOf('himHer') === 0) {
      const genderKey = key.replace('himHer(', '').replace(')', '')
      return state[genderKey] === 'male' ? 'him' : 'her'
    }
    return state[key]
  })
}
