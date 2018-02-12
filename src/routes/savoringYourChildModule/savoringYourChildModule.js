// @flow

import React from 'react'

import Typeform from '../../components/Typeform'
import MessageMe from '../../components/MessageMe'
import Testimonial from '../../components/Testimonial'
import Share from '../../components/Share'
import FAQ from '../../components/FAQ'

type Props = {
  title: string,
  path: string,
  typeform: string,
  faq: [],
  testimonials: [],
};

const savoringYourChildSectionForm = ({
  title, path, typeform, faq, testimonials,
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
          <Typeform
            data-url={typeform}
            style={{ width: '100%', height: 800 }}
            onSubmit={() => console.log('submit!')}
          />
          <hr />
          { !testimonials.length
        ? null
      : (
        <section>
          <h4>Parents Share</h4>
          <Testimonial testimonials={testimonials} />
          <hr />
        </section>
      )}
          { !faq.length
            ? null
            : (
              <section>
                <h4>Frequently Asked Questions</h4>
                <FAQ faq={faq} />
                <hr />
              </section>
          )}
          <MessageMe />
        </div>
      </div>
    </div>
  </div>
)

export default savoringYourChildSectionForm