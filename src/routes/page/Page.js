// @flow

/* eslint-disable react/no-danger */

import React from 'react'

import Share from '../../components/Share'
import Markdown from '../../components/Markdown'
import Ending from '../../components/Ending'
import BottomSection from '../../components/BottomSection'

type Props = {
  title: string,
  body: string,
  html: string,
  path: string,
  nick: string,
  ps: string,
};

const Page = ({
  title, body, html, path, nick, ps,
}:
Props) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Share path={path} title={title} />
        </div>
        <div className="col-md-8 col-xs-12">
          <div className="mainheading">
            <h1 className="posttitle">{title}</h1>
          </div>
          <div className="article-post">
            <Markdown source={body} />
            {html && <div style={{ marginBottom: 40 }}>{html}</div>}
          </div>
          <Ending nick={nick} />
          {ps && <Markdown source={ps} />}
        </div>
      </div>
    </div>
    <BottomSection />
  </div>
)

export default Page
