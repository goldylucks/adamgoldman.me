import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios'

import { inputChange, inputToggle } from '../../forms'
import { reorder } from '../../utils'

import s from './BrainToolGenerator.css'

class BrainToolGenerator extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    initialState: {},
    testimony1Text: '',
    testimony1Name: '',
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
      <div className="main-layout relative">
        <h1>Details</h1>
        {this.renderDetails()}

        <hr />

        {this.renderTestimonials()}

        <hr />

        <h1>Steps</h1>
        {this.renderStepsTOC()}

        <hr />

        {this.renderSteps()}

        <a onClick={this.addStep}>+ Step</a>

        <div className={s.controls}>
          <a className={s.control} onClick={this.export}>+</a>
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
        <input className="input" placeholder="title" value={title} onChange={inputChange.call(this, 'title')} />
        <input className="input" placeholder="nick" value={nick} onChange={inputChange.call(this, 'nick')} />
        <input className="input" placeholder="description" value={description} onChange={inputChange.call(this, 'description')} />
        <input className="input" placeholder="credits" value={credits} onChange={inputChange.call(this, 'credits')} />
        <div>
          <input type="checkbox" id="isRtl" value={isRtl} checked={isRtl} onChange={inputToggle.call(this, 'isRtl')} />
          <label htmlFor="isRtl">RTL</label>
        </div>
        <div>
          <input type="checkbox" id="isDraft" value={isDraft} checked={isDraft} onChange={inputToggle.call(this, 'isDraft')} />
          <label htmlFor="isDraft">Draft</label>
        </div>
      </div>
    )
  }

  renderTestimonials() {
    return (
      <div className={s.stepSection}>
        <h3>Testimonies</h3>
        <div>
          <input className="input" value={this.state.testimony1Text} placeholder="text" onChange={inputChange.call(this, 'testimony1Text')} />
          <input className="input" value={this.state.testimony1Name} placeholder="name" onChange={inputChange.call(this, 'testimony1Name')} />
          <input className="input" value={this.state.testimony1Src} placeholder="image src" onChange={inputChange.call(this, 'testimony1Src')} />
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
                          - <a onClick={evt => evt.stopPropagation()} href={`#step-${idx}`}>Step {(idx <= 9 && stepsCount > 9) ? `0${idx}` : idx}/{stepsCount}</a> - {title}
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
    return this.state.steps.map((step, idx) => (
      <div key={idx} id={`step-${idx}`}>
        <div className={s.stepHeader}>
          <h2>Step {idx}</h2>
          <a onClick={this.removeStep(idx)}>X</a>
        </div>

        <div className={s.stepSection}>
          <label>Title</label>
          <input className={`input ${s.input}`} placeholder="title" value={step.title} onChange={this.changeStepKey('title', idx)} />
        </div>

        <div className={s.stepSection}>
          <label>Description</label>
          <textarea required className={`textarea ${s.input}`} placeholder="description ..." value={step.description} onChange={this.changeStepKey('description', idx)} />
        </div>

        <div className={s.stepSection}>
          <input type="checkbox" id={`inputStep${idx}`} value={step.hasInput} checked={step.hasInput} onChange={this.toggleStepKey('hasInput', idx)} />
          <label className={s.inputLabel} htmlFor={`inputStep${idx}`}>Input</label>
          {step.hasInput && (
          <div>
            <input className={`input ${s.input} ${s.inputHalf}`} value={step.inputId} placeholder="Id" onChange={this.changeStepKey('inputId', idx)} />
            <input className={`input ${s.input} ${s.inputHalf}`} value={step.inputPlaceholder} placeholder="Placeholder" onChange={this.changeStepKey('inputPlaceholder', idx)} />
          </div>
            )}
        </div>

        <div className={s.stepSection}>
          <input type="checkbox" id={`signupStep${idx}`} value={step.hasSignup} checked={step.hasSignup} onChange={this.toggleStepKey('hasSignup', idx)} />
          <label className={s.inputLabel} htmlFor={`signupStep${idx}`}>Signup</label>
          {step.hasSignup && (
          <div>
            <input className={`input ${s.input} ${s.inputHalf}`} value={step.listId} placeholder="List Id" onChange={this.changeStepKey('listId', idx)} />
          </div>
            )}
        </div>

        <div className={s.stepHeader}>
          <label>Answers</label>
          <a onClick={this.addAnswer(idx)}>+ answer</a>
        </div>

        {step.answers.map((a, aIdx) => (
          <div style={{ marginLeft: 10 }}>
            <div className={s.stepHeader}>
              <h4>Answer {aIdx}</h4>
              <a onClick={this.removeAnswer(idx, aIdx)}>X</a>
            </div>
            <div style={{ marginLeft: 10 }}>
              <input className={`input ${s.input}`} placeholder={`answer #${aIdx}`} value={a.text} onChange={this.changeAnswerKey('text', idx, aIdx)} />
              <div>
                <input type="checkbox" id={`step-${idx}-answer-${aIdx}-input`} value={a.hasInput} checked={a.hasInput} onChange={this.toggleAnswerKey('hasInput', idx, aIdx)} />
                <label htmlFor={`step-${idx}-answer-${aIdx}-input`}>Has Input</label>
                { a.hasInput && <input placeholder="id" value={a.inputId} onChange={this.changeAnswerKey('inputId', idx, aIdx)} /> }
                { a.hasInput && <input placeholder="value" value={a.inputValue} onChange={this.changeAnswerKey('inputValue', idx, aIdx)} /> }
              </div>
              <div>
                <input type="checkbox" id={`step-${idx}-answer-${aIdx}-hasGoToStepByTitle`} value={a.hasGoToStepByTitle} checked={a.hasGoToStepByTitle} onChange={this.toggleAnswerKey('hasGoToStepByTitle', idx, aIdx)} />
                <label htmlFor={`step-${idx}-answer-${aIdx}-hasGoToStepByTitle`}>Go To Step By Title</label>
                { a.hasGoToStepByTitle && <input placeholder="title" value={a.goToStepByTitle} onChange={this.changeAnswerKey('goToStepByTitle', idx, aIdx)} /> }
              </div>

              <div>
                <input type="checkbox" id={`step-${idx}-answer-${aIdx}-hasResetInputs`} value={a.hasResetInputs} checked={a.hasResetInputs} onChange={this.toggleAnswerKey('hasResetInputs', idx, aIdx)} />
                <label htmlFor={`step-${idx}-answer-${aIdx}-hasResetInputs`}>Reset Inputs</label>
                { a.hasResetInputs && <input placeholder="Inputs to reset" value={a.resetInputs} onChange={this.changeAnswerKey('resetInputs', idx, aIdx)} /> }
              </div>

              <div>
                <input type="checkbox" id={`step-${idx}-answer-${aIdx}-isFbShare`} value={a.isFbShare} checked={a.isFbShare} onChange={this.toggleAnswerKey('isFbShare', idx, aIdx)} />
                <label htmlFor={`step-${idx}-answer-${aIdx}-isFbShare`}>FB Share</label>
              </div>

              <div>
                <input type="checkbox" id={`step-${idx}-answer-${aIdx}-isLink`} value={a.isLink} checked={a.isLink} onChange={this.toggleAnswerKey('isLink', idx, aIdx)} />
                <label htmlFor={`step-${idx}-answer-${aIdx}-isLink`}>Link</label>
                { a.isLink && <input placeholder="path" value={a.link} onChange={this.changeAnswerKey('link', idx, aIdx)} /> }
              </div>

              <div>
                <input type="checkbox" id={`step-${idx}-answer-${aIdx}-isLinkNew`} value={a.isLinkNew} checked={a.isLinkNew} onChange={this.toggleAnswerKey('isLinkNew', idx, aIdx)} />
                <label htmlFor={`step-${idx}-answer-${aIdx}-isLinkNew`}>Link New tab</label>
                { a.isLinkNew && <input placeholder="path" value={a.linkNew} onChange={this.changeAnswerKey('linkNew', idx, aIdx)} /> }
              </div>

            </div>
            { step.answers.length - 1 > aIdx && <hr className={s.answersHr} />}
          </div>
          ))}
        <hr />
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
      hasInput: false,
      inputId: '',
      inputValue: '',
      hasResetInputs: '',
      resetInputs: '',
      hasGoToStepByTitle: false,
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

  export = () => {
    const state = { ...this.state }
    state.url = this.props.url
    cleanEmptyValues(state)
    addInputsToInitialState(state)
    axios.post('/api/tools/', state)
      .then(res => console.log('saved!', res.data))
      .catch(err => console.error(err))
  }
}

export default withStyles(s)(BrainToolGenerator)

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
      if (!a.hasGoToStepByTitle) { delete a.hasGoToStepByTitle }
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
    background: isDragging ? 'lightgreen' : 'grey',
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
