import React from 'react';
import Layout from '../../components/Layout';
import Blog from './Blog';

const title = 'Blog Us';

function action() {
  return {
    chunks: ['blog'],
    title,
    component: (
      <Layout>
        <Blog title={title} />
      </Layout>
    ),
  };
}

export default action;
