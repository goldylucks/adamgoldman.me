import React from 'react';
import Tags from './Tags';

const title = 'Tags';

function action() {
  return {
    chunks: ['tags'],
    title,
    path: '/tags',
    description: 'Tags of the site',
    component: (
      <div>
        <Tags title={title} />
      </div>
    ),
  };
}

export default action;
