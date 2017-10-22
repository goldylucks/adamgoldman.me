import React from 'react';

const Step = ({ step, currentStep, children }) => (
  <div
    style={step === currentStep ? { display: 'block' } : { display: 'none' }}
  >
    {children}
  </div>
);

export default Step;
