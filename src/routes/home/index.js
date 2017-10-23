import React from 'react';
import Home from './Home';

function action() {
  return {
    chunks: ['home'],
    title: 'Adam Goldman',
    component: <Home />,
  };
}

export default action;
