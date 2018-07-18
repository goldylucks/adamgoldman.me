// @flow
/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { cloudImg, scrollToTopOfNode } from '../../utils'
import Footer from '../../components/Footer'
import ExternalA from '../../components/ExternalA'
import Benefits from '../../components/Benefits'
import Testimonials from '../../components/Testimonials'

import testimonials from './testimonialsData'
import FAQContainer from './FAQContainer'
import s from './SavoringYourPet.css'

type Props = {}

class SavoringYourPet extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="container">
          <div className={`mainheading ${s.widthContainer}`}>
            <h1 className="sitetitle text-center">How to honor your furry friend&apos;s memory after the transition</h1>
            <p className="lead text-center">And savor the relationship in a healing way</p>
            <div className="text-center">
              <div>
                <img
                  src={cloudImg('adamgoldman.me/until-loved-animal')}
                  alt="Grief for pet love"
                  style={{ maxWidth: '100%' }}
                />
              </div>
              <span>Source: <ExternalA href="https://me.me/i/until-one-has-loved-an-animal-a-part-of-ones-21452968">me.me</ExternalA></span>
            </div>
          </div>
          <div className={s.widthContainer}>
            <p>Losing your beloved pet is one of <strong>the most devastating experiences a human can go through</strong>. The pain can be greater than losing a family member.</p>
            <p>The unconditional love, the acceptance, the beloved companionship ... It’s something you rarely get anywhere else.</p>
            <hr className={s.hr} />
            <h4 className="text-center">“The death of a pet can be a truly traumatic experience and create a large void in our hearts and lives” <br />- <strong>Ralph Ryback M.D.</strong></h4>
            <hr className={s.hr} />
            <h2 className="text-center" style={{ marginBottom: 20 }}>Do you feel any of the following?</h2>
            <ul>
              <li><strong>Emptiness</strong> as you go through your day?</li>
              <li><strong>Guilt & regret</strong> about what you did or didn’t do?</li>
              <li><strong>Doubt</strong> you will ever fill this void?</li>
            </ul>
            <p>You need to know <strong>you are NOT alone</strong> in this, and what you are going through is very, VERY understandable. It’s not uncommon to hear the following outcries from fellow grieving souls who’ve shared similar fate:</p>
            <ul>
              <li>"I have nothing to look forward to"</li>
              <li><strong>“A big part of me has died”</strong></li>
              <li>"Will this pain ever go away?"</li>
            </ul>
            <hr className={s.hr} />
            <h4 className="text-center">“Unattended grief is one of the leading underlying causes for depression” <br />- <strong>Steve Andreas, M.A.</strong></h4>
            <hr className={s.hr} />
            <p>This is exactly the reason why <strong>I’ve been dedicating the last year to</strong> develop and refine a method to <strong>soften this pain, and alleviate much of the suffering</strong> you and others are feeling right now.</p>
            <p>I’ve talked and listened to hundreds of people just like you, and helped dozens experiencing crippling grief and unbearable pain, while consulting with two amazing people (see below) whose work has impacted thousands of lives already.</p>
            <p>Our combined work gave birth to a new program, unlike anything we’ve seen or experienced before.</p>
            <hr className={s.hr} />
            <strong className="text-center">Presenting ...</strong>
            <h1 className="text-center">Savoring Your Pet</h1>
            <p className="lead">A step by step gentle journey from grief to appreciation, that will show you how to transform and soften your grief in a healthier way, alleviate much of your pain, so you can expect to ...</p>
            {this.renderBenefitsSection()}
            <h2 className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>How is this program different?</h2>
            <p>I know we all had our share of things that did not work, so let me start by listing what we will NOT be doing together:</p>
            <div>
              <div>❌ Medication</div>
              <div>❌ Life advice or coaching</div>
              <div>❌ Positive affirmations</div>
              <div>❌ Traditional therapy and psychoanalysis</div>
              <div>❌ Mediums / channeling / other dimension communication</div>
              <div>❌ New age woo-woo methods</div>
            </div>
            <h5 className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>It’s not about saying goodbye</h5>
            <p>Most people (even professionals!) make the common mistake of thinking grief is about learning to say goodbye. I have NOT found this to be useful!</p>
            <p>Why would any of us would want to say goodbye to such a beautiful, ever loving, unconditionally accepting relationship?</p>
            <p>I don't want you to say goodbye, I want you to <strong>learn how to say hello again</strong>. How to think of your loved one in a way that honors them, and <strong>treasure the good experiences</strong> you shared, and everything that relationship has given you.</p>
            <p>One of the first things you’ll soon learn is how to gently implement the following simple yet beautiful wisdom:</p>
            <div className="text-center">
              <img
                src={cloudImg('adamgoldman.me/dr-sauss-it-happened')}
                alt="Smile because it happened"
                style={{ maxWidth: '100%' }}
              />
              <span>Source: <ExternalA href="https://www.scoopnest.com/user/Jestepar/758043485618528257-don-t-cry-because-it-s-over-smile-because-it-happened-dr-seuss-quote-thankfulthursday">scoopnest.com</ExternalA></span>
            </div>
            <hr className={s.hr} />
            <h2 className="text-center" style={{ marginBottom: 30 }}>Here’s what you’re getting when you get your copy of the program today:</h2>
            {this.renderModules()}
            {this.renderBuyNowScrollButton()}
            <hr className={s.hr} />
            <div className="text-center">
              <h2>Trusted by a leading brand</h2>
              <img
                src={cloudImg('i-love-vet-cover_y5radw')}
                alt="Animal grief partners"
                style={{ maxWidth: '100%' }}
              />
              <ExternalA href="https://iloveveterinary.com/">I Love Veterinary</ExternalA>
            </div>
          </div>
          <div className={s.widthContainer}>
            <hr className={s.hr} />
          </div>
          {this.renderAndreas()}
          <div className={s.widthContainer}>
            <hr className={s.hr} />
            <div className={s.widthContainer}>
              {this.renderAboutMeSection()}
            </div>
            <hr className={s.hr} />
          </div>
          {this.renderTestimonialsSection()}
          <div className={s.widthContainer}>
            <hr className={s.hr} />
            <h2 className="text-center">“So how much will it cost me?”</h2>
            <p>I have invested thousands of dollars, and countless days and nights of work and research into this program, but I want to keep it affordable for you and others who are going through this, so I am asking a lot less than the actual value of the program.</p>
            <div ref={(el) => { this.paymentButton1 = el }}>
              <h4 className="text-center"><small>Instead of the full price of </small><s>312$</s></h4>
              <h3 className="text-center"><small>Order today for</small><br /> <strong>Only 97$</strong></h3>
              {this.renderPaymentButton()}
              {this.renderPaypalSecure()}
            </div>
            <hr className={s.hr} />
            <p>That’s right, you can <strong>guarantee</strong> your <strong>lifetime access</strong> to this program <strong>for less than the price of 1 therapy session</strong>.</p>
            <p>I am so confident this will help you beyond your expectations, I’m willing to personally take all the risk off your hands when you invest in this today, with a double guarantee:</p>
            <div className="text-center" style={{ marginBottom: 40 }}>
              <h4 className>30 days no hassle money back guarantee</h4>
              <img
                src={cloudImg('30-day-refund-guarantee_ug806q')}
                alt="30 day refund guarantee"
              />
            </div>
            <h4 className="text-center" style={{ marginBottom: 40 }}>Complementary private session guarantee (100$ value)</h4>
            <p>In fact, I’m willing to make this even easier for you to get on board today. I charge 200$ for a private 1 hour session. and after you’re done with this program, if you still don’t feel this is one of the best decisions you ever took since embarking on your journey of grief, I will not only refund you in full, I will get on a complementary one on one 30 minute private video session with you, to explore other methods to assist you and facilitate in your healing.</p>
            <p>You either get immense benefits from this program, or you get a 100$ worth free session. Either way, it’s a win-win for you.</p>
            <hr className={s.hr} />
            <h5 style={{ marginBottom: 30 }} className="text-center">No need to continue suffering more than you have to</h5>
            <p>
              <strong>Instead of feeling pain</strong> as you think of your beloved close companion, you have the opportunity to literally rewire your mind to <strong>reclaim the good feelings, warmth and appreciation</strong> about everything you valued and didn’t want to lose.
            </p>
            <p>
              <strong>Instead of losing sleep</strong> and missing any more opportunities for a better life, you can learn how to <strong>let the qualities you appreciate</strong> in your furry friend, compel and <strong>draw you forward</strong> to an ever <strong>brightening future</strong>.
            </p>
            <p>I am very curious to hear about all the ways the decision you took today has brought peace, comfort and love to your life.</p>
            <p>Best to you on your journey,
              <br />
            - <strong>Adam Goldman</strong>
            </p>
            {this.renderPaymentButton()}
            {this.renderPaypalSecure()}
            <p style={{ marginTop: 40 }}><strong>Ps.</strong>Yes, you can literally rewire your mind, body and feelings, to transform your current grief to feeling of appreciation, in way that will honor your lost furry friend in a comprehensive way.</p>
            <p><strong>Ps.s. </strong>Remember all the risk is on me, so when you gain access today there’s nothing for you to lose other than unwanted negative feelings.</p>
            <section style={{ marginTop: 40 }}>
              <FAQContainer />
            </section>
          </div>
        </div>
        <div className="container container-footer">
          <Footer />
        </div>
      </div>
    )
  }

  renderBenefitsSection() {
    return (
      <section>
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <Benefits benefits={[
              'Enjoy thinking about your beloved furry friend again',
              'Focus on the good experiences shared',
              'Feel their love & presence even more',
              'Look forward to a brightening future',
              'Increase the peace & love in your life',
                ]}
            />
          </div>
        </div>
        <small>* Results may vary (<ExternalA href="/legal-stuff" style={{ color: 'inherit' }}>full disclaimer</ExternalA>)</small>
      </section>
    )
  }

  renderModules() {
    return (
      <div>
        <div>
          <h3>Module 1: Clarity and order</h3>
          <p>
            We’ll go over 6 common aspects of grief and carefully separate them to distinct concepts, before we examine and transform them one by one.
            <br /> <strong>✔️ Value: 30$</strong>
          </p>
        </div>
        <div>
          <h3>Module 2: Peaceful Ending</h3>
          <p>Soften the unpleasantness and negative feelings regarding the moment of transition, and the events regarding the transition, and rewire your mind to go back to the happy memories. This will also pacify disturbing or graphic images you might still have.            <br /> <strong>✔️ Value: 47$</strong>
          </p>
        </div>
        <div>
          <h3>Module 3: Savoring future plans</h3>
          <p>Increase the peace and acceptance towards the future that will not be, and events you might have planned with your beloved furry friend.            <br /> <strong>✔️ Value: 47$</strong>
          </p>
        </div>
        <div>
          <h3>Module 4: Reunion</h3>
          <p>Say “hello” again, and regain access to the good times shared, and what you valued in the relationship and didn’t want to lose.            <br /> <strong>✔️ Value: 47$</strong>
          </p>
        </div>
        <div>
          <h3>Module 5: Relationship Consolidation</h3>
          <p>Every relationship has ups and downs. Learn how to intensify the good feelings from the good experiences, and soften and discharge bad experiences and events you had.            <br /> <strong>✔️ Value: 47$</strong>
          </p>
        </div>
        <div>
          <h3>Module 6: Special Days</h3>
          <p>Some days of the year are usually harder than others, like memorial days, anniversary days for getting or adopting your pet, or their birthday. In this process you learn how to use these days as an opportunity to remind yourself how lucky you are to have had them in your life, reminisce about your relationship and honor it even more.            <br /> <strong>✔️ Value: 47$</strong>
          </p>
        </div>
        <div>
          <h3>Module 7: Re-engaging the future</h3>
          <p>Now that we transformed much of the emptiness to presence and appreciation, it’s time to create a compelling ever brightening future, as you learn how to let the qualities in this valued relationship draw you forward.            <br /> <strong>✔️ Value: 47$</strong>
          </p>
        </div>
        <div className="text-center">
          <h2>How much does it worth?</h2>
        30$ + 47$ + 47$ + 47$ + 47$ + 47$ + 47$ =
          <h3 style={{ marginTop: 20 }}>312$</h3>
        </div>
      </div>
    )
  }

  renderBuyNowScrollButton() {
    return (
      <button onClick={() => scrollToTopOfNode(this.paymentButton1, 1000)} className={`btn btn-primary ${s.goToPaymentButton}`}>Go To<br /> Payment</button>
    )
  }

  renderAndreas() {
    return (
      <div>
        <div className={s.widthContainer}>

          <h2 className="text-center">Made possible by decades of research and field experience</h2>
          <p>Many parts of this program are based on the work of Steve and Connirae Andreas, a couple of humble and extremely precise personal change practitioners, with <strong>more than 80+ years of experience in the field of psychology and personal change</strong>.</p>
          <h6 className="text-center">Connirae & Steve Andreas</h6>
        </div>
        <div className={s.andreasContainerBoth}>
          <div className={s.andreasContainerIndividual}>
            <img
              src={cloudImg('adamgoldman.me/Connirae_Andreas')}
              alt="Connirae Andreas"
            />
            <ExternalA className={s.andreasCaption} href="https://andreasnlptrainings.com/connirae-andreas-bio/">Connirae Andreas, Ph.D., master trainer</ExternalA>
          </div>
          <div className={s.andreasContainerIndividual}>
            <img
              src={cloudImg('adamgoldman.me/Steve_Andreas')}
              alt="Steve Andreas"
            />
            <ExternalA className={s.andreasCaption} href="http://steveandreas.com/cv.html">Steve Andreas, M.A., master trainer</ExternalA>
          </div>
        </div>
        <div className={s.widthContainer}>
          <blockquote style={{ marginTop: 20 }}>
            Adam Goldman is a brilliant new colleague whose depth and breadth of understanding of the principles of personal change is exceptional, combined with the hands-on skills to manifest this in the experience of clients.
            <br />
            <br />
            Perceptive, intelligent, creative, confident, one of the fastest and most thorough learners I’ve ever met, able and willing to question established wisdom and discuss differences of opinion openly when that’s appropriate.
            <br />
            <br />

He has created online programs to guide participants through effective change processes on their own, a huge opportunity for so many who would otherwise not be able to even think of affording it.
            <br />
            <br />
His work is a detailed challenge to the rest of us to learn how to “up our game” or be left behind in the dustbin of history.
            <br />
            <strong>- Steve Andreas, MA, master trainer and author.</strong>
          </blockquote>
        </div>
      </div>
    )
  }
  renderTestimonialsSection() {
    return (
      <section>
        <div className={s.widthContainer}>
          <p className="text-center">But don’t take my word for it, listen to what people I’ve worked with on grief have to say ... <span className={s.asterixDisclaimer}>*</span></p>
        </div>
        <Testimonials testimonials={testimonials} />
        <small>* Results may vary (<ExternalA href="/legal-stuff" style={{ color: 'inherit' }}>full disclaimer</ExternalA>)</small>
      </section>
    )
  }
  renderAboutMeSection() {
    return (
      <section>
        <h1 className="text-center">Who am I to guide you through this journey?</h1>
        <div className={s.aboutContainer}>
          <img
            src={cloudImg('adamgoldman.me/profile-smiling')}
            alt="About Adam Goldman"
          />
          <p className="lead">
            I&apos;ve been guiding people through and developing personal change processes for almost a decade.
            <br />
            <br />
          I’ve gone through countless courses, videos, books, and programs, and <strong>my passion is distilling</strong> the most useful and <strong>powerful processes into easy to follow, step by step personal journeys</strong> for people just like you to experience in a very gentle and comfortable way.
          </p>
        </div>
      </section>
    )
  }
  renderPaymentButton() {
    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="text-center">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="landing_page" value="billing" />
        <input type="hidden" name="hosted_button_id" value="5RVFWYZP5HMBG" />
        <input type="image" src="http://res.cloudinary.com/goldylucks/image/upload/v1531924994/get-access-now_pqssf4.jpg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    )
  }

  renderPaypalSecure() {
    return (
      <div className="text-center">
        <img
          src={cloudImg('pay-pal-secured_z1lxgq')}
          alt="Paypal secured"
          style={{ maxWidth: '100px', marginTop: 10, marginBottm: 10 }}
        />
        <div>
          <span>Source: <ExternalA href="https://e-trimas.com/page/payment-method">e-trimas.com</ExternalA></span>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(SavoringYourPet)
