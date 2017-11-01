import React from 'react';

import Square from './Square';

const Wholeness = () => (
  <div className="clearfix">
    <Square title="Background" description="Background" />
    <Square title="Choose Experience" description="Choose Experience" />
    <Square title="Initial Feeling" description="Initial Feeling" />
    <Square
      title="Initial Feeling - location"
      description="Initial Feeling - location"
    />
    <Square
      title="Initial Feeling - Size & Shape"
      description="Initial Feeling - Size & Shape"
    />
    <Square
      title="Initial Feeling - Sensation Quality"
      description="Initial Feeling - Sensation Quality"
    />
    <Square title="Noticing Awareness" description="Noticing Awareness" />
    <Square
      title="Experiencing Practical Awareness"
      description="Experiencing Practical Awareness"
    />
    <Square title="I - Location" description="I - Location" id="location" />
    <Square title="I - Size & Shape" description="I - Size & Shape" />
    <Square title="I - Sensation Quality" description="I - Sensation Quality" />
    <Square
      title="I - Inviting Integration"
      description="I - Inviting Integration"
      invitation
    />
    <Square
      title="Acknolwedging Decline"
      description="I - Acknolwedging Decline"
      decline
      id="decline"
    />
    <Square
      title="I - Experiencing Integration"
      description="I - Experiencing Integration"
    />
    <Square
      title="I - Allowing Complete Integration"
      description="I - Allowing Complete Integration"
    />
    <Square
      title="Circling Back - Previous I"
      description="Circling Back - Previous I"
    />
    <Square
      title="Circling Back - Previous I - Inviting Integration"
      description="Circling Back - Previous I - Inviting Integration"
      invitation
    />
    <Square
      title="Circling Back - Where We Started"
      description="Circling Back - Where We Started"
    />
    <Square
      title="Circling Back - Inviting Integration"
      description="Circling Back - Inviting Integration"
      invitation
    />
    <Square
      title="Circling Back - Initial Context"
      description="Circling Back - Initial Context"
    />
    <Square
      title="'Being This Way' - Past"
      description="'Being This Way' - Past"
    />
    <Square
      title="'Being This Way' - Future"
      description="'Being This Way' - Future"
    />
    <Square title="Rejoicing Learning" description="Rejoicing Learning" />
  </div>
);

export default Wholeness;
