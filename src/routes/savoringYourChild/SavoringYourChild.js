// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Benefits from '../../components/Benefits'
import Typeform from '../../components/Typeform'
import Testimonials from '../../components/Testimonials'
import GetStarted from '../../components/GetStartedButton'
import MessageMe from '../../components/MessageMe'

import FAQContainer from './FAQContainer'
import s from './SavoringYourChild.css'
import { testimonials } from './data'

type Props = {
  user: Object,
  typeformUserId: Object,
}

const SavoringYourChild = ({ user, typeformUserId }: Props) => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle text-center">How to honor your child&apos;s memory after the transition</h1>
        <p className="lead text-center">And appreciate the relationship you had in a resourceful way</p>
      </div>
      <div>
        <div>typeformUserId: {typeformUserId},</div>
        <div>User ID {user._id},</div>
      </div>
      <Typeform
        data-url={`https://adamgoldman.typeform.com/to/VHYYNS?typeformuserid=${typeformUserId}`}
        style={{ width: '100%', height: 500 }}
        onSubmit={() => global.console.log('submit!')}
      />
      <hr className={s.hr} />
      <section>
        <h1 className="text-center">Parents share ...</h1>
        <Testimonials testimonials={testimonials} />
      </section>
      <GetStarted text="Get Started" />
      <hr className={s.hr} />
      <section>
        <h1 className="text-center">What will I learn?</h1>
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <Benefits benefits={[
                'How to enjoy thinking about your child',
    'How to focus on the good experiences',
    'How to look forward to your future',
    'How to increase the peace, love & acceptance in your life',
    'How to feel your child\'s presence even more',
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
