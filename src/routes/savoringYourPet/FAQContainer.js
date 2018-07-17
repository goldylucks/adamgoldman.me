// @flow

import React from 'react'

import FAQ from '../../components/FAQ'

import { logistics, lossGrief } from './faqData'

const FAQContainer = () => (
  <div>
    <h1 className="text-center">F.A.Q.</h1>
    <div className="row justify-content-md-center">
      <div className="col col-lg-8">
        <h4>Logistics</h4>
        <FAQ faqs={logistics} />
        <hr />
        <h4>Loss / grief</h4>
        <FAQ faqs={lossGrief} />
      </div>
    </div>
  </div>
)

export default FAQContainer
