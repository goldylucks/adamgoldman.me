import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios'

import { inputChange, inputToggle } from '../../forms'
import { reorder } from '../../utils'

import s from './TutorialGenerator.css'

class TutorialGenerator extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    initialState: {},
    testimony1Text: '',
    testimony1Name: '',
    testimony1NameMeta: '',
    testimony1Src: '',
    isDraft: false,
    title: '',
    description: '',
    nick: '',
    credits: '',
    isRtl: false,
    steps: [],
  }

  componentWillMount() {
    if (this.props.data) {
      this.setState(this.props.data)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="mainheading">
          <h1 className="posttitle">Tutorial Generator</h1>
        </div>

        <h2>Details</h2>
        {this.renderDetails()}

        <hr />

        {this.renderTestimonials()}

        <hr />

        <h2>Steps</h2>
        {this.renderStepsTOC()}

        <hr />

        {this.renderSteps()}

        <a onClick={this.addStep}>+ Step</a>

        <div className={s.controls}>
          <a className={s.control} onClick={this.save}>Save</a>
        </div>
      </div>
    )
  }

  renderDetails() {
    const {
      title, nick, description, isRtl, credits, isDraft,
    } = this.state
    return (
      <div>
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
          <input className="form-control" placeholder="Description" value={description} onChange={inputChange.call(this, 'description')} />
        </div>
        <div className="form-group">
          Credits
          <input className="form-control" placeholder="Credits" value={credits} onChange={inputChange.call(this, 'credits')} />
        </div>
        <div className="form-group">
          <input type="checkbox" id="isRtl" value={isRtl} checked={isRtl} onChange={inputToggle.call(this, 'isRtl')} />
          <label htmlFor="isRtl">RTL</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="isDraft" value={isDraft} checked={isDraft} onChange={inputToggle.call(this, 'isDraft')} />
          <label htmlFor="isDraft">Draft</label>
        </div>
      </div>
    )
  }

  renderTestimonials() {
    return (
      <div className="form-group">
        <h3>Testimonies</h3>
        <div>
          <input className="form-control" value={this.state.testimony1Text} placeholder="text" onChange={inputChange.call(this, 'testimony1Text')} />
          <input className="form-control" value={this.state.testimony1Name} placeholder="name" onChange={inputChange.call(this, 'testimony1Name')} />
          <input className="form-control" value={this.state.testimony1NameMeta} placeholder="name meta" onChange={inputChange.call(this, 'testimony1NameMeta')} />
          <input className="form-control" value={this.state.testimony1Src} placeholder="image src" onChange={inputChange.call(this, 'testimony1Src')} />
        </div>
      </div>
    )
  }

  renderStepsTOC() {
    const stepsCount = this.state.steps.length - 1
    return (
      <div>
        <h2>TOC</h2>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.steps.map(({ title }, idx) => (
                  <Draggable key={idx} draggableId={idx}>
                    {(providedInner, snapshotInner) => (
                      <div>
                        <div
                          key={idx}
                          ref={providedInner.innerRef}
                          style={getItemStyle(
                            providedInner.draggableStyle,
                            snapshotInner.isDragging,
                          )}
                          {...providedInner.dragHandleProps}
                        >
                          <a onClick={evt => evt.stopPropagation()} href={`#step-${idx}`}>Step {(idx <= 9 && stepsCount > 9) ? `0${idx}` : idx}/{stepsCount}</a> - {title}
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
          <div className="col"><h2>Step {sIdx}</h2></div>
          <div className="col">
            <input type="checkbox" id={`inputStep${sIdx}`} value={step.hasInput} checked={step.hasInput} onChange={this.toggleStepKey('hasInput', sIdx)} />
            <label className={s.inputLabel} htmlFor={`inputStep${sIdx}`}>Input</label>
          </div>
          <div className="col">
            <input type="checkbox" id={`signupStep${sIdx}`} value={step.hasSignup} checked={step.hasSignup} onChange={this.toggleStepKey('hasSignup', sIdx)} />
            <label className={s.inputLabel} htmlFor={`signupStep${sIdx}`}>Signup</label>
          </div>
          <div className="col"><a onClick={this.removeStep(sIdx)}>X</a></div>
        </div>
        <div className="form-group row">
          <label htmlFor={`step-${sIdx}-title`} className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input className="form-control" id={`step-${sIdx}-title`} placeholder="Title" value={step.title} onChange={this.changeStepKey('title', sIdx)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor={`step-${sIdx}-description`} className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea style={{ minHeight: 200 }} id={`step-${sIdx}-description`} required className="form-control" placeholder="Description" value={step.description} onChange={this.changeStepKey('description', sIdx)} />
          </div>
        </div>
        <div className="form-group">
          {step.hasInput && (
          <div>
            <input className={`form-control ${s.inputHalf}`} value={step.inputId} placeholder="Id" onChange={this.changeStepKey('inputId', sIdx)} />
            <input className={`form-control ${s.inputHalf}`} value={step.inputPlaceholder} placeholder="Placeholder" onChange={this.changeStepKey('inputPlaceholder', sIdx)} />
          </div>
            )}
        </div>

        <div className="form-group">
          {step.hasSignup && (
          <div>
            <input className={`form-control ${s.inputHalf}`} value={step.listId} placeholder="List Id" onChange={this.changeStepKey('listId', sIdx)} />
          </div>
            )}
        </div>

        <div className={s.stepHeader}>
          <h4>Answers</h4>
          <a onClick={this.addAnswer(sIdx)}>+ answer</a>
        </div>

        {step.answers.map((a, aIdx) => (
          <div style={{ marginLeft: 10 }}>
            <div className="form-row">
              <div className="col-auto">
                <label htmlFor={`step-${sIdx}-answer-${aIdx}`} className="col-form-label"><strong>Answer {aIdx}</strong></label>
              </div>
              <div className="col-8">
                <input id={`step-${sIdx}-answer-${aIdx}`} className="form-control" placeholder={`answer #${aIdx}`} value={a.text} onChange={this.changeAnswerKey('text', sIdx, aIdx)} />
              </div>
              <div className="col-auto">
                <a onClick={this.removeAnswer(sIdx, aIdx)}>X</a>
              </div>
            </div>
            {['hasInput', 'hasGoToStep', 'hasResetInputs', 'isFbShare', 'isLink', 'isLinkNew']
              .map(aOption => (
                <div className="form-check form-check-inline">
                  <label htmlFor={`step-${sIdx}-answer-${aIdx}-${aOption}`} className="form-check-label">
                    <input type="checkbox" className="form-check-input" id={`step-${sIdx}-answer-${aIdx}-${aOption}`} value={a[aOption]} checked={a[aOption]} onChange={this.toggleAnswerKey(aOption, sIdx, aIdx)} />
                    {aOption}
                  </label>
                </div>
                ))}
            <div className="form-group">
              { a.hasInput && <input placeholder="id" value={a.inputId} onChange={this.changeAnswerKey('inputId', sIdx, aIdx)} /> }
              { a.hasInput && <input placeholder="value" value={a.inputValue} onChange={this.changeAnswerKey('inputValue', sIdx, aIdx)} /> }
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
            { step.answers.length - 1 > aIdx && <hr className={s.answersHr} />}
          </div>
          ))}
        <hr style={{ borderTopWidth: 10, marginBottom: 40 }} />
      </div>
    ),
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

  removeStep = idx => () => {
    const nextSteps = [...this.state.steps]
    nextSteps.splice(idx, 1)
    this.setState({ steps: nextSteps })
  }

  addStep = () => {
    const nextSteps = [...this.state.steps]
    nextSteps.push({
      title: '',
      description: '',
      hasInput: false,
      inputId: '',
      inputPlaceholder: '',
      hasSignup: false,
      listId: '',
      answers: [],
    })
    this.setState({ steps: nextSteps })
  }

  changeStepKey = (key, idx) => (evt) => {
    const nextSteps = [...this.state.steps]
    nextSteps[idx][key] = evt.target.value
    this.setState({ steps: nextSteps })
  }

  toggleStepKey = (key, idx) => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[idx][key] = !nextSteps[idx][key]
    this.setState({ steps: nextSteps })
  }

  changeAnswerKey = (key, idx, aIdx) => (evt) => {
    const nextSteps = [...this.state.steps]
    nextSteps[idx].answers[aIdx][key] = evt.target.value
    this.setState({ steps: nextSteps })
  }

  toggleAnswerKey = (key, idx, aIdx) => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[idx].answers[aIdx][key] = !nextSteps[idx].answers[aIdx][key]
    this.setState({ steps: nextSteps })
  }

  addAnswer = idx => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[idx].answers.push({
      text: '',
      alert: '',
      hasAlert: false,
      hasInput: false,
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
    })
    this.setState({ steps: nextSteps })
  }

  removeAnswer = (idx, aIdx) => () => {
    const nextSteps = [...this.state.steps]
    nextSteps[idx].answers.splice(aIdx, 1)
    this.setState({ steps: nextSteps })
  }

  save = () => {
    const state = { ...this.state }
    state.url = this.props.url
    cleanEmptyValues(state)
    addInputsToInitialState(state)
    axios.post('/api/tools/', state)
      .then((res) => {
        console.log('saved!', res.data)
        alert('saved!')
      })
      .catch((err) => {
        console.error(err)
        alert(err.message)
      })
  }
}

export default withStyles(s)(TutorialGenerator)

function cleanEmptyValues(state) {
  if (!state.isRtl) { delete state.isRtl }
  // clear empty values
  state.steps = state.steps.map((step) => {
    if (!step.hasInput) {
      delete step.inputId
      delete step.inputPlaceholder
    }

    if (!step.hasSignup) {
      delete step.listId
    }

    step.answers = step.answers.map((a) => {
      if (!a.text) { delete a.text }
      if (!a.hasInput) { delete a.hasInput }
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
