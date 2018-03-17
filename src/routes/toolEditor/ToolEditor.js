import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios'
import cx from 'classnames'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane'
import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt'
import faSave from '@fortawesome/fontawesome-free-regular/faSave'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'
import faExclamation from '@fortawesome/fontawesome-free-solid/faExclamation'
import TextareaAutosize from 'react-autosize-textarea'
import { Typeahead } from 'react-bootstrap-typeahead'
import cloneDeep from 'lodash.clonedeep'

import { inputChange, inputToggle } from '../../forms'
import { reorder, scrollToElem } from '../../utils'

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
          {this.renderTOC()}
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

  renderTOC() {
    const stepsCount = this.state.steps.length - 1
    return (
      <div style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
        <h2>TOC</h2>
        <a onClick={() => scrollToElem(document.querySelector('html'), 0, 300)}>Details</a>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.steps.map(({ title }, sIdx) => (
                  <Draggable key={sIdx} draggableId={sIdx}>
                    {(providedInner, snapshotInner) => (
                      <div>
                        <div
                          key={sIdx}
                          ref={providedInner.innerRef}
                          style={getItemStyle(
                            providedInner.draggableStyle,
                            snapshotInner.isDragging,
                          )}
                          {...providedInner.dragHandleProps}
                        >
                          <a onClick={() => scrollToElem(document.querySelector('html'), document.querySelector(`#step-${sIdx}`).getBoundingClientRect().top - document.body.getBoundingClientRect().top, 300)}>{(sIdx <= 9 && stepsCount > 9) ? `0${sIdx}` : sIdx}/{stepsCount}</a> - {title}
                        </div>
                        {providedInner.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }

  renderSteps() {
    return this.state.steps.map((step, sIdx) => (
      <div key={sIdx} id={`step-${sIdx}`} className={s.step}>
        <div className="row" style={{ marginBottom: 20 }}>
          <div className="col-10">
            <input style={{ width: '100%', border: 0, marginBottom: 20 }} ref={(el) => { this.elems[`${sIdx}-title`] = el }} className="h2" placeholder="Step title" value={step.title} onChange={this.changeStepKey('title', sIdx)} />
            <TextareaAutosize style={{ width: '100%', border: 0 }} required className="form-control" placeholder="Step description" value={step.description} onChange={this.changeStepKey('description', sIdx)} />
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

        {this.renderMultipleAnswers(sIdx)}
        <a onClick={() => this.addStep(sIdx)} className={cx('pull-right', s.stepRevealable)}>+ Step</a>
        <hr style={{
 borderTopWidth: 1, marginBottom: 70, marginTop: 70, clear: 'both',
}}
        />
      </div>
    ),
    )
  }

  renderMultipleAnswers(sIdx) {
    const step = this.state.steps[sIdx]
    if (!step.type) {
      return null
    }
    if (!step.type.match(/radio|checkbox/)) {
      return null
    }
    return (
      <div>
        {step.answers.map((a, aIdx) => (
          <div>
            <div className={cx('row', s.answer)}>
              <div className="col-10">
                <input
                  onKeyPress={(evt) => { this.answerKeyPress(evt, sIdx, aIdx) }}
                  ref={(el) => { this[`step-${sIdx}-answer-${aIdx}`] = el }}
                  className="btn btn-primary btn-block text-left"
                  placeholder={`answer #${aIdx}`}
                  value={a.text}
                  onChange={this.changeAnswerKey('text', sIdx, aIdx)}
                />
              </div>
              <div className={cx('col-2 text-right', s.answerActions)}>
                <FontAwesomeIcon onClick={this.removeAnswer(sIdx, aIdx)} icon={faTrashAlt} />
              </div>
              <div className={cx('col-10', s.answerOptionCol, { [s.isVisible]: a.hasGoToStep || a.isLink || a.isLinkNew || a.isConcern })}>

                {[{ toggleId: 'hasGoToStep', icon: faPaperPlane, fieldId: 'goToStepByNum' }, { toggleId: 'isLink', icon: faLink, fieldId: 'link' }, { toggleId: 'isLinkNew', icon: faExternalLinkAlt, fieldId: 'linkNew' }, { toggleId: 'isConcern', icon: faExclamation, fieldId: 'concern' }]
              .map(({ toggleId, icon, fieldId }) => (
                <div className={s.answerOption}>
                  <div
                    className={s.answerOptionToggle}
                    onClick={this.toggleAnswerKey(toggleId, sIdx, aIdx)}
                  >
                    <FontAwesomeIcon icon={icon} />
                  </div>
                  <input
                    type="text"
                    className={cx(s.answerOptionField, { [s.isVisible]: a[toggleId] })}
                    id={fieldId}
                    placeholder={fieldId}
                    value={a[fieldId]}
                    onChange={this.changeAnswerKey(fieldId, sIdx, aIdx)}
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
          ))}
        <div className={cx('col-10', s.stepRevealable)} style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id={`step-${sIdx}-other-toggle`} checked={this.stepHasOtherAnswer(sIdx)} onChange={() => this.toggleStepHasOtherAnswer(sIdx)} />
            <label className="form-check-label" forhtml={`step-${sIdx}-other-toggle`}>Other</label>
          </div>
          <a onClick={() => this.setAnswersTemplate(sIdx)}>Template A</a>
          <a onClick={this.addAnswer(sIdx)}>+ answer</a>
        </div>
      </div>
    )
  }

  elems = {}

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const steps = reorder(this.state.steps, result.source.index, result.destination.index)
    this.setState({ steps })
  }

  removeStep = sIdx => () => {
    if (!global.confirm(`really delete step ${sIdx}?`)) {
      return
    }
    let nextSteps = [...this.state.steps]
    try {
      nextSteps = updateLogicalJumpsAfterRemoveStep(sIdx, nextSteps)
      nextSteps.splice(sIdx, 1)
      this.setState({ steps: nextSteps })
    } catch (err) {
      global.alert(err)
    }
  }

  addStep = (sIdx) => {
    let nextSteps = [...this.state.steps]
    nextSteps = updateLogicalJumpsAfterAddStep(sIdx, nextSteps)
    nextSteps.splice(sIdx + 1, 0, freshStep())
    this.setState({ steps: nextSteps })
  }

  addStepAtEnd = () => {
    const nextSteps = [...this.state.steps]
    nextSteps.push(freshStep())
    this.setState({ steps: nextSteps }, () => this.elems[`${this.state.steps.length - 1}-title`].focus())
  }

  duplicateStepAtEnd = () => {
    const nextSteps = [...this.state.steps]
    nextSteps.push(cloneDeep(this.state.steps[this.state.steps.length - 1]))
    this.setState({ steps: nextSteps }, () => this.elems[`${this.state.steps.length - 1}-title`].focus())
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

  changeAnswerKey = (key, sIdx, aIdx) => (evt) => {
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers[aIdx][key] = evt.target.value
    this.setState({ steps: nextSteps })
  }

  toggleAnswerKey = (key, sIdx, aIdx) => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers[aIdx][key] = !nextSteps[sIdx].answers[aIdx][key]
    this.setState({ steps: nextSteps })
  }

  addAnswer = sIdx => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers.push(freshAnswer())
    this.setState({ steps: nextSteps })
  }

  removeAnswer = (sIdx, aIdx) => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers.splice(aIdx, 1)
    this.setState({ steps: nextSteps })
  }

  answerKeyPress = (evt, sIdx, aIdx) => {
    if (evt.key !== 'Enter') {
      return
    }
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers.splice(aIdx + 1, 0, freshAnswer())
    evt.preventDefault()
    this.setState({ steps: nextSteps }, () => this[`step-${sIdx}-answer-${aIdx + 1}`].focus())
  }

  save = () => {
    const state = { ...this.state }
    state.url = this.props.url
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
  }

  stepHasOtherAnswer(sIdx) {
    if (!this.state.steps[sIdx].answers) {
      global.console.warn('missing answers on step ', sIdx)
      return false
    }
    return !!this.state.steps[sIdx].answers.find(a => a.isOther)
  }

  toggleStepHasOtherAnswer(sIdx) {
    const nextSteps = [...this.state.steps]
    if (this.stepHasOtherAnswer(sIdx)) {
      nextSteps[sIdx].answers.pop()
    } else {
      nextSteps[sIdx].answers.push(freshAnswer({ isOther: true, text: 'Other' }))
    }
    this.setState({ steps: nextSteps })
  }

  setAnswersTemplate(sIdx) {
    if (!global.confirm('set answers template?')) {
      return
    }
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers = [
      freshAnswer({ text: 'I feel MUCH better' }),
      freshAnswer({ text: 'I feel better' }),
      freshAnswer({ text: 'I don’t feel a change in this step' }),
      freshAnswer({ text: 'I feel worse', isConcern: true, concern: 'feel worse' }),
    ]
    this.setState({ steps: nextSteps })
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

const grid = 2

function getItemStyle(draggableStyle, isDragging) {
  return {
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : '',
    border: '1px solid #000',
    // styles we need to apply on draggables
    ...draggableStyle,
  }
}

function getListStyle(isDraggingOver) {
  return {
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
  }
}

function freshStep() {
  return {
    title: '',
    description: '',
    type: 'radio',
    inputPlaceholder: '',
    answers: [freshAnswer()],
  }
}

function freshAnswer(opts) {
  return Object.assign({
    isOther: false,
    text: '',
    hasGoToStep: false,
    goToStepByNum: '',
    isLink: false,
    link: '',
    isLinkNew: false,
    linkNew: '',
    isConcern: false,
    concern: '',
  }, opts)
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
