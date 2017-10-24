// @flow

import React from 'react';

import Link from '../../components/Link';
import Ending from '../../components/Ending';
import BreadCrumbs from '../../components/BreadCrumbs';
import FbShareButton from '../../components/FbShareButton';
import { filterDrafts } from '../../utils';
import tools from './brainToolsData';

const ToolsListPage = () => (
  <article className="main-layout">
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <BreadCrumbs
        crumbs={[{ text: 'Brain Hacking Tools' }]}
        style={{ marginBottom: 10 }}
      />
      <FbShareButton />
    </div>
    <header className="main-title-margin">
      <h1 className="main-title">Brain Hacking Automation Tools</h1>
    </header>
    <div>
      {tools.filter(filterDrafts).map(t => (
        <article key={t.url}>
          <h1>
            <Link to={`/tools/${t.url}/`}>{t.title}</Link>
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{t.description}</p>
            <FbShareButton urlProp={`/tools/${t.url}/`} />
          </div>
          <hr />
        </article>
      ))}
    </div>
    <div style={{ marginBottom: 20 }}>
      <FbShareButton />
    </div>
    <Ending nick="automated brain hacking" />
  </article>
);

export default ToolsListPage;
