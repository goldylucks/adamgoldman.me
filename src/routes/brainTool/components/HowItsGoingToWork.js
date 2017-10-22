// @flow

/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import ReactMarkdown from 'react-markdown';

const HowItsGoingToWork = () => (
  <div className="tool-text">
    <ReactMarkdown
      source={`I'm glad you asked,  
  so here's how it's going to work,  
  as I've been studying human behavior, organisms,  
  how society shapes behavior, communication,  
  and the greatest learning machine of all, the human brain,  
  I'm going to give you some things to try,  
  and whatever works for you, you get to keep,  
  whatever doesn't you file away in the  
  "thing's I've tried and haven't worked for me yet."

  Sounds good?`}
    />
  </div>
);

export default HowItsGoingToWork;
