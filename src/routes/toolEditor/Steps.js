import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Typeahead } from 'react-bootstrap-typeahead'

import {
  freshStep,
  updateLogicalJumpsAfterAddStep,
  updateLogicalJumpsAfterRemoveStep,
} from './toolEditorUtils'
import Step from './Step'

import { replaceAtIdx } from '../../utils/stringUtils'

class Steps extends Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    onUpdateSteps: PropTypes.func.isRequired,
    onSetStepToPronouns: PropTypes.func.isRequired,
    hiddenFields: PropTypes.array.isRequired,
  }

  state = {
    promptVariableFor: null,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.setupHotkeys, false)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.steps !== nextProps.steps ||
      !_.isEqual(nextState.promptVariableFor, this.state.promptVariableFor)
    )
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.setupHotkeys, false)
  }

  render() {
    return (
      <div>
        {this.renderPromptVariableAc()}
        <div>
          {this.props.steps.map((step, sIdx) => (
            <Step
              onSetStepToPronouns={this.props.onSetStepToPronouns}
              onPromptVariable={this.promptVariable}
              onRegisterUnpromptVariable={this.registerUnpromptVariable}
              step={step}
              sIdx={sIdx}
              key={sIdx}
              onRef={el => {
                this.elems[`childStep-${sIdx}`] = el
              }}
              stepCount={this.props.steps.length - 1}
              onUpdateStep={this.updateStep}
              onRemoveStep={this.removeStep}
              onAddStep={this.addStep}
            />
          ))}
        </div>
        <div style={{ padding: 20 }}>
          <a
            onClick={this.addStepAtEnd}
            style={{ marginRight: 20, fontSize: 20 }}
          >
            + Step
          </a>
          <a onClick={this.duplicateStepAtEnd} style={{ fontSize: 20 }}>
            + Duplicate Step
          </a>
        </div>
      </div>
    )
  }

  renderPromptVariableAc() {
    return (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: 1,
          display: this.state.promptVariableFor ? 'block' : 'none',
        }}
      >
        <Typeahead
          onChange={this.onSelectVariable}
          menuId='promptVariable'
          selectHintOnEnter
          options={this.variableAcOptions()}
          labelKey={this.variableAcLabelKey}
          placeholder='Choose Variable'
          ref={ref => {
            this.elems.variableAc = ref
          }}
          highlightOnlyResult
          onKeyDown={this.variableAcKeyDown}
        />
      </div>
    )
  }

  elems = {}

  removeStep = sIdx => {
    try {
      const steps = updateLogicalJumpsAfterRemoveStep(
        sIdx,
        _.cloneDeep(this.props.steps),
      )
      steps.splice(sIdx, 1)
      this.props.onUpdateSteps(steps)
    } catch (err) {
      global.alert(err)
    }
  }

  addStep = sIdx => {
    const steps = updateLogicalJumpsAfterAddStep(
      sIdx,
      _.cloneDeep(this.props.steps),
    )
    steps.splice(sIdx + 1, 0, freshStep())
    this.props.onUpdateSteps(steps)
  }

  addStepAtEnd = () => {
    this.props.onUpdateSteps(this.props.steps.concat(freshStep()))
  }

  duplicateStepAtEnd = () => {
    this.props.onUpdateSteps(
      this.props.steps.concat(_.cloneDeep(_.last(this.props.steps))),
    )
  }

  duplicateStepAtEndTitleOnly = () => {
    this.props.onUpdateSteps(
      this.props.steps.concat(
        freshStep({ title: _.last(this.props.steps).title }),
      ),
    )
  }

  changeStepKey = (key, sIdx) => evt => {
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

  setupHotkeys = evt => {
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

  promptVariable = ({ sIdx, key, promptIdx }) => {
    this.setState(
      {
        promptVariableFor: { sIdx, key, promptIdx },
      },
      this.elems.variableAc.getInstance().focus,
    )
  }

  registerUnpromptVariable = (endTriggerHandler, sIdx, key) => {
    this[`_unpromptVariable-${sIdx}-${key}`] = endTriggerHandler
  }

  unpromptVariable(sIdx, key) {
    this[`_unpromptVariable-${sIdx}-${key}`]()
    this.setState({ promptVariableFor: null })
    this.elems.variableAc.getInstance().clear()
    this.elems.variableAc.getInstance().blur()
    this.elems[`childStep-${sIdx}`].elems[key].focus()
  }

  variableAcOptions() {
    if (!this.state.promptVariableFor) {
      return []
    }
    const stepsVars = this.props.steps
      .slice(0, this.state.promptVariableFor.sIdx)
      .map((s, sIdx) => ({ ...s, sIdx, isStep: true }))
    const hiddenFieldsVars = this.props.hiddenFields.map(h => ({
      title: h.label,
      isHiddenField: true,
    }))
    return hiddenFieldsVars.concat(stepsVars).filter(Boolean)
  }

  variableAcLabelKey = ({ isStep, isHiddenField, sIdx, title }) => {
    if (isStep) {
      return `${sIdx} - ${title}`
    }
    if (isHiddenField) {
      return `HF - ${title}`
    }
    return 'WARNING'
  }

  variableAcKeyDown = evt => {
    if (evt.key !== 'Escape') {
      return
    }
    const { sIdx, key, promptIdx } = this.state.promptVariableFor
    this.unpromptVariable(sIdx, key)
    setTimeout(() => {
      this.elems[`childStep-${sIdx}`].elems[key].setSelectionRange(
        promptIdx + 1,
        promptIdx + 1,
      )
    }, 0)
  }

  onSelectVariable = ([selected]) => {
    if (!selected) {
      return
    }
    const { sIdx, key, promptIdx } = this.state.promptVariableFor
    const varString = this.selectVariableStr(selected)
    this.updateStep(sIdx, {
      ...this.props.steps[sIdx],
      [key]: replaceAtIdx(this.props.steps[sIdx][key], promptIdx, varString),
    })
    this.unpromptVariable(sIdx, key)
    setTimeout(() => {
      this.elems[`childStep-${sIdx}`].elems[key].setSelectionRange(
        promptIdx + varString.length,
        promptIdx + varString.length,
      )
    }, 0)
  }

  selectVariableStr = selected => {
    if (selected.isStep) {
      return `\${s${selected.sIdx}}`
    }
    if (selected.isHiddenField) {
      return `\${h${selected.title}}`
    }
    return 'WARNING'
  }
}

export default Steps
