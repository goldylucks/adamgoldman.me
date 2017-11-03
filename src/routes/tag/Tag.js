// @flow

/* eslint-disable react/no-danger */

import React from 'react'

import FbPageBox from '../../components/FbPageBox'
import Ending from '../../components/Ending'
import BreadCrumbs from '../../components/BreadCrumbs'
import FbShareButton from '../../components/FbShareButton'
import FbComments from '../../components/FbComments'
import Link from '../../components/Link'
import Tags from '../../components/Tags'
import posts from '../blog/postsData'
import tools from '../brainTools/brainToolsData'
import pages from '../page/pagesData'
import tags from '../tags/tagsData'
import { filterDrafts, getSlug } from '../../utils'

const items = tag =>
  tags
    .find(t => t.title.toLowerCase() === tag.toLowerCase())
    .items.map(({ type, url }) => {
      if (type === 'blog') {
        return posts.find(p => p.url === url)
      }
      if (type === 'tools') {
        return tools.find(t => t.url === url)
      }
      if (type === 'page') {
        return pages.find(p => p.url === url)
      }
      console.error('item with no type found!') // eslint-disable-line no-console
      return {} // this should never happen
    })

const toolsFirst = a => a.type !== 'tool'

type Props = {
  tag: string,
};

const Tag = ({ tag }: Props) => (
  <div>
    <div className="main-layout post-page">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <BreadCrumbs
          crumbs={[{ text: 'Tags', path: '/tags' }, { text: tag }]}
          style={{ marginBottom: 10 }}
        />
        <FbShareButton />
      </div>
      <h1 className="main-title">{tag}</h1>
      {items(tag)
        .filter(filterDrafts)
        .sort(toolsFirst)
        .map(i => (
          <article key={i.url}>
            <h1>
              <Link to={getSlug(i)}>{i.title}</Link>
            </h1>
            <Tags tags={i.tags} />
            <p>{i.description}</p>
            <hr />
          </article>
        ))}
      <FbPageBox style={{ display: 'block', textAlign: 'center' }} />
      <hr />
      <div style={{ marginBottom: 20 }}>
        <FbShareButton />
      </div>
      <Ending />
      <FbComments style={{ marginTop: 10 }} />
    </div>
  </div>
)

export default Tag
