// @flow

import React from 'react'

import Square from './Square'

type Props = {
  steps: Array<Object>,
  mockState: Object,
}

const Chart = ({ steps, mockState }: Props) => (
  <div className="clearfix">
    {steps.map((props, idx) => (
      <Square
        {...props}
        mockState={mockState}
        nOfSteps={steps.length - 1}
        idx={idx}
      />
    ))}
  </div>
)

export default Chart
