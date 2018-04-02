// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Benefits from '../../components/Benefits'
import Testimonials from '../../components/Testimonials'
import GetStarted from '../../components/GetStartedButton'
import MessageMe from '../../components/MessageMe'
import FbGateKeeper from '../../components/FbGateKeeper'

import FAQContainer from './FAQContainer'
import s from './SavoringYourChild.css'
import { testimonials } from './data'

type Props = {
  user: Object,
  onLogin: Function,
}

const SavoringYourChild = ({ user, onLogin }: Props) => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle text-center">How to honor your child&apos;s memory after the transition</h1>
        <p className="lead text-center">And savor the relationship in a healing way</p>
      </div>
      <div style={{ position: 'relative' }}>
        <h4>Intro form goes here</h4>
        <p>If user filled intro form, show modules instaed</p>
        {!user._id && <FbGateKeeper onLogin={onLogin} user={user} /> }
      </div>
      <hr className={s.hr} />
      <section>
        <h1 className="text-center">Parents share ...</h1>
        <Testimonials testimonials={testimonials} />
      </section>
      <GetStarted text="Get Started" />
      <hr className={s.hr} />
      <section>
        <h1 className="text-center">Learn how to ...</h1>
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <Benefits benefits={[
              'Enjoy thinking about your child again',
              'Focus on the good experiences',
              'Feel your child\'s presence even more',
              'Enjoy looking forward to your future',
              'Increase the peace & love in your life',
            ]}
            />
          </div>
        </div>
      </section>
      <hr className={s.hr} />
      <section>
        <FAQContainer />
      </section>
      <hr className={s.hr} />
      <GetStarted text="Get Started" />
      <hr className={s.hr} />
      <MessageMe />
    </div>
  </div>
)

export default withStyles(s)(SavoringYourChild)
