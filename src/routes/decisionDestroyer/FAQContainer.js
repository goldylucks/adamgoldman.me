// @flow

import React from 'react'

import FAQ from '../../components/FAQ'

import faq from './faqData'

const FAQContainer = () => (
  <div>
    <h1 className="text-center">F.A.Q.</h1>
    <div className="row justify-content-md-center">
      <div className="col col-lg-8">
        <FAQ faqs={faq} />
      </div>
    </div>
  </div>
)

export default FAQContainer
