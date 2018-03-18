import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'
import faExclamation from '@fortawesome/fontawesome-free-solid/faExclamation'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt'
import _ from 'lodash'
import { pure } from 'recompose'

import { freshAnswer } from './toolEditorUtils'
import s from './ToolEditor.css'

const changeAnswerKey = (key, answers, sIdx, aIdx, onNewStepAnswers) => (evt) => {
  answers = _.cloneDeep(answers)
  answers[aIdx][key] = evt.target.value
  onNewStepAnswers(sIdx, answers)
}

const toggleAnswerOption = (key, answers, sIdx, aIdx, onNewStepAnswers) => () => {
  answers = _.cloneDeep(answers)
  answers[aIdx][key] = !answers[aIdx][key]
  onNewStepAnswers(sIdx, answers)
}

const addAnswer = (sIdx, answers, onNewStepAnswers) => () => {
  onNewStepAnswers(sIdx, answers.concat(freshAnswer()))
}

const removeAnswer = (sIdx, answers, aIdx, onNewStepAnswers) => () => {
  answers = _.cloneDeep(answers)
  answers.splice(aIdx, 1)
  onNewStepAnswers(sIdx, answers)
}

const answerKeyPress = (sIdx, answers, aIdx, onNewStepAnswers) => (evt) => {
  if (evt.key !== 'Enter') {
    return
  }
  evt.preventDefault()
  answers = _.cloneDeep(answers)
  answers.splice(aIdx + 1, 0, freshAnswer())
  onNewStepAnswers(sIdx, answers)
}

const setAnswersTemplate = (sIdx, onNewStepAnswers) => () => {
  if (!global.confirm('set answers template?')) {
    return
  }
  const answers = [
    freshAnswer({ text: 'I feel MUCH better' }),
    freshAnswer({ text: 'I feel better' }),
    freshAnswer({ text: 'I don’t feel a change in this step' }),
    freshAnswer({ text: 'I feel worse', isConcern: true, concern: 'feel worse' }),
  ]
  onNewStepAnswers(sIdx, answers)
}

const hasOtherAnswer = (sIdx, answers) => {
  if (!answers) {
    global.console.warn('missing answers on step ', sIdx)
    return false
  }
  return !!answers.find(a => a.isOther)
}

const toggleHasOtherAnswer = (sIdx, answers, onNewStepAnswers) => () => {
  answers = _.cloneDeep(answers)
  hasOtherAnswer(sIdx) // eslint-disable-line no-unused-expressions
    ? answers.pop()
    : answers.push(freshAnswer({ isOther: true, text: 'Other' }))
  onNewStepAnswers(sIdx, answers)
}

const Answers = ({
  type, answers, sIdx, onNewStepAnswers,
}) => {
  const elems = {}
  if (!type) {
    return null
  }
  if (!type.match(/radio|checkbox/)) {
    return null
  }
  return (
    <div>
      {answers.map((a, aIdx) => (
        <div>
          <div className={cx('row', s.answer)}>
            <div className="col-10">
              <input
                onKeyPress={answerKeyPress(sIdx, answers, aIdx, onNewStepAnswers)}
                ref={(el) => { elems[`answer-${aIdx}`] = el }}
                className="btn btn-primary btn-block text-left"
                placeholder={`answer #${aIdx}`}
                value={a.text}
                onChange={changeAnswerKey('text', answers, sIdx, aIdx, onNewStepAnswers)}
              />
            </div>
            <div className={cx('col-2 text-right', s.answerActions)}>
              <FontAwesomeIcon
                onClick={removeAnswer(sIdx, answers, aIdx, onNewStepAnswers)}
                icon={faTrashAlt}
              />
            </div>
            <div className={cx('col-10', s.answerOptionCol, { [s.isVisible]: a.hasGoToStep || a.isLink || a.isLinkNew || a.isConcern })}>
              {[{ toggleId: 'hasGoToStep', icon: faPaperPlane, fieldId: 'goToStepByNum' }, { toggleId: 'isLink', icon: faLink, fieldId: 'link' }, { toggleId: 'isLinkNew', icon: faExternalLinkAlt, fieldId: 'linkNew' }, { toggleId: 'isConcern', icon: faExclamation, fieldId: 'concern' }]
            .map(({ toggleId, icon, fieldId }) => (
              <div className={s.answerOption}>
                <div
                  className={s.answerOptionToggle}
                  onClick={toggleAnswerOption(toggleId, answers, sIdx, aIdx, onNewStepAnswers)}
                >
                  <FontAwesomeIcon icon={icon} />
                </div>
                <input
                  type="text"
                  className={cx(s.answerOptionField, { [s.isVisible]: a[toggleId] })}
                  id={fieldId}
                  placeholder={fieldId}
                  value={a[fieldId]}
                  onChange={changeAnswerKey(fieldId, sIdx, aIdx, onNewStepAnswers)}
                />
              </div>
            ))}
            </div>
          </div>
        </div>
        ))}
      <div className={cx('col-10', s.stepRevealable)} style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={`step-${sIdx}-other-toggle`} checked={hasOtherAnswer(sIdx, answers)} onChange={toggleHasOtherAnswer(sIdx)} />
          <label className="form-check-label" htmlFor={`step-${sIdx}-other-toggle`}>Other</label>
        </div>
        <a onClick={setAnswersTemplate(sIdx, onNewStepAnswers)}>Template A</a>
        <a onClick={addAnswer(sIdx, answers, onNewStepAnswers)}>+ answer</a>
      </div>
    </div>
  )
}

Answers.propTypes = {
  type: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  sIdx: PropTypes.number.isRequired,
  onNewStepAnswers: PropTypes.func.isRequired,
}

export default withStyles(s)(pure(Answers))
