import React from 'react';
import Tag from './Tag';

const tagSlugToTitle = tag =>
  tag
    .split('-')
    .map(s => s.capitalize())
    .join(' ');

function action({ params }) {
  return {
    chunks: ['tag'],
    title: 'My Virtual Tag',
    path: `/tags/${params.tag}`,
    description: 'Some tag yo!',
    component: <Tag tag={tagSlugToTitle(params.tag)} />,
  };
}

export default action;
