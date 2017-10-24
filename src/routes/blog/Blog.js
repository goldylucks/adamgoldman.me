// @flow

import React from 'react';

import Link from '../../components/Link';
import Ending from '../../components/Ending';
import Tags from '../../components/Tags';
import FbPageBox from '../../components/FbPageBox';
import FbShareButton from '../../components/FbShareButton';
import BreadCrumbs from '../../components/BreadCrumbs';
import posts from './postsData';
import { filterDrafts } from '../../utils' 

const Blog = () => (
  <article className="main-layout">
    <BreadCrumbs crumbs={[{ text: 'Blog' }]} />
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Tags tags={p.tags} />
            <FbShareButton urlProp={`/blog/${p.url}/`} />
          </div>
          <p>{p.description}</p>
          <hr />
        </article>
      ))}
    </div>
    <FbPageBox style={{ display: 'block', textAlign: 'center' }} />
    <Ending nick="non blogger" />
  </article>
);

export default Blog;
