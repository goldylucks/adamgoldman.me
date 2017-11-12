// @flow

import React from 'react'

import HowItsGoingToWork from './HowItsGoingToWork'
import Answers from './Answers'

type Props = {
  onNext: Function,
};

const HowItsGoingToWorkStep = ({ onNext }: Props) => (
  <div>
    <HowItsGoingToWork />
    <Answers
      onNext={onNext}
      answers={[
        { text: "Good indeed, let's continue.", onClick: onNext },
      ]}
    />
  </div>
)

export default HowItsGoingToWorkStep
