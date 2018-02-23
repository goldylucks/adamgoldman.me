// @flow

import React from 'react'
import axios from 'axios'

import history from '../../history'
import Benefits from '../../components/Benefits'
import Typeform from '../../components/Typeform'
import MessageMe from '../../components/MessageMe'
import Testimonials from '../../components/Testimonials'
import FAQ from '../../components/FAQ'
import FbGateKeeper from '../../components/FbGateKeeper'

type Props = {
  title: string,
  typeform: string,
  faq: [],
  testimonials: [],
  benefits: Array<String>,
  user: Object,
  typeformUserId: '',
  onLogin: Function
};

const savoringYourChildSectionForm = ({
  title, typeform, faq, benefits, testimonials, user, typeformUserId, onLogin,
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
            data-url={typeformUrl(typeform, user._id)}
            style={{ width: '100%', height: 800 }}
            onSubmit={() => submitModule(typeform, user._id)}
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
          <Testimonials testimonials={testimonials} />
          <hr />
        </section>
      )}
        { !benefits.length
        ? null
      : (
        <section>
          <h1 className="text-center">What will I learn?</h1>
          <div className="row justify-content-md-center">
            <div className="col col-lg-10">
              <Benefits benefits={benefits} />
            </div>
          </div>
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
        {!faq.length
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

function typeformUrl(typeform, userId) {
  try {
    const { gender, childName } = JSON.parse(localStorage.getItem('savoringIntroForm'))
    return `${typeform}?userid=${userId}
    &name=${childName}
    &his_her=${gender === 'male' ? 'his' : 'her'}
    &him_her=${gender === 'male' ? 'him' : 'her'}
    &he_she=${gender === 'male' ? 'he' : 'she'}
    `
  } catch (err) {
    global.console.error('err', err)
    return ''
  }
}

function submitModule(typeform, userId) {
  const formId = typeform.split('/')[4]
  axios.put(`/api/users/form/${userId}`, formId)
    .then(history.push('/savoring-your-child/modules'))
    .catch(err => global.console.error(err))
}
