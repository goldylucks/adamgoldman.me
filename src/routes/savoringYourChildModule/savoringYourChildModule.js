// @flow

import React from 'react'

import Typeform from '../../components/Typeform'
import MessageMe from '../../components/MessageMe'
import Testimonial from '../../components/Testimonials'
import FAQ from '../../components/FAQ'
import FbGateKeeper from '../../components/FbGateKeeper'

type Props = {
  title: string,
  typeform: string,
  faq: [],
  testimonials: [],
  user: Object,
  typeformUserId: '',
  onLogin: Function
};

const savoringYourChildSectionForm = ({
  title, typeform, faq, testimonials, user, typeformUserId, onLogin,
}:
Props) => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="posttitle">{title}</h1>
      </div>
      <div>
        <div>User typeform ID: {typeformUserId},</div>
        <div>User ID {user._id},</div>
      </div>
      <div style={{ position: 'relative' }}>
        <Typeform
          data-url={typeform}
          style={{ width: '100%', height: 800 }}
          onSubmit={() => console.log('submit!')}
          user={user._id}
        />
        {!user._id &&
        <FbGateKeeper onLogin={onLogin} user={user} />
            }
      </div>
      <hr />
      { !testimonials.length
        ? null
      : (
        <section>
          <h1 className="text-center">Parents Share</h1>
          <Testimonial testimonials={testimonials} />
          <hr />
        </section>
      )}
      { !faq.length
            ? null
            : (
              <section>
                <h1 className="text-center">F.A.Q.</h1>
                <FAQ faq={faq} />
                <hr />
              </section>
          )}
      <MessageMe />
    </div>
  </div>
)

export default savoringYourChildSectionForm
