// @flow

import React from 'react';

import Link from '../Link';
import { titleToSlug } from '../../utils';

type Props = {
  tags: Array<string>,
};

const Tags = ({ tags }: Props) => (
  <div style={{ marginBottom: 5 }}>
    {tags.map((t, idx) => (
      <span>
        {idx > 0 && ', '}
        <Link
          style={{ color: '#c8ffc8', textDecoration: 'none' }}
          to={`/tags/${titleToSlug(t)}`}
        >
          {t}
        </Link>
      </span>
    ))}
  </div>
);

export default Tags;
