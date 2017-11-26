import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import { inputChange, inputToggle } from '../../forms'

import s from './BrainToolGenerator.css'

class BrainToolGenerator extends React.Component {
  state = {
    url: '',
    initialState: {},
    title: '',
    description: '',
    nick: '',
    credits: '',
    isRtl: false,
    steps: [],
  }

  componentDidMount() {
    const state = localStorage.getItem('generatorState')
    if (state) {
      this.setState(JSON.parse(state)) // eslint-disable-line react/no-did-mount-set-state
    }
  }

  render() {
    const {
      title, nick, description, isRtl, credits, url,
    } = this.state
    return (
      <div className="main-layout relative">
        <h1>Details</h1>
        <input className="input" placeholder="url" value={url} onChange={inputChange.call(this, 'url')} />
        <input className="input" placeholder="title" value={title} onChange={inputChange.call(this, 'title')} />
        <input className="input" placeholder="nick" value={nick} onChange={inputChange.call(this, 'nick')} />
        <input className="input" placeholder="description" value={description} onChange={inputChange.call(this, 'description')} />
        <input className="input" placeholder="credits" value={credits} onChange={inputChange.call(this, 'credits')} />
        <div>
          <input type="checkbox" id="isRtl" value={isRtl} checked={isRtl} onChange={inputToggle.call(this, 'isRtl')} />
          <label htmlFor="isRtl">RTL</label>
        </div>

        <hr />

        <h1>Steps</h1>
        {this.renderStepsTOC()}
        {this.renderSteps()}

        <a onClick={this.addStep}>+ Step</a>

        <div className={s.controls}>
          <a className={s.control} onClick={this.export}>+</a>
          <a className={s.control} onClick={this.saveToLocalstorage}>S</a>
          <a className={s.control} onClick={this.RemoveFromLocalstorage}>D</a>
        </div>
      </div>
    )
  }

  renderStepsTOC() {
    const stepsCount = this.state.steps.length - 1
    return (
      <div>
        <h2>TOC</h2>
        <ul>
          {this.state.steps.map(({ title }, idx) => (
            <li>
              <a href={`#step-${idx}`}>Step {(idx <= 9 && stepsCount > 9) ? `0${idx}` : idx}/{stepsCount}</a> - {title}
            </li>
          ))}
        </ul>
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
          <div>
            <input type="checkbox" id={`step-${idx}-hasDynamicTitle`} value={step.hasDynamicTitle} checked={step.hasDynamicTitle} onChange={this.toggleStepKey('hasDynamicTitle', idx)} />
            <label htmlFor={`step-${idx}-hasDynamicTitle`}>Dynamic</label>
            {step.hasDynamicTitle && <input placeholder="var1, var2 ..." value={step.titleDynamics} onChange={this.changeStepKey('titleDynamics', idx)} />}
          </div>
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

            </div>
            <hr className={s.answersHr} />
          </div>
          ))}
        <hr />
      </div>
    ),
    )
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
      hasDynamicTitle: false,
      titleDynamics: '',
      description: '',
      hasInput: false,
      inputId: '',
      inputPlaceholder: '',
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
    addDynamicSupport(state)
    cleanEmptyValues(state)
    addInputsToInitialState(state)
    axios.post('/api/tools/', state)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  saveToLocalstorage = () => {
    localStorage.setItem('generatorState', JSON.stringify(this.state, null, 2))
  }

  RemoveFromLocalstorage = () => {
    localStorage.removeItem('generatorState')
  }
}

export default withStyles(s)(BrainToolGenerator)

function cleanEmptyValues(state) {
  /* eslint-disable no-param-reassign */
  if (!state.isRtl) { delete state.isRtl }
  // clear empty values
  state.steps = state.steps.map((step) => {
    if (!step.inputId) { delete step.inputId }
    if (!step.inputPlaceholder) { delete step.inputPlaceholder }
    delete step.hasDynamicTitle
    delete step.titleDynamics

    step.answers = step.answers.map((a) => {
      delete a.hasResetInputs
      delete a.hasGoToStepByTitle
      delete a.isLink
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

function addDynamicSupport(state) {
  state.steps = state.steps.map((step) => {
    if (step.hasDynamicTitle) {
      step.title = new Function(`{ ${step.titleDynamics} }`, `return ${step.title}`) // eslint-disable-line no-new-func
    }
    return step
  })
}
