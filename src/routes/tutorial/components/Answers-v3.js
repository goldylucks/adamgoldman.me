// @flow

import React from 'react'

import Link from '../../../components/Link'
import FbShareLink from '../../../components/FbShareLink'
import he from '../../../he'

import Answer from './Answer'

type Props = {
  style: Object,
  answers?: Array<any>,
  onNext: Function,
  gender?: string,
  onGoToStepByTitle: Function,
  noBack: boolean,
  isRtl: boolean,
  onResetInputs: Function,
  onSetInput: Function,
};

const AnswersV3 = ({
  style, answers, onNext, onGoToStepByTitle, noBack, isRtl, gender, onResetInputs, onSetInput,
}:
Props) => (
  <div style={style}>
    {answers.map((answer, idx) => {
      let html
      if (answer.isFbShare) {
        html = <FbShareLink>I want more to experience this</FbShareLink>
      } else if (answer.link) {
        html = <Link to={answer.link}>{answer.text}</Link>
      } else if (answer.alert) {
        html = <a onClick={() => global.alert(answer.alert)}>{answer.text}</a>
      } else if (answer.linkNew) {
        html = (
          <a
            href={answer.linkNew}
            target="_blank"
            rel="nofollow noreferrer noopener"
          >{answer.text}
          </a>
        )
      } else {
        html = (
          <a onClick={() => {
            if (answer.resetInputs) {
              onResetInputs(answer.resetInputs.split(', '))
            }
            if (answer.inputId) {
              onSetInput(answer.inputId, answer.inputValue)
            }
            if (answer.goToStepByTitle) {
              onGoToStepByTitle(answer.goToStepByTitle)
            } else {
              onNext()
            }
          }}
          >{answer.text}
          </a>
        )
      }

      return (
        <Answer isRtl={isRtl} key={idx}>
          {html}
        </Answer>
      )
    })}

    {renderBack({ noBack, isRtl, onNext })}
    {renderDontUnderstand({ isRtl, gender })}
  </div>
)

AnswersV3.defaultProps = {
  answers: [],
  gender: 'male',
}

// eslint-disable-next-line react/prop-types
function renderBack({ noBack, isRtl, onNext }) {
  if (noBack) {
    return null
  }
  return (
    <Answer isRtl={isRtl}>
      <a onClick={() => onNext(-1)}>{!isRtl ? 'Back' : 'אחורה'}</a>
    </Answer>
  )
}

// eslint-disable-next-line react/prop-types
function renderDontUnderstand({ isRtl, gender }) {
  return (
    <Answer isRtl={isRtl}>
      <a
        onClick={() =>
          global.alert(!isRtl ? "follow the steps as best you can now, and contact me when you're done" : `${he.taakov(gender)} אחר הצעדים הכי טוב ש${he.ata(gender)} ${he.yajol(gender)} עכשיו, ו${he.tsor(gender)} איתי קשר כש${he.ata(gender)} ${he.mesayem(gender)}`)}
      >
        {!isRtl ? 'I don\'t understand' : `אני לא ${he.mevin(gender)}`}
      </a>
    </Answer>
  )
}

export default AnswersV3
