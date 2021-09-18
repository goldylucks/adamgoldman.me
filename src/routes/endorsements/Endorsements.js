/* eslint-disable react/jsx-curly-brace-presence */
// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import ExternalA from '../../components/ExternalA'
import Markdown from '../../components/Markdown'
import { cloudImg } from '../../utils'

import './Endorsements.css'

type Props = {}

class Endorsements extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className={`container ${s.widthContainer}`}>
          <article className={s.testimonial}>
            <h1 className='text-center'>“A challenge to the rest of us”</h1>
            <Markdown
              className={s.testimonialText}
              source={`
Adam Goldman is a brilliant new colleague whose depth and breadth of understanding of the principles of personal change is exceptional, combined with the hands-on skills to manifest this in the experience of clients. Perceptive, intelligent, creative, confident, one of the fastest and most thorough learners I’ve ever met, able and willing to question established wisdom and discuss differences of opinion openly when that’s appropriate.

He has created online programs to guide clients through effective change processes on their own, a huge opportunity for so many who would otherwise not be able to even think of affording it. His work is a detailed challenge to the rest of us to learn how to “up our game” or be left behind in the dustbin of history.
`}
            />
            <img
              className={`text-center ${s.testimonialImg}`}
              src={cloudImg('adamgoldman.me/Steve_Andreas')}
              alt='Steve Andreas'
            />
            <div className='text-center'>
              <ExternalA href='http://steveandreas.com/cv.html'>
                Steve Andreas
              </ExternalA>{' '}
              - MA, master trainer, author, publisher
            </div>
          </article>
          <hr className={s.separator} />
          <article className={s.testimonial}>
            <h1 className='text-center'>“researched, potent, and effective”</h1>
            <Markdown
              className={s.testimonialText}
              source={`
I was planning on hiring a therapist for several long, drawn out, expensive sessions, but now I don't need to do that. In just one session with Adam, I felt the lingering pain from an unpleasant experience dissolve within the span of an hour. His techniques are well researched, potent, and effective. If you are feeling nervous or scared to do a session - push through the resistance and realize this could be the breakthrough you've been waiting for ✌
`}
            />
            <img
              className={`text-center ${s.testimonialImg}`}
              src='http://res.cloudinary.com/goldylucks/image/upload/v1533918214/lilli-luxe_thdcny.jpg'
              alt='Lillie Lux Feedback'
            />
            <div className='text-center'>
              <ExternalA href='http://lillisadventures.com/'>
                Lilli Luxe
              </ExternalA>{' '}
              - model & influencer, 1.3M subscribers
            </div>
          </article>
          <hr className={s.separator} />
          <article className={s.testimonial}>
            <h1 className='text-center'>“Guided epiphanies for change”</h1>
            <Markdown
              className={s.testimonialText}
              source={`
I've been a counselor for 11 years and have also been to a handful of counselors for myself.

The one-on-one counseling I've experienced was not as powerful as what you're able to accomplish in just one hour with a large group of people.

What you're doing is very powerful. it is effective on such a personal level. Which is surprising considering I'd never met you and was surrounded by mostly strangers. Each person is allowed to go to a very intimate place and make life altering changes purely through thought.

This was not my first attempt at working on my current mindset. I have worked through the same thoughts that I worked through in your session. Even with my background and with the help of counselors, I was able to gain insight and new perspectives in your session without ever opening my mouth. I simply participated in your exercises and applied them to personal experience as you guided the group. 

I have been shocked by the lack of skill that some "professionals" offer in their expensive therapy sessions. With my advanced degree, education, and experience working in the counseling field, I am critical of people in this field and have been hugely disappointed by many. I say this only to further enhance the tribute I give to the 2 hour group experience I had with you. 

I want to learn these tactics and share them with others. Thank you for changing the world by helping others make changes from within. ❤

My counseling career was a chapter in my book of life that I loved and felt it was where I needed to be. I have since been starting a new chapter but if, in the future if I decide to go back to counseling, I will definitely utilize some of the techniques you use. 

Epiphanies are most valuable when you have them yourself, not when other's share theirs. This is something valuable that you offer. Do you have a name for your technique? It is guided epiphanies for change.
              
`}
            />
            <img
              className={`text-center ${s.testimonialImg}`}
              src='https://res.cloudinary.com/goldylucks/image/upload/c_thumb,w_200,g_face/v1533917342/marcy-lela.jpg'
              alt='Marcy Lela Feedback'
            />
            <div className='text-center'>
              Marcy Lela - MA, Juevnile, counselor, 11+ years of exp.
            </div>
          </article>
          <hr className={s.separator} />
          <article className={s.testimonial}>
            <h1 className='text-center'>“An immediate shift”</h1>
            <Markdown
              className={s.testimonialText}
              source={`
Adam and I worked on some excellent techniques to eliminate a self limiting belief I had and I noticed an immediate shift. I highly recommend Adam and his work!`}
            />
            <img
              className={`text-center ${s.testimonialImg}`}
              src='https://res.cloudinary.com/goldylucks/image/upload/v1533918910/julia_zstzjk.jpg'
              alt='Julia Wojnar Feedback'
            />
            <div className='text-center'>
              Julia Wojnar - Founder & speaker,{' '}
              <ExternalA href='https://www.unleashyourpresence.com'>
                Unleash Your Presence
              </ExternalA>
            </div>
          </article>
          <hr className={s.separator} />
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Endorsements)
