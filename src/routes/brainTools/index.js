import React from 'react';
import Layout from '../../components/Layout';
import BrainTools from './BrainTools';

const title = 'BrainTools Us';

function action() {
  return {
    chunks: ['brainTools'],
    title,
    component: (
      <Layout>
        <BrainTools title={title} />
      </Layout>
    ),
  };
}

export default action;
