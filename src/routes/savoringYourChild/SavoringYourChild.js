// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import history from '../../history'
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

class SavoringYourChild extends React.Component {
  props: Props

  render() {
    const { user, typeformUserId } = this.props
    return (
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
            data-url={`https://adamgoldman.typeform.com/to/AV33h6?typeformuserid=${typeformUserId}`}
            style={{ width: '100%', height: 500 }}
            onSubmit={() => this.getTypeformData()}
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
  }

  getTypeformData = () => {
    axios.get('api/typeform/AV33h6').then(result => this.typeformResponse(result))
  }

  typeformResponse = (response) => {
    /* eslint-disable max-len */
    /* eslint object-curly-newline: */
    const data = response.data.responses.filter((res, i) => res.hidden.typeformuserid === this.props.typeformUserId && i === 0)
    const genderChoices = [
      { choice: 'I’m a Mother grieving my son', gender: 'male', genderParent: 'female', param: 'his' },
      { choise: 'I’m a Mother grieving my daughter', gender: 'female', genderParent: 'female', param: 'her' },
      { choice: 'I’m a Father grieving my son', gender: 'male', genderParent: 'male', param: 'his' },
      { choice: 'I’m a Father grieving my daughter', gender: 'female', genderParent: 'male', param: 'her' },
    ]
    const getGender = genderChoices.filter(i => i.choice === data[0].answers.list_oRQpeZftOGOJ_choice)
    const typeformUserData = {
      gender: getGender[0].gender,
      childName: data[0].answers.textfield_gBIg1icFEszE,
      genderParent: getGender[0].genderParent,
      param: getGender[0].param,
    }
    localStorage.setItem('typeFormUserData', JSON.stringify(typeformUserData))
    history.push('/savoring-your-child/test1')
  }
}

export default withStyles(s)(SavoringYourChild)
