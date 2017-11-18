import React from 'react'
import PropTypes from 'prop-types'

import Markdown from '../../../components/Markdown'
import { scrollToElem } from '../../../utils'

import NewAnswers from './NewAnswers'

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
            {this.renderInput(step)}
            {this.renderAnswers(step.answers, idx)}
          </div>
        ))}
      </div>
    )
  }

  renderContent(step) {
    return (
      <Markdown
        className={!this.props.isRtl ? '' : 'rtl'}
        source={`
${this.renderTitle(step)}

${step.description}
`}
      />
    )
  }

  renderTitle(step) {
    if (!step.title) { return '' }
    if (!step.titleDynamics) { return `## ${step.title}` }
    return step.title(this.state)
  }

  titleFunc(step) {
    return new Function(`{ ${step.titleDynamics} }`, `return ${step.title}`) // eslint-disable-line no-new-func
  }

  renderInput({ inputId, inputPlaceholder }) {
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
          placeholder={inputPlaceholder}
          required
        />
        <button className="button">{!this.props.isRtl ? 'Let\'s continue' : 'בוא נמשיך'}</button>
      </form>
    )
  }

  renderAnswers(answers, idx) {
    return (
      <NewAnswers
        gender={this.state.gender}
        isRtl={this.props.isRtl}
        onGoToStepByTitle={this.goToStepByTitle}
        onResetInputs={this.resetInputs}
        onSetInput={this.setInput}
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

  inputsChange = id => evt => this.setState({ [id]: evt.target.value })

  resetInputs = (...inputIdsToReset) => {
    inputIdsToReset.forEach(id => this.setState({ [`input${id}`]: '' }))
  }

  setInput = (id, value) => {
    this.setState({ [id]: value })
  }
}
export default Steps
