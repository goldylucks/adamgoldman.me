// @flow

import React from 'react'

type Props = {
  answers?: Array<any>,
  onNext: Function,
  goToStepByTitle: Function,
  noBack: boolean,
  that: any,
};

const Answers = ({
  answers, onNext, goToStepByTitle, that, noBack,
}:
Props) => (
  <div>
    {answers.map((answer, idx) => {
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
        <div key={idx} className="tool-answer">
          - {html}
        </div>
      )
    })}

    {!noBack && (
      <div className="tool-answer">
        - <a onClick={() => onNext(-1)}>Back</a>
      </div>
    )}
    <div className="tool-answer">
      -{' '}
      <a
        onClick={() =>
          global.alert("follow the steps as best you can now, and contact me when you're done")}
      >
        I dont Understand
      </a>
    </div>
  </div>
)

Answers.defaultProps = {
  answers: [],
}

export default Answers
