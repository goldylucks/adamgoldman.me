import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
