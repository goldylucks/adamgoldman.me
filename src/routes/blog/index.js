import React from 'react';
import Layout from '../../components/Layout';
import Blog from './Blog';

const title = 'Blog';

function action() {
  return {
    chunks: ['blog'],
    title,
    description: 'A blog with my humble thoughts and diabolical schemes',
    component: (
      <div>
        <Blog />
      </div>
    ),
  };
}

export default action;
