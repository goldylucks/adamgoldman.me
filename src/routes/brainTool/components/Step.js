// @flow

import React from 'react';

type Props = {
  step: number,
  currentStep: number,
  children?: any, // eslint-disable-line react/require-default-props
};

const Step = ({ step, currentStep, children }: Props) => (
  <div
    style={step === currentStep ? { display: 'block' } : { display: 'none' }}
  >
    {children}
  </div>
);

export default Step;
