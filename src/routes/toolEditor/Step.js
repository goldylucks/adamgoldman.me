import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import cx from 'classnames'
import TextareaAutosize from 'react-autosize-textarea'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane'
import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt'
import _ from 'lodash'

import s from './ToolEditor.css'
import Answers from './Answers'
import AnswerOption from './AnswerOption'

class Step extends Component {
  static propTypes = {
    sIdx: PropTypes.number.isRequired,
    step: PropTypes.object.isRequired,
    stepCount: PropTypes.number.isRequired,
    onUpdateStep: PropTypes.func.isRequired,
    onRemoveStep: PropTypes.func.isRequired,
    onAddStep: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props.step, nextProps.step)
    || this.props.sIdx !== nextProps.sIdx
    || this.props.stepCount !== nextProps.stepCount
  }

  render() {
    const { step, sIdx, stepCount } = this.props
    return (
      <div key={sIdx} id={`step-${sIdx}`} className={s.step}>
        <div className="row" style={{ marginBottom: 20 }}>
          <div className="col-10">
            <div>
              <input style={{ width: '100%', border: 0, marginBottom: 20 }} ref={(el) => { this.elems[`${sIdx}-title`] = el }} className="h2" placeholder="Step title" value={step.title} onChange={this.changeStepKey('title')} />
            </div>
            <div style={{ marginBottom: 10 }}>
              <TextareaAutosize style={{ width: '100%', border: 0 }} required className="form-control" placeholder="Step description" value={step.description} onChange={this.changeStepKey('description')} />
            </div>
            <div className={cx(s.stepRevealable, { [s.isVisible]: step.notes })}>
              <TextareaAutosize style={{ width: '100%', border: 0 }} required className="form-control text-muted tool-note" placeholder="Step notes" value={step.notes} onChange={this.changeStepKey('notes')} />
            </div>
          </div>
          <div className="col-2">
            <p className="text-right">{sIdx}/{stepCount} <a onClick={this.removeStep} className={s.stepRevealable}><FontAwesomeIcon icon={faTrashAlt} /></a></p>
            <select
              className={cx('select', s.stepRevealable)}
              style={{ marginRight: 5 }}
              value={step.type}
              onChange={this.changeStepKey('type')}
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
        <div className={cx('form-group', s.answer)}>
          <input className="form-control" value={step.inputPlaceholder} placeholder="Short answer placeholder" onChange={this.changeStepKey('inputPlaceholder')} />
          <div className={cx('col-10', s.answerOptionCol, { [s.isVisible]: step.hasGoToStep })}>
            <AnswerOption
              icon={faPaperPlane}
              toggleId="hasGoToStep"
              toggleValue={step.hasGoToStep}
              fieldId="goToStepByNum"
              fieldValue={step.goToStepByNum}
              onToggle={this.toggleStepKey('hasGoToStep')}
              onFieldChange={this.changeStepKey('goToStepByNum')}
            />
          </div>
        </div>)}
        {step.type === 'long' && (
        <div className={cx('form-group', s.answer)}>
          <textarea className="form-control" value={step.inputPlaceholder} placeholder="Long answer placeholder" onChange={this.changeStepKey('inputPlaceholder')} />
          <div className={cx('col-10', s.answerOptionCol, { [s.isVisible]: step.hasGoToStep })}>
            <AnswerOption
              icon={faPaperPlane}
              toggleId="hasGoToStep"
              toggleValue={step.hasGoToStep}
              fieldId="goToStepByNum"
              fieldValue={step.goToStepByNum}
              onToggle={this.toggleStepKey('hasGoToStep')}
              onFieldChange={this.changeStepKey('goToStepByNum')}
            />
          </div>
        </div>)}
        <Answers
          onUpdateStepAnswers={this.updateStepAnswers}
          sIdx={sIdx}
          type={step.type}
          answers={step.answers}
        />
        <a onClick={this.addStep} className={cx('pull-right', s.stepRevealable)}>+ Step</a>
        <hr style={{
    borderTopWidth: 1, marginBottom: 70, marginTop: 70, clear: 'both',
    }}
        />
      </div>
    )
  }

  elems = {}

  changeStepKey = key => (evt) => {
    this.props.onUpdateStep(this.props.sIdx, { ...this.props.step, [key]: evt.target.value })
  }

  toggleStepKey = key => () => {
    this.props.onUpdateStep(this.props.sIdx, { ...this.props.step, [key]: !this.props.step[key] })
  }

  removeStep = () => {
    if (!global.confirm(`really delete step ${this.props.sIdx}?`)) {
      return
    }
    this.props.onRemoveStep(this.props.sIdx)
  }

  addStep = () => {
    this.props.onAddStep(this.props.sIdx)
  }

  updateStepAnswers = (answers) => {
    this.props.onUpdateStep(this.props.sIdx, { ...this.props.step, answers })
  }
}

export default withStyles(s)(Step)
