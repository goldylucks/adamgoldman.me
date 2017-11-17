import React from 'react'
import PropTypes from 'prop-types'

import Markdown from '../../../components/Markdown'
import { scrollToElem } from '../../../utils'

import Answers from './Answers'

class Steps extends React.Component {
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
    inputs: {},
  }

  render() {
    const { steps, isRtl } = this.props
    const { currentStep } = this.state

    return (
      <div>
        <h3 style={{ marginBottom: 60 }} className={isRtl && 'rtl'}>
          {!isRtl ? 'Step' : 'צעד'} {currentStep}/{steps.length - 1}
        </h3>
        {steps.map((step, idx) => (
          <div
            key={step.title}
            style={
              idx === currentStep ? { display: 'block' } : { display: 'none' }
            }
          >
            <Markdown
              className={isRtl && 'rtl'}
              source={`
${!step.title ? '' : `## ${step.title}`}

${step.description(this.state)}
`}
            />
            {step.input && (
              <form
                onSubmit={(evt) => {
                  evt.preventDefault()
                  if (step.input.onSubmit) {
                    step.input.onSubmit(this)
                    return
                  }
                  this.next()
                }}
                className="tool-form"
              >
                <input
                  value={this.state.inputs[step.input.id]}
                  onChange={this.inputsChange(step.input.id)}
                  className={`input ${!isRtl ? '' : 'rtl'}`}
                  placeholder={typeof step.input.placeholder === 'function' ? step.input.placeholder(this.state) : step.input.placeholder}
                  required
                />
                <button className="button">{!isRtl ? 'Let\'s continue' : 'בוא נמשיך'}</button>
              </form>
            )}
            <Answers
              that={this}
              isRtl={isRtl}
              goToStepByTitle={this.goToStepByTitle}
              answers={
                typeof step.answers === 'function'
                  ? step.answers(this.state, {
                    goToStepByTitle: this.goToStepByTitle,
                    resetInputs: this.resetInputs,
                  })
                  : step.answers
              }
              onNext={this.next}
              noBack={idx === 0}
            />
          </div>
        ))}
      </div>
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

  inputsChange = id => (evt) => {
    this.setState({
      inputs: Object.assign({}, this.state.inputs, {
        [id]: evt.target.value,
      }),
    })
  };

  resetInputs = (...inputsToReset) => {
    const nextInputs = { ...this.state.inputs }
    inputsToReset.forEach(input => delete nextInputs[input])
    this.setState({ inputs: nextInputs })
  }
}
export default Steps
