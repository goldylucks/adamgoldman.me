// @flow

import React from 'react'

import he from '../../../he'

import Answer from './Answer'

type Props = {
  answers?: Array<any>,
  onNext: Function,
  gender?: string,
  goToStepByTitle: Function,
  noBack: boolean,
  isRtl: boolean,
  that: any,
};

const AnswersV2 = ({
  answers, onNext, goToStepByTitle, that, noBack, isRtl, gender,
}:
Props) => (
  <div style={{ marginTop: 20, marginBottom: 20 }}>
    {answers && answers.map((answer, idx) => {
      let html
      // if react component
      if (!answer.text) {
        html = answer
      } else if (answer.goToStepByTitle) {
        html = (
          <a onClick={() => goToStepByTitle(answer.goToStepByTitle)}>
            {answer.text}
          </a>
        )
      } else if (answer.onClickThat) {
        html = <a onClick={() => answer.onClickThat(that)}>{answer.text}</a>
      } else {
        html = <a onClick={answer.onClick || onNext}>{answer.text}</a>
      }

      return (
        <Answer isRtl={isRtl} key={idx}>{html}</Answer>
      )
    })}

    {renderBack({ noBack, isRtl, onNext })}
    {renderDontUnderstand({ isRtl, gender })}
  </div>
)

AnswersV2.defaultProps = {
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
        {!isRtl ? 'I dont understand' : `אני לא ${he.mevin(gender)}`}
      </a>
    </Answer>
  )
}

export default AnswersV2
