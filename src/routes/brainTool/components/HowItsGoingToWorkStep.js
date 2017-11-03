// @flow

import React from 'react'

import HowItsGoingToWork from './HowItsGoingToWork'
import Answers from './Answers'

type Props = {
  onNext: Function,
  dontUnderstand: Object,
  back: Object,
};

const HowItsGoingToWorkStep = ({ onNext, dontUnderstand, back }: Props) => (
  <div>
    <HowItsGoingToWork />
    <Answers
      answers={[
        { text: "Good indeed, let's continue.", onClick: onNext },
        dontUnderstand,
        back,
      ]}
    />
  </div>
)

export default HowItsGoingToWorkStep
