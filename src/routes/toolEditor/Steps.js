import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { freshStep } from './toolEditorUtils'
import Step from './Step'

class Steps extends React.PureComponent {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    onUpdateSteps: PropTypes.func.isRequired,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.setupHotkeys, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.setupHotkeys, false)
  }

  render() {
    return this.props.steps.map((step, sIdx) => (
      <div>
        <Step
          step={step}
          sIdx={sIdx}
          stepCount={this.props.steps.length - 1}
          onUpdateStep={this.updateStep}
          onRemoveStep={this.removeStep}
          onAddStep={this.addStep}
        />
        <div style={{ padding: 20 }}>
          <a onClick={this.addStepAtEnd} style={{ marginRight: 20, fontSize: 20 }}>+ Step</a>
          <a onClick={this.duplicateStepAtEnd} style={{ fontSize: 20 }}>+ Duplicate Step</a>
        </div>
      </div>
    ))
  }

  removeStep = sIdx => () => {
    const steps = _.cloneDeep(this.props.steps)
    steps.splice(sIdx, 1)
    this.props.onUpdateSteps(steps)
  }

  addStep = (sIdx) => {
    const steps = _.cloneDeep(this.props.steps)
    steps.splice(sIdx + 1, 0, freshStep())
    this.props.onUpdateSteps(steps)
  }

  addStepAtEnd = () => {
    this.props.onUpdateSteps(this.props.steps.concat(freshStep()))
  }

  duplicateStepAtEnd = () => {
    this.props.onUpdateSteps(this.props.steps.concat(
      _.cloneDeep(_.last(this.props.steps)),
    ))
  }

  duplicateStepAtEndTitleOnly = () => {
    this.props.onUpdateSteps(this.props.steps.concat(freshStep(
      { title: _.last(this.props.steps).title },
    )))
  }

  changeStepKey = (key, sIdx) => (evt) => {
    const steps = _.cloneDeep(this.props.steps)
    steps[sIdx][key] = evt.target.value
    this.props.onUpdateSteps(steps)
  }

  toggleStepKey = (key, sIdx) => () => {
    const steps = _.cloneDeep(this.props.steps)
    steps[sIdx][key] = !steps[sIdx][key]
    this.props.onUpdateSteps(steps)
  }

  updateStep = (sIdx, step) => {
    const steps = _.cloneDeep(this.props.steps)
    steps[sIdx] = step
    this.props.onUpdateSteps(steps)
  }

  setupHotkeys = (evt) => {
    if (evt.key === 's' && evt.ctrlKey) {
      evt.preventDefault()
      this.addStepAtEnd()
    }
    if (evt.key === 's' && evt.altKey) {
      evt.preventDefault()
      this.duplicateStepAtEnd()
    }
    if (evt.key === 'S' && evt.altKey && evt.shiftKey) {
      evt.preventDefault()
      this.duplicateStepAtEndTitleOnly()
    }
  }
}

export default Steps
