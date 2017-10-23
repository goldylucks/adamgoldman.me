import React from 'react';
import Home from './Home';

function action() {
  return {
    chunks: ['home'],
    title: 'My Virtual Home',
    path: '/',
    description: "Relax, it's just life",
    component: <Home />,
  };
}

export default action;
