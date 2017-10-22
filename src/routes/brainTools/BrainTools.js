// @flow

import React from 'react';

import Link from '../../components/Link';
import Ending from '../../components/Ending';
import tools from './brainToolsData';

const ToolsListPage = () => (
  <article className="main-layout">
    <header className="main-title-margin">
      <h1 className="main-title">Brain Hacking Automation Tools</h1>
    </header>
    <div>
      {tools.map(t => (
        <article key={t.url}>
          <h1>
            <Link to={`/tools/${t.url}/`}>{t.title}</Link>
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{t.description}</p>
          </div>
        </article>
      ))}
    </div>
    <hr />
    <Ending nick="automated brain hacking" />
  </article>
);

export default ToolsListPage;
