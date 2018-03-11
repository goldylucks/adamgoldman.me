import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios'
import cx from 'classnames'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faKeyboard from '@fortawesome/fontawesome-free-regular/faKeyboard'
import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane'
import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt'
import faSave from '@fortawesome/fontawesome-free-regular/faSave'
import faEraser from '@fortawesome/fontawesome-free-solid/faEraser'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'
import TextareaAutosize from 'react-autosize-textarea'
import { Typeahead } from 'react-bootstrap-typeahead'

import { inputChange, inputToggle } from '../../forms'
import { reorder, scrollToElem } from '../../utils'

import s from './TutorialGenerator.css'

class TutorialGenerator extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    initialState: {},
    isDraft: false,
    title: '',
    description: '',
    nick: '',
    credits: '',
    steps: [stepInitialState()],
    hiddenFields: [],
  }

  componentWillMount() {
    if (this.props.data) {
      this.setState(this.props.data)
    }
  }

  render() {
    return (
      <div style={{ padding: 10 }}>
        <div className="clearfix" style={{ width: '60%', float: 'left' }}>
          {this.renderDetails()}
          <hr />
          <h1 id="steps" className="text-center">Steps</h1>
          {this.renderSteps()}
          <a onClick={this.addStepAtEnd}>+ Step</a>
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

  promptVariable = (evt) => {
    if (evt.key !== '@') {
      return
    }
    // todo ::  http://jsfiddle.net/dandv/aFPA7/
    this.setState({
      inputLeft: this.widthMeasureElem.offsetWidth,
      inputTop: 0,
    })
  }

  renderDetails() {
    const {
      title, nick, description, credits, isDraft,
    } = this.state
    return (
      <div>
        <h1 id="details" className="text-center">Details</h1>
        <div className="form-group">
          Title
          <input className="form-control" placeholder="Title" value={title} onChange={inputChange.call(this, 'title')} />
        </div>
        <div className="form-group">
          Nick
          <input className="form-control" placeholder="Nick" value={nick} onChange={inputChange.call(this, 'nick')} />
        </div>
        <div className="form-group">
          Description
          <div style={{ position: 'relative' }}>
            <input onKeyPress={this.promptVariable} className="form-control" placeholder="Description" value={description} onChange={inputChange.call(this, 'description')} />
            <div ref={(el) => { this.widthMeasureElem = el }} className="form-control" style={{ color: 'blue', display: 'inline-block', width: 'auto' }}>{description}</div>
            <div
              ref={(el) => { this.variableFiller = el }}
              style={{
                left: this.state.inputLeft,
                top: this.state.inputTop,
                position: 'absolute',
                padding: '.375rem 0',
                fontSize: '1rem',
                lineHeight: 1.5,
              }}
            >name
            </div>
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
      <div key={sIdx} id={`step-${sIdx}`}>
        <div className="row">
          <div className="col-10">
            <input style={{ width: '100%', border: 0 }} className="h2" placeholder="Step title" value={step.title} onChange={this.changeStepKey('title', sIdx)} />
            <TextareaAutosize style={{ width: '100%', border: 0 }} required className="form-control" placeholder="Step description" value={step.description} onChange={this.changeStepKey('description', sIdx)} />
          </div>
          <div className="col-2">
            <p className="text-right">{sIdx}/{this.state.steps.length - 1} <a onClick={this.removeStep(sIdx)}><FontAwesomeIcon icon={faTrashAlt} /></a></p>
            <select
              className="select"
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
        <a onClick={() => this.addStep(sIdx)} className="pull-right">+ Step</a>
        <hr style={{
 borderTopWidth: 1, marginBottom: 10, marginTop: 10, clear: 'both',
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
                <FontAwesomeIcon
                  onClick={this.toggleAnswerSettings(sIdx, aIdx)}
                  icon={faCog}
                  className={cx(s.answerSettingsToggle, { [s.isActive]: a.showSettings })}
                />
                <FontAwesomeIcon onClick={this.removeAnswer(sIdx, aIdx)} icon={faTrashAlt} />
              </div>
            </div>
            {a.showSettings && [{ id: 'hasGoToStep', icon: faPaperPlane }, { id: 'isSetInput', icon: faKeyboard }, { id: 'hasResetInputs', icon: faEraser }, { id: 'isLink', icon: faLink }, { id: 'link', icon: faExternalLinkAlt }]
              .map(({ id, icon }) => (
                <div className="form-check form-check-inline">
                  <label htmlFor={`step-${sIdx}-answer-${aIdx}-${id}`} className="form-check-label">
                    <input type="checkbox" className="form-check-input" id={`step-${sIdx}-answer-${aIdx}-${id}`} value={a[id]} checked={a[id]} onChange={this.toggleAnswerKey(id, sIdx, aIdx)} />
                    <FontAwesomeIcon icon={icon} />
                  </label>
                </div>
                ))}
            <div className="form-group">
              { a.isSetInput && <input placeholder="Input id" value={a.inputId} onChange={this.changeAnswerKey('inputId', sIdx, aIdx)} /> }
              { a.isSetInput && <input placeholder="Input value" value={a.inputValue} onChange={this.changeAnswerKey('inputValue', sIdx, aIdx)} /> }

              { a.isSetInput && (
                <label htmlFor={`step-${sIdx}-answer-${aIdx}-test`} className="form-check-label">
                  <input type="radio" className="form-check-input" id={`step-${sIdx}-answer-${aIdx}-test`} onChange={() => console.log('unselect all the others')} />
                  Set for test
                </label>
              )
              }
            </div>
            <div className="form-group">
              { a.hasGoToStep && <input placeholder="title" value={a.goToStepByTitle} onChange={this.changeAnswerKey('goToStepByTitle', sIdx, aIdx)} /> }
            </div>
            <div className="form-group">
              { a.hasResetInputs && <input placeholder="Inputs to reset" value={a.resetInputs} onChange={this.changeAnswerKey('resetInputs', sIdx, aIdx)} /> }
            </div>
            <div className="form-group">
              { a.hasAlert && <input placeholder="Alert message" value={a.alert} onChange={this.changeAnswerKey('alert', sIdx, aIdx)} /> }
            </div>
            <div className="form-group">
              { a.isLink && <input placeholder="path" value={a.link} onChange={this.changeAnswerKey('link', sIdx, aIdx)} /> }
            </div>
            <div className="form-group">
              { a.isLinkNew && <input placeholder="path" value={a.linkNew} onChange={this.changeAnswerKey('linkNew', sIdx, aIdx)} /> }
            </div>
          </div>
          ))}
        <a onClick={this.addAnswer(sIdx)}>+ answer</a>
      </div>
    )
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const steps = reorder(
      this.state.steps,
      result.source.index,
      result.destination.index,
    )

    this.setState({
      steps,
    })
  }

  removeStep = sIdx => () => {
    if (!global.confirm(`really delete step ${this.state.steps.title}?`)) {
      return
    }
    const nextSteps = [...this.state.steps]
    nextSteps.splice(sIdx, 1)
    this.setState({ steps: nextSteps })
  }

  addStep = (sIdx) => {
    const nextSteps = [...this.state.steps]
    nextSteps.splice(sIdx + 1, 0, stepInitialState())
    this.setState({ steps: nextSteps })
  }

  addStepAtEnd = () => {
    const nextSteps = [...this.state.steps]
    nextSteps.push(stepInitialState())
    this.setState({ steps: nextSteps })
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
    nextSteps[sIdx].answers.push(answerInitialState())
    this.setState({ steps: nextSteps })
  }

  removeAnswer = (sIdx, aIdx) => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers.splice(aIdx, 1)
    this.setState({ steps: nextSteps })
  }

  toggleAnswerSettings = (sIdx, aIdx) => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers[aIdx].showSettings = !nextSteps[sIdx].answers[aIdx].showSettings
    this.setState({ steps: nextSteps })
  }

  answerKeyPress = (evt, sIdx, aIdx) => {
    if (evt.key !== 'Enter') {
      return
    }
    const nextSteps = [...this.state.steps]
    nextSteps[sIdx].answers.splice(aIdx + 1, 0, answerInitialState())
    evt.preventDefault()
    this.setState({ steps: nextSteps }, () => this[`step-${sIdx}-answer-${aIdx + 1}`].focus())
  }

  save = () => {
    const state = { ...this.state }
    state.url = this.props.url
    cleanEmptyValues(state)
    addInputsToInitialState(state)
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
    axios.post('/api/tools/', { url: this.props.url })
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
}

export default withStyles(s)(TutorialGenerator)

function cleanEmptyValues(state) {
  // clear empty values
  state.steps = state.steps.map((step) => {
    step.answers = step.answers.map((a) => {
      if (!a.text) { delete a.text }
      if (!a.isSetInput) { delete a.isSetInput }
      if (!a.inputId) { delete a.inputId }
      if (!a.inputValue) { delete a.inputValue }
      if (!a.hasResetInputs) { delete a.hasResetInputs }
      if (!a.resetInputs) { delete a.resetInputs }
      if (!a.hasGoToStep) { delete a.hasGoToStep }
      if (!a.goToStepByTitle) { delete a.goToStepByTitle }
      if (!a.isFbShare) { delete a.isFbShare }
      if (!a.isLink) { delete a.isLink }
      if (!a.link) { delete a.link }
      return a
    })
    return step
  })
}

function addInputsToInitialState(state) {
  state.steps.filter(step => step.inputId).forEach((step) => { state.initialState[step.inputId] = '' })
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

function stepInitialState() {
  return {
    title: '',
    description: '',
    type: 'radio',
    inputId: '',
    inputPlaceholder: '',
    answers: [answerInitialState()],
  }
}

function answerInitialState() {
  return {
    showSettings: false,
    text: '',
    alert: '',
    hasAlert: false,
    isSetInput: false,
    inputId: '',
    inputValue: '',
    hasResetInputs: '',
    resetInputs: '',
    hasGoToStep: false,
    goToStepByTitle: '',
    isFbShare: false,
    isLink: false,
    link: '',
    isLinkNew: false,
    linkNew: '',
  }
}
