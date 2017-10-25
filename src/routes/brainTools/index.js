import React from 'react';
import Layout from '../../components/Layout';
import BrainTools from './BrainTools';

const title = 'Brain Hacking Automation Tools';

function action() {
  return {
    chunks: ['brainTools'],
    title,
    path: '/tools',
    description:
      'Hack your brain with an internet connection and a small screen',
    component: (
      <div>
        <BrainTools title={title} />
      </div>
    ),
  };
}

export default action;
