import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['home'],
    title: 'Adam Goldman',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
