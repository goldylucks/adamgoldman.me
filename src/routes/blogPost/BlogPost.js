// @flow
/* eslint-disable react/no-danger */

import React from 'react'

import Markdown from '../../components/Markdown'
import FbPageBox from '../../components/FbPageBox'
import Ending from '../../components/Ending'
import FbShareButton from '../../components/FbShareButton'
import BreadCrumbs from '../../components/BreadCrumbs'
import FbComments from '../../components/FbComments'
import Tags from '../../components/Tags'

type Props = {
  title: string,
  tags: Array<string>,
  body: string,
  html: string,
  nick: string,
  isBodyRtl?: boolean, // eslint-disable-line react/require-default-props
  isTitleRtl?: boolean, // eslint-disable-line react/require-default-props
  ps?: string, // eslint-disable-line react/require-default-props
};

const BlogPost = (
  {
    title,
    isTitleRtl,
    tags,
    body,
    isBodyRtl,
    html,
    nick,
    ps,
  }: Props, // eslint-disable-line object-curly-newline
) => (
  <div>
    <div className="main-layout post-page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <BreadCrumbs
          crumbs={[{ text: 'Blog', path: '/blog' }, { text: title }]}
        />
        <FbShareButton />
      </div>
      <h1
        className="main-title"
        style={{ direction: isTitleRtl ? 'rtl' : 'ltr' }}
      >
        {title}
      </h1>
      <Tags tags={tags} />
      <div style={{ direction: isBodyRtl ? 'rtl' : 'ltr' }}>
        <Markdown className="post-text" source={body} />
      </div>
      {html && (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
      <FbPageBox style={{ display: 'block', textAlign: 'center' }} />
      <hr />
      <div style={{ marginBottom: 20 }}>
        <FbShareButton />
      </div>
      <Ending nick={nick} />
      {ps && (
        <Markdown
          className="post-text"
          containerProps={{
            style: { marginTop: 40 },
          }}
          source={ps}
        />
      )}
      <FbComments style={{ marginTop: 10 }} />
    </div>
  </div>
)

export default BlogPost
