// @flow

import React from 'react';

import Link from '../../components/Link';
import Ending from '../../components/Ending';
import Markdown from '../../components/Markdown';
import BreadCrumbs from '../../components/BreadCrumbs';
import FbShareButton from '../../components/FbShareButton';
import Tags from '../../components/Tags';
import posts from '../../routes/blog/postsData';
import { filterDrafts } from '../../utils';

const Successes = () => (
  <article className="main-layout">
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <BreadCrumbs crumbs={[{ text: 'Successes' }]} />
      <FbShareButton />
    </div>
    <header className="main-title-margin">
      <h1 className="main-title">Successful Seesions</h1>
      <h2>Small sample of the results people are getting</h2>
    </header>
    <Markdown source="
If you still have pain to resolve or a desire to fulfill, let me know and we'll get you started ASAP. And don't worry about [the price](/i-dont-charge-i-accept), we'll get to that after
" />
    <hr />
    <div>
      {posts
        .filter(filterDrafts)
        .filter(p => p.tags.includes('Successes'))
        .map(p => (
          <article key={p.url}>
            <h1>
              <Link to={`/blog/${p.url}/`}>{p.title}</Link>
            </h1>
            <Tags tags={p.tags} />
            <p>{p.description}</p>
            <hr />
          </article>
        ))}
    </div>
    <Ending nick="mutual success" />
  </article>
);

export default Successes;
