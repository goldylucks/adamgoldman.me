import React from 'react';
import Successes from './Successes';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['successes'],
    title: 'Successes',
    path: '/successes',
    component: (
      <Layout>
        <Successes />
      </Layout>
    ),
  };
}

export default action;
