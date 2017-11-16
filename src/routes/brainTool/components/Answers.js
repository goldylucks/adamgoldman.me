// @flow

import React from 'react'

type Props = {
  answers?: Array<any>,
  onNext: Function,
  goToStepByTitle: Function,
  noBack: boolean,
  isRtl: boolean,
  that: any,
};

const Answers = ({
  answers, onNext, goToStepByTitle, that, noBack, isRtl,
}:
Props) => (
  <div>
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
        <div key={idx} className={`tool-answer ${!isRtl ? '' : 'rtl'}`}>
          - {html}
        </div>
      )
    })}

    {!noBack && (
      <div className={`tool-answer ${!isRtl ? '' : 'rtl'}`}>
        - <a onClick={() => onNext(-1)}>{!isRtl ? 'Back' : 'אחורה'}</a>
      </div>
    )}
    <div className={`tool-answer ${!isRtl ? '' : 'rtl'}`}>
      -{' '}
      <a
        onClick={() =>
          global.alert(!isRtl ? "follow the steps as best you can now, and contact me when you're done" : 'תעקוב אחר הצעדים הכי טוב שאתה יכול עכשיו, וצור איתי קשר כשאתה מסיים')}
      >
        {!isRtl ? 'I dont understand' : 'אני לא מבין'}
      </a>
    </div>
  </div>
)

Answers.defaultProps = {
  answers: [],
}

export default Answers
