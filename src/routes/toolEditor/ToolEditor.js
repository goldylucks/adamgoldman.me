import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'
import cx from 'classnames'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt'
import faSave from '@fortawesome/fontawesome-free-regular/faSave'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'
import TextareaAutosize from 'react-autosize-textarea'
import { Typeahead } from 'react-bootstrap-typeahead'
import _ from 'lodash'

import { inputChange, inputToggle } from '../../forms'

import { freshStep } from './toolEditorUtils'
import Toc from './Toc'
import Answers from './Answers'
import s from './ToolEditor.css'

class ToolEditor extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    isDraft: false,
    title: '',
    description: '',
    credits: '',
    steps: [freshStep()],
    hiddenFields: [],
  }

  componentWillMount() {
    if (this.props.data) {
      this.setState(this.props.data)
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.setupHotkeys, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.setupHotkeys, false)
  }

  render() {
    return (
      <div style={{ padding: 10 }}>
        <div className="clearfix" style={{ width: '60%', float: 'left' }}>
          {this.renderDetails()}
          <hr />
          <h1 className="text-center">Steps</h1>
          {this.renderSteps()}
          <div style={{ padding: 20 }}>
            <a onClick={this.addStepAtEnd} style={{ marginRight: 20, fontSize: 20 }}>+ Step</a>
            <a onClick={this.duplicateStepAtEnd} style={{ fontSize: 20 }}>+ Duplicate Step</a>
          </div>
          <div className={s.controls}>
            <a className={s.control} href={`/tools/${this.props.url}`} target="_blank"><FontAwesomeIcon icon={faEye} /></a>
            <a className={s.control} onClick={this.save}><FontAwesomeIcon icon={faSave} /></a>
            <a className={s.control} onClick={this.del}><FontAwesomeIcon icon={faTrashAlt} /></a>
          </div>
        </div>
        <div className="clearfix" style={{ width: '35%', right: 0, position: 'fixed' }}>
          <Toc steps={this.state.steps} onReorderSteps={this.reorderSteps} />
        </div>
      </div>
    )
  }

  renderDetails() {
    const {
      title, description, credits, isDraft,
    } = this.state
    return (
      <div>
        <h1 id="details" className="text-center">Details</h1>
        <div className="form-group">
          Title
          <input className="form-control" placeholder="Title" value={title} onChange={inputChange.call(this, 'title')} />
        </div>
        <div className="form-group">
          Description
          <div style={{ position: 'relative' }}>
            <input className="form-control" placeholder="Description" value={description} onChange={inputChange.call(this, 'description')} />
          </div>
        </div>
        <div className="form-group">
          Credits
          <input className="form-control" placeholder="Credits" value={credits} onChange={inputChange.call(this, 'credits')} />
        </div>
        <div className="form-group">
          <input style={{ marginRight: 10 }} type="checkbox" id="isDraft" value={isDraft} checked={isDraft} onChange={inputToggle.call(this, 'isDraft')} />
          <label htmlFor="isDraft">Draft</label>
        </div>
        <Typeahead
          allowNew
          multiple
          newSelectionPrefix="Add hidden field:"
          onChange={this.updateHiddenFields}
          defaultSelected={this.state.hiddenFields}
          options={this.state.hiddenFields}
          placeholder="Add hidden field"
        />
      </div>
    )
  }

  renderSteps() {
    return this.state.steps.map((step, sIdx) => (
      <div key={sIdx} id={`step-${sIdx}`} className={s.step}>
        <div className="row" style={{ marginBottom: 20 }}>
          <div className="col-10">
            <div>
              <input style={{ width: '100%', border: 0, marginBottom: 20 }} ref={(el) => { this.elems[`${sIdx}-title`] = el }} className="h2" placeholder="Step title" value={step.title} onChange={this.changeStepKey('title', sIdx)} />
            </div>
            <div>
              <TextareaAutosize style={{ width: '100%', border: 0 }} required className="form-control" placeholder="Step description" value={step.description} onChange={this.changeStepKey('description', sIdx)} />
            </div>
          </div>
          <div className="col-2">
            <p className="text-right">{sIdx}/{this.state.steps.length - 1} <a onClick={this.removeStep(sIdx)} className={s.stepRevealable}><FontAwesomeIcon icon={faTrashAlt} /></a></p>
            <select
              className={cx('select', s.stepRevealable)}
              style={{ marginRight: 5 }}
              value={step.type}
              onChange={this.changeStepKey('type', sIdx)}
              required
            >
              <option value="radio">Radio</option>
              <option value="checkbox">Checkbox</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </select>
          </div>
        </div>
        {step.type === 'short' && (
        <div className="form-group">
          <input className="form-control" value={step.inputPlaceholder} placeholder="Short answer placeholder" onChange={this.changeStepKey('inputPlaceholder', sIdx)} />
        </div>)}
        {step.type === 'long' && (
        <div className="form-group">
          <textarea className="form-control" value={step.inputPlaceholder} placeholder="Long answer placeholder" onChange={this.changeStepKey('inputPlaceholder', sIdx)} />
        </div>)}
        <Answers
          onNewStepAnswers={this.newStepAnswers}
          sIdx={sIdx}
          type={step.type}
          answers={step.answers}
        />
        <a onClick={() => this.addStep(sIdx)} className={cx('pull-right', s.stepRevealable)}>+ Step</a>
        <hr style={{
 borderTopWidth: 1, marginBottom: 70, marginTop: 70, clear: 'both',
}}
        />
      </div>
    ),
    )
  }

  elems = {}

  removeStep = sIdx => () => {
    if (!global.confirm(`really delete step ${sIdx}?`)) {
      return
    }
    // throws eror if step is involved in logical jumps or variables
    try {
      const nextSteps = updateLogicalJumpsAfterRemoveStep(sIdx, [...this.state.steps])
      nextSteps.splice(sIdx, 1)
      this.setState({ steps: nextSteps })
    } catch (err) {
      global.alert(err)
    }
  }

  addStep = (sIdx) => {
    const nextSteps = updateLogicalJumpsAfterAddStep(sIdx, [...this.state.steps])
    nextSteps.splice(sIdx + 1, 0, freshStep())
    this.setState({ steps: nextSteps })
  }

  addStepAtEnd = () => {
    const nextSteps = [...this.state.steps].concat(freshStep())
    this.setState({ steps: nextSteps }, this.focusLastTitle)
  }

  duplicateStepAtEnd = () => {
    this.setState(({ steps }) => ({
      steps: steps.concat(_.cloneDeep(_.last(this.state.steps))),
    }), this.focusLastTitle)
  }

  duplicateStepAtEndTitleOnly = () => {
    this.setState(({ steps }) => ({
      steps: steps.concat(freshStep({ title: _.last(this.state.steps).title })),
    }), this.focusLastTitle)
  }

  changeStepKey = (key, sIdx) => (evt) => {
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx][key] = evt.target.value
    this.setState({ steps: nextSteps })
  }

  toggleStepKey = (key, sIdx) => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx][key] = !nextSteps[sIdx][key]
    this.setState({ steps: nextSteps })
  }

  save = () => {
    const state = { ...this.state, url: this.props.url }
    cleanEmptyValues(state)
    axios.post('/api/tools/', state)
      .then((res) => {
        global.console.log('saved!', res.data)
        global.alert('saved!')
      })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  del = () => {
    if (!global.confirm('Sure you want to delete this tool?')) {
      return
    }
    axios.delete(`/api/tools/${this.props.url}`)
      .then((res) => {
        global.console.log('deleted!', res.data)
        global.alert('deleted!')
      })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  updateHiddenFields = (hiddenFields) => {
    // TODO :: if an existing field is changed or removed, check if it's used, and prompt warning
    this.setState({ hiddenFields })
  }

  setupHotkeys = (evt) => {
    if (evt.key === 'S' && evt.ctrlKey && evt.shiftKey) {
      this.save()
    }
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

  focusLastTitle = () => this.elems[`${this.state.steps.length - 1}-title`].focus()

  reorderSteps = steps => this.setState({ steps })

  newStepAnswers = (sIdx, answers, cb) => {
    this.setState(({ steps }) => {
      steps[sIdx].answers = answers
      return { steps }
    }, () => cb && cb())
  }
}

export default withStyles(s)(ToolEditor)

function cleanEmptyValues(state) {
  // clear empty values
  state.steps = state.steps.map((step) => {
    if (!step.type.match(/radio|checkbox/)) {
      step.answers = []
      return step
    }
    step.answers = step.answers.map((a) => {
      if (!a.text) { delete a.text }
      if (!a.hasGoToStep) { delete a.hasGoToStep; delete a.goToStepByNum }
      if (!a.isLink) { delete a.isLink; delete a.link }
      if (!a.isLinkNew) { delete a.linkNew }
      return a
    })
    return step
  })
}

function updateLogicalJumpsAfterAddStep(sIdx, nextSteps) {
  return nextSteps.map((step) => {
    if (step.title) {
      step.title = updateVariableReferencesAfterAddStep(step.title, sIdx)
    }
    if (step.description) {
      step.description = updateVariableReferencesAfterAddStep(step.description, sIdx)
    }
    if (step.inputPlaceholder) {
      step.inputPlaceholder = updateVariableReferencesAfterAddStep(step.inputPlaceholder, sIdx)
    }
    step.answers = step.answers.map((a) => {
      if (a.hasGoToStep && (Number(a.goToStepByNum) > sIdx)) {
        a.goToStepByNum = String(Number(a.goToStepByNum) + 1)
      }
      a.text = updateVariableReferencesAfterAddStep(a.text, sIdx)
      return a
    })
    return step
  })
}

function updateLogicalJumpsAfterRemoveStep(sIdx, nextSteps) {
  return nextSteps.map((step) => {
    if (step.title) {
      step.title = updateVariableReferencesAfterRemoveStep(step.title, sIdx)
    }
    if (step.description) {
      step.description = updateVariableReferencesAfterRemoveStep(step.description, sIdx)
    }
    if (step.inputPlaceholder) {
      step.inputPlaceholder = updateVariableReferencesAfterRemoveStep(step.inputPlaceholder, sIdx)
    }
    step.answers = step.answers.map((a) => {
      if (a.hasGoToStep && (Number(a.goToStepByNum) > sIdx)) {
        a.goToStepByNum = String(Number(a.goToStepByNum) - 1)
      }
      if (a.hasGoToStep && (Number(a.goToStepByNum) === sIdx)) {
        throw new Error('cant remove step that has dependencies')
      }
      a.text = updateVariableReferencesAfterRemoveStep(a.text, sIdx)
      return a
    })
    return step
  })
}

function updateVariableReferencesAfterAddStep(str, sIdx) {
  return str.replace(/\${(.*?)}/g, (...args) => {
    const key = args[1]
    if (key[0] === 's') {
      const stepNum = Number(key.slice(1))
      if (stepNum > sIdx) {
        return '${' + `s${stepNum + 1}` + '}' // eslint-disable-line no-useless-concat
      }
    }
    return '${' + key + '}' // eslint-disable-line prefer-template
  })
}

function updateVariableReferencesAfterRemoveStep(str, sIdx) {
  return str.replace(/\${(.*?)}/g, (...args) => {
    const key = args[1]
    if (key[0] === 's') {
      const stepNum = Number(key.slice(1))
      if (stepNum === sIdx) {
        throw new Error('cant remove step that has dependencies')
      }
      if (stepNum > sIdx) {
        return '${' + `s${stepNum - 1}` + '}' // eslint-disable-line no-useless-concat
      }
    }
    return '${' + key + '}' // eslint-disable-line prefer-template
  })
}
