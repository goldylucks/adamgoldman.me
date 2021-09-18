// @flow
/* eslint-disable react/no-danger */

import React from 'react'

import Markdown from '../../components/Markdown'
import Share from '../../components/Share'
import BottomSection from '../../components/BottomSection'
import Tags from '../../components/Tags'
import Ending from '../../components/Ending'

type Props = {
  title: string,
  tags: Array<string>,
  body: string,
  html: string,
  nick: string,
  ps?: string, // eslint-disable-line react/require-default-props
};

const BlogPost = (
  {
    title,
    tags,
    body,
    html,
    nick,
    ps,
  }: Props, // eslint-disable-line object-curly-newline
) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Share />
        </div>

        <div className="col-md-8 col-xs-12">
          <div className="mainheading">
            <h1 className="posttitle">{title}</h1>
          </div>

          <div className="article-post">
            <Markdown source={body} />
            {html && (
            // eslint-disable-next-line react/no-danger
            <div dangerouslySetInnerHTML={{ __html: html }} />
          )}
          </div>
          <Ending nick={nick} />
          <Tags tags={tags} />
          {ps && <Markdown source={ps} />}
        </div>
      </div>
    </div>
    <BottomSection />
  </div>
)

export default BlogPost
