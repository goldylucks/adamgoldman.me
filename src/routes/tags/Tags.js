// @flow

import React from 'react'

import Link from '../../components/Link'
import Ending from '../../components/Ending'
import BreadCrumbs from '../../components/BreadCrumbs'
import FbShareButton from '../../components/FbShareButton'
import FbComments from '../../components/FbComments'
import { titleToSlug } from '../../utils'

import tags from './tagsData'

const ToolsListPage = () => (
  <article className="main-layout">
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <BreadCrumbs crumbs={[{ text: 'Tags' }]} />
      <FbShareButton />
    </div>
    <header className="main-title-margin">
      <h1 className="main-title">Tags</h1>
    </header>
    <div>
      {tags.map(t => (
        <article key={t.title}>
          <h1>
            <Link to={`/tags/${titleToSlug(t.title)}/`}>{t.title}</Link>
          </h1>
          <p>{t.description}</p>
          <hr />
        </article>
      ))}
    </div>
    <div style={{ marginBottom: 20 }}>
      <FbShareButton />
    </div>
    <Ending nick="tag, not it" />
    <FbComments style={{ marginTop: 10 }} />
  </article>
)

export default ToolsListPage
