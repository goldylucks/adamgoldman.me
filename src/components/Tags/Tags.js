// @flow

import React from 'react';

type Props = {
  tags: Array<string>,
};

const Tags = ({ tags }: Props) => <div>{tags.join(', ')}</div>;

export default Tags;
