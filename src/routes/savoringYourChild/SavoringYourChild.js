// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import FA from 'react-fontawesome'

import { MESSENGER_LINK } from '../../constants'
import Testimonial from '../../components/Testimonial'
import FAQContainer from './FAQContainer'
import GetStarted from '../../components/GetStarted'

import s from './SavoringYourChild.css'

import { testimonials } from './data'

const SavoringYourChild = () => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle text-center">How to honor your child&apos;s memory after the transition</h1>
        <p className="lead text-center">And appreciate the relationship you had in a resourceful way</p>
      </div>
      <div id="typeform">Typeform goes here ...</div>
      <hr className={s.hr} />
      <section id="testimonial">
        <h1 className="text-center">Parents share ...</h1>
        <Testimonial
          testimonials={testimonials}
        />
      </section>
      <section id="get-started">
        <GetStarted text="Get Started" style={s.ctaButton} />
      </section>
      <hr className={s.hr} />
      <h1 className="text-center">What will I learn?</h1>
      <div className="row justify-content-md-center">
        <div className="col col-lg-10">
          <div className={s.benefit}><FA name="check" />How to enjoy thinking about your child</div>
          <div className={s.benefit}><FA name="check" />How to focus on the good experiences</div>
          <div className={s.benefit}><FA name="check" />How to look forward to your future</div>
          <div className={s.benefit}><FA name="check" />How to increase the peace, love & acceptance in your life</div>
          <div className={s.benefit}><FA name="check" />How to feel your child&apos;s presence even more</div>
        </div>
      </div>
      <hr className={s.hr} />
      <section id="faq">
        <FAQContainer />
      </section>
      <hr className={s.hr} />
      <section id="get-started">
        <GetStarted text="Get Started" style={s.ctaButton} />
      </section>
      <hr className={s.hr} />
      <div className="text-center">
        <h1>Still got questions?</h1>
        <a
          href={MESSENGER_LINK}
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <img
            src="http://dnjuvu1aivgsx.cloudfront.net/blog/Feedback/message-me.png"
            style={{ maxWidth: '100%' }}
            alt="Message Me"
          />
          <img
            src="https://cdn.supple.com.au/wp-content/themes/supple/img/msg.png"
            alt="Messenger Link"
          />
        </a>
      </div>
    </div>
  </div>
)

export default withStyles(s)(SavoringYourChild)
