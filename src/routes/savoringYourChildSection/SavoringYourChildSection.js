// @flow

import React from 'react'

import Share from '../../components/Share'
import Markdown from '../../components/Markdown'

type Props = {
  title: string,
  body: string,
  path: string,
};

const LossSection = ({
  title, body, path,
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
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LossSection
