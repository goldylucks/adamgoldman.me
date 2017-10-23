import React from 'react';
import Page from '../page/Page';

import notFound from './notFound';

function action() {
  return {
    chunks: ['not-found'],
    component: <Page {...notFound} />,
    status: 404,
  };
}

export default action;
