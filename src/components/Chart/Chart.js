import React from 'react';
import PropTypes from 'prop-types';

import Square from './Square';

const Chart = ({ steps, mockState }) => (
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
);

Chart.propTypes = {
  steps: PropTypes.array.isRequired,
  mockState: PropTypes.object.isRequired,
};

export default Chart;
