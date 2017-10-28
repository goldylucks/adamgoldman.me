import React from 'react';
import Reviews from './Reviews';

function action() {
  return {
    chunks: ['reviews'],
    title: 'Reviews',
    decsription: 'Reviews from past students',
    path: '/review',
    component: (
      <div>
        <Reviews />
      </div>
    ),
  };
}

export default action;
