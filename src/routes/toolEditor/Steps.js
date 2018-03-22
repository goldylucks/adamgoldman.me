import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { freshStep, updateLogicalJumpsAfterAddStep, updateLogicalJumpsAfterRemoveStep } from './toolEditorUtils'
import Step from './Step'

class Steps extends Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    onUpdateSteps: PropTypes.func.isRequired,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.setupHotkeys, false)
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.steps !== nextProps.steps) {
      return true
    }
    return false
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.setupHotkeys, false)
  }

  render() {
    return (
      <div>
        {this.props.steps.map((step, sIdx) => (
          <Step
            step={step}
            sIdx={sIdx}
            stepCount={this.props.steps.length - 1}
            onUpdateStep={this.updateStep}
            onRemoveStep={this.removeStep}
            onAddStep={this.addStep}
          />
        ))}
        <div style={{ padding: 20 }}>
          <a onClick={this.addStepAtEnd} style={{ marginRight: 20, fontSize: 20 }}>+ Step</a>
          <a onClick={this.duplicateStepAtEnd} style={{ fontSize: 20 }}>+ Duplicate Step</a>
        </div>
      </div>
    )
  }

  removeStep = (sIdx) => {
    try {
      const steps = updateLogicalJumpsAfterRemoveStep(sIdx, _.cloneDeep(this.props.steps))
      steps.splice(sIdx, 1)
      this.props.onUpdateSteps(steps)
    } catch (err) {
      global.alert(err)
    }
  }

  addStep = (sIdx) => {
    const steps = updateLogicalJumpsAfterAddStep(sIdx, _.cloneDeep(this.props.steps))
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
