import React from 'react';
import Page from '../page/Page';

import notFound from './notFound';

function action() {
  return {
    title: 'Welcome! To the middle of fucking nowhere ...',
    decription: "Where am I? Who am I? What's the meaning of all this?",
    chunks: ['not-found'],
    component: <Page {...notFound} />,
    status: 404,
  };
}

export default action;
