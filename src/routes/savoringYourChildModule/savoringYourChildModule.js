// @flow

import React from 'react'

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
  onLogin: Function,
  onSubmitModule: Function,
};

class savoringYourChildSectionModule extends React.Component {
  state = {
    introForm: 'VHYYNS',
  }

  componentDidMount() {
    this.validateUser()
  }

  props: Props

  render() {
    const {
      title, typeform, faq, benefits, testimonials, user, onLogin, onSubmitModule,
    } = this.props
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="posttitle">{title}</h1>
          </div>
          <div style={{ position: 'relative' }}>
            <Typeform
              data-url={typeformUrl(typeform, user)}
              style={{ width: '100%', height: 800 }}
              onSubmit={() => submitModule(typeform, onSubmitModule)}
            />
            {!user._id &&
            <FbGateKeeper onLogin={onLogin} user={user} />
            }
          </div>
          <hr />
          {!testimonials.length
            ? null
            : (
              <section>
                <h1 className="text-center">Parents Share</h1>
                <Testimonials testimonials={testimonials} />
                <hr />
              </section>
            )}
          {!benefits.length
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
          {!faq.length
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
  }

  validateUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      const findForm = user.form.includes(this.state.introForm)
      if (!findForm) {
        history.push('/savoring-your-child')
      }
    } else {
      history.push('/savoring-your-child')
    }
  }
}

export default savoringYourChildSectionModule

function typeformUrl(typeform, { _id, gender, childName }) {
  try {
    return `${typeform}?userid=${_id}
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

function submitModule(typeform, onSubmitModule) {
  const formId = typeform.split('/')[4]
  onSubmitModule(formId)
}
