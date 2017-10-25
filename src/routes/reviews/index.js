import React from 'react';
import Reviews from './Reviews';

function action() {
  return {
    chunks: ['successes'],
    title: 'Reviews',
    path: '/review',
    component: (
      <div>
        <Reviews />
      </div>
    ),
  };
}

export default action;
