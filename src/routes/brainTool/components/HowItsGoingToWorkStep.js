// @flow

import React from 'react'

import HowItsGoingToWork from './HowItsGoingToWork'
import AnswersV2 from './Answers-v2'

type Props = {
  onNext: Function,
};

const HowItsGoingToWorkStep = ({ onNext }: Props) => (
  <div>
    <HowItsGoingToWork />
    <AnswersV2
      onNext={onNext}
      answers={[
        { text: "Good indeed, let's continue.", onClick: onNext },
      ]}
    />
  </div>
)

export default HowItsGoingToWorkStep
