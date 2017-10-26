// @flow

import React from 'react';

import Link from '../Link';
import { titleToSlug } from '../../utils';

type Props = {
  tags: Array<string>,
};

const Tags = ({ tags }: Props) =>
  tags.map((t, idx) => (
    <span>
      {idx > 0 && ', '}
      <Link style={{ color: 'inherit' }} to={`/tags/${titleToSlug(t)}`}>
        {t}
      </Link>
    </span>
  ));

export default Tags;
