import React from 'react'
import PropTypes from 'prop-types'

import Markdown from '../../../components/Markdown'
import { scrollToElem } from '../../../utils'

import AnswersV2 from './Answers-v2'

class StepsV2 extends React.Component {
  static propTypes = {
    initialState: PropTypes.object,
    steps: PropTypes.array.isRequired,
    isRtl: PropTypes.boolean,
  }

  static defaultProps = {
    initialState: {},
    isRtl: false,
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
        {steps.map((step, idx) => (
          <div
            key={step.title}
            style={
              idx === currentStep ? { display: 'block' } : { display: 'none' }
            }
          >
            {this.renderContent(step)}
            {this.renderInput(step.input)}
            {this.renderAnswers(step.answers, idx)}
          </div>
        ))}
      </div>
    )
  }

  renderContent(step) {
    return (
      <div>
        {step.preDescriptionHtml}
        <Markdown
          className={!this.props.isRtl ? '' : 'rtl'}
          source={`
${!step.title ? '' : `## ${step.title}`}

${step.description(this.state)}
            `}
        />
      </div>
    )
  }

  renderInput(input) {
    if (!input) {
      return null
    }
    return (
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          if (input.onSubmit) {
            input.onSubmit(this)
            return
          }
          this.next()
        }}
        className="tool-form"
      >
        <input
          value={this.state[`input${input.id}`]}
          onChange={this.inputsChange(input.id)}
          className={`input ${!this.props.isRtl ? '' : 'rtl'}`}
          placeholder={typeof input.placeholder === 'function' ? input.placeholder(this.state) : input.placeholder}
          required
        />
        <button className="button">{!this.props.isRtl ? 'Let\'s continue' : 'בוא נמשיך'}</button>
      </form>
    )
  }

  renderAnswers(answers, idx) {
    return (
      <AnswersV2
        that={this}
        gender={this.state.gender}
        isRtl={this.props.isRtl}
        goToStepByTitle={this.goToStepByTitle}
        answers={
          typeof answers === 'function'
            ? answers(this.state, {
              goToStepByTitle: this.goToStepByTitle,
              resetInputs: this.resetInputs,
            })
            : answers
        }
        onNext={this.next}
        noBack={idx === 0}
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

  inputsChange = id => evt => this.setState({ [`input${id}`]: evt.target.value })

  resetInputs = (...inputIdsToReset) => {
    inputIdsToReset.forEach(id => this.setState({ [`input${id}`]: '' }))
  }
}
export default StepsV2
