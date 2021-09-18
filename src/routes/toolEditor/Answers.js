import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faTrashAlt } from '@fortawesome/free-regular-svg-icons/'
import {
  faLink,
  faExternalLinkAlt,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons/'
import _ from 'lodash'

import { freshAnswer } from './toolEditorUtils'
import './ToolEditor.css'

const changeAnswerKey = (key, answers, aIdx, onUpdateStepAnswers) => evt => {
  answers = _.cloneDeep(answers)
  answers[aIdx][key] = evt.target.value
  onUpdateStepAnswers(answers)
}

const toggleAnswerOption = (key, answers, aIdx, onUpdateStepAnswers) => () => {
  answers = _.cloneDeep(answers)
  answers[aIdx][key] = !answers[aIdx][key]
  onUpdateStepAnswers(answers)
}

const addAnswer = (answers, onUpdateStepAnswers) => () => {
  onUpdateStepAnswers(answers.concat(freshAnswer()))
}

const removeAnswer = (answers, aIdx, onUpdateStepAnswers) => () => {
  if (!global.confirm('remove answer?')) {
    return
  }
  answers = _.cloneDeep(answers)
  answers.splice(aIdx, 1)
  onUpdateStepAnswers(answers)
}

const answerKeyPress = (answers, aIdx, onUpdateStepAnswers) => evt => {
  if (evt.key !== 'Enter') {
    return
  }
  evt.preventDefault()
  answers = _.cloneDeep(answers)
  answers.splice(aIdx + 1, 0, freshAnswer())
  onUpdateStepAnswers(answers)
}

const setAnswersTemplate = onUpdateStepAnswers => () => {
  if (!global.confirm('set answers template?')) {
    return
  }
  const answers = [
    freshAnswer({ text: 'I feel MUCH better' }),
    freshAnswer({ text: 'I feel better' }),
    freshAnswer({ text: 'I don’t feel a change in this step' }),
    freshAnswer({
      text: 'I feel worse',
      isConcern: true,
      concern: 'feel worse',
    }),
  ]
  onUpdateStepAnswers(answers)
}

const hasOtherAnswer = answers => !!answers.find(a => a.isOther)

const toggleHasOtherAnswer = (answers, onUpdateStepAnswers) => () => {
  answers = _.cloneDeep(answers)
  hasOtherAnswer(answers) // eslint-disable-line no-unused-expressions
    ? answers.pop()
    : answers.push(
        freshAnswer({ isOther: true, text: 'Other', isReadOnly: true }),
      )
  onUpdateStepAnswers(answers)
}

class Answers extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    sIdx: PropTypes.number.isRequired,
    onUpdateStepAnswers: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.answers !== nextProps.answers) {
      return true
    }
    if (this.props.sIdx !== nextProps.sIdx) {
      return true
    }

    if (this.props.type !== nextProps.type) {
      return true
    }
    return false
  }

  render() {
    const { answers, sIdx, type, onUpdateStepAnswers } = this.props
    const elems = {}
    if (!type) {
      return null
    }
    if (!type.match(/radio|checkbox|flash/)) {
      return null
    }

    return (
      <div>
        <div>
          {answers.map((a, aIdx) => (
            <div key={aIdx}>
              <div className={cx('row', 'answer')}>
                <div className='col-10'>
                  <input
                    onKeyPress={answerKeyPress(
                      answers,
                      aIdx,
                      onUpdateStepAnswers,
                    )}
                    ref={el => {
                      elems[`answer-${aIdx}`] = el
                    }}
                    className='btn btn-secondary btn-block text-left'
                    placeholder={`answer #${aIdx}`}
                    value={a.text}
                    onChange={changeAnswerKey(
                      'text',
                      answers,
                      aIdx,
                      onUpdateStepAnswers,
                    )}
                    readOnly={a.isReadOnly}
                  />
                </div>
                <div className={cx('col-2 text-right', 'answerActions')}>
                  <FontAwesomeIcon
                    onClick={removeAnswer(answers, aIdx, onUpdateStepAnswers)}
                    icon={faTrashAlt}
                  />
                </div>
                <div
                  className={cx('col-10', 'answerOptionCol', {
                    isVisible:
                      a.hasGoToStep || a.isLink || a.isLinkNew || a.isConcern,
                  })}
                >
                  {[
                    {
                      toggleId: 'hasGoToStep',
                      icon: faPaperPlane,
                      fieldId: 'goToStepByNum',
                    },
                    { toggleId: 'isLink', icon: faLink, fieldId: 'link' },
                    {
                      toggleId: 'isLinkNew',
                      icon: faExternalLinkAlt,
                      fieldId: 'linkNew',
                    },
                    {
                      toggleId: 'isConcern',
                      icon: faExclamation,
                      fieldId: 'concern',
                    },
                  ].map(({ toggleId, icon, fieldId }) => (
                    <div className='answerOption' key={fieldId}>
                      <div
                        className='answerOptionToggle'
                        onClick={toggleAnswerOption(
                          toggleId,
                          answers,
                          aIdx,
                          onUpdateStepAnswers,
                        )}
                      >
                        <FontAwesomeIcon icon={icon} />
                      </div>
                      <input
                        type='text'
                        className={cx('answerOptionField', {
                          isVisible: a[toggleId],
                        })}
                        id={fieldId}
                        placeholder={fieldId}
                        value={a[fieldId]}
                        onChange={changeAnswerKey(
                          fieldId,
                          answers,
                          aIdx,
                          onUpdateStepAnswers,
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={cx('col-10', 'stepRevealable')}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 15,
          }}
        >
          <div className='form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id={`step-${sIdx}-other-toggle`}
              checked={hasOtherAnswer(answers)}
              onChange={toggleHasOtherAnswer(answers, onUpdateStepAnswers)}
            />
            <label
              className='form-check-label'
              htmlFor={`step-${sIdx}-other-toggle`}
            >
              Other
            </label>
          </div>
          <a onClick={setAnswersTemplate(onUpdateStepAnswers)}>Template A</a>
          <a onClick={addAnswer(answers, onUpdateStepAnswers)}>+ answer</a>
        </div>
      </div>
    )
  }
}

export default Answers
