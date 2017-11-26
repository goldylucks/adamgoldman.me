// @flow

import React from 'react'

import Link from '../../../components/Link'
import FbShareButton from '../../../components/FbShareButton'
import he from '../../../he'

type Props = {
  answers?: Array<any>,
  onNext: Function,
  gender?: string,
  onGoToStepByTitle: Function,
  noBack: boolean,
  isRtl: boolean,
  onResetInputs: Function,
  onSetInput: Function,
};

const Answers = ({
  answers, onNext, onGoToStepByTitle, noBack, isRtl, gender, onResetInputs, onSetInput,
}:
Props) => (
  <div>
    {answers && answers.map((answer, idx) => {
      let html
      if (answer.isFbShare) {
        html = <FbShareButton>I want more to experience this</FbShareButton>
      } else if (answer.link) {
        html = <Link to={answer.link}>{answer.text}</Link>
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
        <div key={idx} className={`tool-answer ${!isRtl ? '' : 'rtl'}`}>
          - {html}
        </div>
      )
    })}

    {renderBack({ noBack, isRtl, onNext })}
    {renderDontUnderstand({ isRtl, gender })}
  </div>
)

Answers.defaultProps = {
  answers: [],
  gender: 'male',
}

// eslint-disable-next-line react/prop-types
function renderBack({ noBack, isRtl, onNext }) {
  if (noBack) {
    return null
  }
  return (
    <div className={`tool-answer ${!isRtl ? '' : 'rtl'}`}>
      - <a onClick={() => onNext(-1)}>{!isRtl ? 'Back' : 'אחורה'}</a>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function renderDontUnderstand({ isRtl, gender }) {
  return (
    <div className={`tool-answer ${!isRtl ? '' : 'rtl'}`}>
      -{' '}
      <a
        onClick={() =>
          global.alert(!isRtl ? "follow the steps as best you can now, and contact me when you're done" : `${he.taakov(gender)} אחר הצעדים הכי טוב ש${he.ata(gender)} ${he.yajol(gender)} עכשיו, ו${he.tsor(gender)} איתי קשר כש${he.ata(gender)} ${he.mesayem(gender)}`)}
      >
        {!isRtl ? 'I dont understand' : `אני לא ${he.mevin(gender)}`}
      </a>
    </div>
  )
}

export default Answers