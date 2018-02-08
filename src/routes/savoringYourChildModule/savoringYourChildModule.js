// @flow

import React from 'react'

import Share from '../../components/Share'

type Props = {
  title: string,
  description: string,
  path: string,
};

const savoringYourChildSectionForm = ({
  title, description, path,
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
            <p className="lead">{description}</p>
          </div>
          <div>Typeform goes here ...</div>
          <div>Testimonials</div>
          <div>FAQ</div>
          <div>Get started</div>
          <div>Message me</div>
        </div>
      </div>
    </div>
  </div>
)

export default savoringYourChildSectionForm
