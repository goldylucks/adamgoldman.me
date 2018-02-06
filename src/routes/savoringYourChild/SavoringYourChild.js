// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import FA from 'react-fontawesome'

import { MESSENGER_LINK } from '../../constants'

import Testimonial from '../../components/Testimonial'

import FAQ from './FAQ'
import s from './SavoringYourChild.css'

const testimonials = [
  {
    imgSrc:"https://scontent.fbkk5-2.fna.fbcdn.net/v/t1.0-1/p50x50/26733326_10210388881990002_952210852032135504_n.jpg?_nc_eui2=v1%3AAeHkc-rXfdaeKHX87H2QArMHkj7ZPBo7Vr_lRiGj-CSJQS0KI_vtBf3yH8tILiGv3GsLTPUTTjrntauvSeZcP3TstpVLFtlUN2qgRbArKdInmw&oh=2b1d2dab6238f5a1f9533edece533ac4&oe=5AE4802D",
    text:"It is my  pleasure to introduce you to Adam Goldman. I find his techniques highly valuable and have had some great responses from my friends 😍",
    name:"Tracy Soussi",
    nameMeta:"Bereaved mother, admin & facilitator for bereaved parents"
  },
  {
    imgSrc:"https://scontent.fbkk5-2.fna.fbcdn.net/v/t1.0-1/p50x50/22154425_10213275472895370_2302103244406601177_n.jpg?_nc_eui2=v1%3AAeEchDrciuRY8NXn4x5-hlojvQ8xrEpvPTyh8mKzcfKde0U0DOO_CQ4xOdEjFuVjbQK7xwf_vjIex8QDTp8qffg8zZAPsKaetdYkov6ToX--tA&oh=c57603369d9abf5698892e1be25f7468&oe=5B1CAEF6",
    text:"I love working with Adam. I like how he gets me to look at things in my life in a different light. He is really helping me walk through my journey of grief. Thank you Adam.",
    name:"Tywana M. Smith",
    nameMeta:"Bereaved mother, facilitator of 'Helping Parents Heal'",
  },
  {
    imgSrc:"https://scontent.fbkk5-2.fna.fbcdn.net/v/t1.0-1/p50x50/11058132_10155845648775035_3498471414602713980_n.jpg?_nc_eui2=v1%3AAeG23WHkztA0gJb8qztbJtRGeJ8wCH2TCHWFdnJKvayzhbV5Lxn2WUWwPiHCAUg_k_OebH_uLDlmVb2Z5cnp4qwpJ54COhpRmCJpx0DEdtc9UQ&oh=9dab72ad6f94d61877a2f5603e7b6570&oe=5B165F24",
    text:"If I had not experienced this first hand I would never have thought it possible since I was absolutely certain that I had lost my son forever. I know now with certainty that he will never be more than a just thought away. I thank you Adam from the bottom of my heart for sharing this incredible gift of insight.",
    name:"Sue Zetteler",
    nameMeta:"Bereaved mother",
  },
]

const SavoringYourChild = () => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle text-center">How to honor your child&apos;s memory after the transition</h1>
        <p className="lead text-center">And appreciate the relationship you had in a resourceful way</p>
      </div>
      <div id="typeform">Typeform goes here ...</div>
      <hr className={s.hr} />
      <h1 className="text-center">Parents share ...</h1>
        <Testimonial
          testimonials={testimonials}
        />
      <a href="#typeform" className={`btn btn-primary ${s.ctaButton}`}>GET STARTED</a>
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
      <h1 className="text-center">F.A.Q.</h1>
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          <FAQ />
        </div>
      </div>
      <hr className={s.hr} />
      <a href="#typeform" className={`btn btn-primary ${s.ctaButton}`}>GET STARTED</a>
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
