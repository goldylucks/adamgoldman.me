// @flow

import React from 'react';

import Link from '../../components/Link';
import Ending from '../../components/Ending';
import Tags from '../../components/Tags';
import FbPageBox from '../../components/FbPageBox';
import FbShareButton from '../../components/FbShareButton';
import BreadCrumbs from '../../components/BreadCrumbs';
import FbComments from '../../components/FbComments';
import posts from './postsData';
import { filterDrafts } from '../../utils';

const Blog = () => (
  <article className="main-layout">
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <BreadCrumbs crumbs={[{ text: 'Blog' }]} />
      <FbShareButton />
    </div>
    <header className="main-title-margin">
      <h1 className="main-title">My Humble Blog</h1>
      <h2>With my humble thoughts and diabolical schemes</h2>
    </header>
    <div>
      {posts.filter(filterDrafts).map(p => (
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
    <FbPageBox style={{ display: 'block', textAlign: 'center' }} />
    <Ending nick="non blogger" />
    <FbComments style={{ marginTop: 10 }} />
  </article>
);

export default Blog;
