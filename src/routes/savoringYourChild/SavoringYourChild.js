/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { cloudImg, scrollToTopOfNode } from '../../utils'
import ExternalA from '../../components/ExternalA'
import Benefits from '../../components/Benefits'
import Testimonials from '../../components/Testimonials'
import GetStarted from '../../components/GetStartedButton'
import Link from '../../components/Link'

import MobileNav from './MobileNav'
import MessengerFixed from './MessengerFixed'
import FAQContainer from './FAQContainer'
import s from './SavoringYourChild.css'
import { testimonials } from './data'

export const TOP_BAR_HRIGHT = 56

class SavoringYourChild extends React.Component {
  componentWillMount() {
    trackFbVisitor()
  }
  render() {
    return (
      <div>
        <MessengerFixed />
        {this.renderTopBar()}
        <div className="container">
          <div className={`mainheading ${s.widthContainer}`}>
            <h1 className="sitetitle text-center">How to honor your child&apos;s memory after the transition</h1>
            <p className="lead text-center">And savor the relationship in a healing way</p>
          </div>
          <div className="text-center" style={{ marginBottom: 20 }}>
            <div>
              <img
                src={cloudImg('losing-a-child-no-matter-what-age_ny2swe')}
                alt="Grief for child"
                style={{ maxWidth: '100%' }}
              />
            </div>
            <span>Source: <ExternalA href="http://yourtribute.com">yourtribute.com</ExternalA></span>
          </div>
          <div className={s.widthContainer}>
            <p>Losing your child is one of <strong>the most devastating experiences a parent can go through</strong>.</p>
            <p>The unconditional love, acceptance, connection ... It’s something you rarely get to feel anywhere else.</p>
            <hr className={s.hr} />
            <h4 ref={(el) => { this.elTrauma = el }} className="text-center">“The loss of a child is the most devastating experience a parent can face-and missing the child never goes away. A piece of yourself is lost and your future is forever changed.” <br />- <strong>Margo F. Weiss, PhD.</strong></h4>
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
            <p>This is exactly the reason why <strong>I’ve been dedicating the last year to</strong> develop and refine a method to <strong>soften this pain, and alleviate much of the suffering</strong> you and fellow parnets are feeling right now.</p>
            <p>I’ve talked and listened to hundreds of parents just like you, and helped dozens experiencing crippling grief and unbearable pain, while consulting with two amazing people (see below) whose work has impacted thousands of lives already.</p>
            <p>Our combined work gave birth to a new program, unlike anything we’ve seen or experienced before.</p>
            <hr className={s.hr} />
            <strong className="text-center">Presenting ...</strong>
            <h1 ref={(el) => { this.elProgram = el }} className="text-center">Savoring Your Child</h1>
            <p className="lead">A step by step gentle journey from grief to appreciation, that will show you how to transform and soften your grief in a healthier way, alleviate much of your pain, so you can expect to ... <span className={s.asterixDisclaimer}>*</span></p>
            {this.renderBenefitsSection()}
            <h2 className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>How is this program different?</h2>
            <p>I know we all had our share of things that did not work, so let me start by listing what we will NOT be doing together:</p>
            <div>
              <div>❌ Medication</div>
              <div>❌ Life advice or coaching</div>
              <div>❌ Positive affirmations</div>
              <div>❌ Traditional therapy and psychoanalysis</div>
              <div>❌ New age woo-woo methods</div>
            </div>
            <h5 className="text-center" style={{ marginTop: 20, marginBottom: 20 }}>It’s not about saying goodbye</h5>
            <p>Most people (even professionals!) make the common mistake of thinking grief is about learning to say goodbye. I have NOT found this to be useful!</p>
            <p>Why would any of us would want to say goodbye to such a beautiful, ever loving, unconditionally accepting relationship?</p>
            <p>I don't want you to say goodbye, I want you to <strong>learn how to say hello again</strong>. How to think of your precious child in a way that honors them, <strong>treasure the good experiences</strong> you shared, and everything that relationship has given you.</p>
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
            <h2 ref={(el) => { this.elModules = el }} className="text-center" style={{ marginBottom: 30 }}>Here’s what you’re getting when you get your copy of the program today:</h2>
            <div>
              {this.renderModules()}
            </div>

            <div>
              {this.renderBuyNowScrollButton()}
            </div>
            <hr className={s.hr} />
            {this.renderPartenrshipsSection()}
            <hr className={s.hr} />
            <GetStarted />
            <hr className={s.hr} />
            {this.renderAboutMeSection()}
          </div>
          <hr className={s.hr} />
          {this.renderTestimonialsSection()}
          <hr className={s.hr} />
          <div className={s.widthContainer}>
            <h2 ref={(el) => { this.elBuyNow = el }} className="text-center">“So how much will it cost me?”</h2>
            <p>I have invested thousands of dollars, and countless days and nights of work and research into this program, but I want to keep it affordable for you and others who are going through this, so I am asking a lot less than the actual value of the program.</p>
          </div>
          <div>
            <h4 className="text-center"><small>Instead of the full price of </small><s>312$</s></h4>
            <div>
              {this.renderFinalPrice()}
            </div>
            <div>
              {this.renderPaymentButton()}
            </div>
            <div>
              {this.renderPaypalSecure()}
            </div>
          </div>
          <div className={s.widthContainer}>
            <hr className={s.hr} />
            <p>That’s right, you can <strong>guarantee</strong> your <strong>lifetime access</strong> to this program <strong>for less than the price of 1 therapy session</strong>.</p>
            <p>I am so confident this will help you beyond your expectations, I’m willing to personally take all the risk off your hands when you invest in this today, with a double guarantee:</p>

            <div ref={(el) => { this.elGuarantee = el }} className="text-center" style={{ marginBottom: 40 }}>
              <h4 className="text-center">30 days no hassle money back guarantee</h4>
              <img
                src={cloudImg('30-day-refund-guarantee_ug806q')}
                alt="30 day refund guarantee"
              />
            </div>
            <h4 className="text-center" style={{ marginBottom: 40 }}>Complementary private session guarantee ($100 value)</h4>
            <p>In fact, I’m willing to make this even easier for you to get on board today. I charge 200$ for a private 1 hour session. and after you’re done with this program, if you still don’t feel this is one of the best decisions you ever took since embarking on your journey of grief, I will not only refund you in full, I will get on a complementary one on one 30 minute private video session with you, to explore other methods to assist you and facilitate in your healing.</p>
            <p>You either get immense benefits from this program, or you get a free $100 worth session. Either way, it’s a win-win for you.</p>
            <hr className={s.hr} />
            <h5 style={{ marginBottom: 30 }} className="text-center">No need to continue suffering more than you have to</h5>
            <p>
              <strong>Instead of feeling pain</strong> as you think of your child, you have the opportunity to literally rewire your mind to <strong>reclaim the good feelings, warmth and appreciation</strong> about everything you valued and didn’t want to lose.
            </p>
            <p>
              <strong>Instead of losing sleep</strong> and missing any more opportunities for a better life, you can learn how to <strong>let the qualities you appreciate</strong> in your child compel and <strong>draw you forward</strong> to an ever <strong>brightening future</strong>.
            </p>
            <p>I am very curious to hear about all the ways the decision you took today has brought peace, comfort and love to your life.</p>
            <p>Best to you on your journey,
              <br />
            - <strong>Adam Goldman</strong>
            </p>

            {this.renderBuyNowScrollButton()}
            <p style={{ marginTop: 40 }}><strong>P.S.</strong>Yes, you can literally rewire your mind, body and feelings, to transform your current grief to feeling of appreciation, in way that will honor your lost child in a comprehensive way.</p>
            <p><strong>P.P.S. </strong>Remember all the risk is on me, so when you gain access today there’s nothing for you to lose other than unwanted negative feelings.</p>
          </div>
          <section>
            <FAQContainer />
          </section>
          <hr className={s.hr} />
        </div>
      </div>
    )
  }

  renderPainsSection() {
    return (
      <section>
        <h1 className="text-center">Common pains parents share</h1>
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <div className={s.painPoint}>- &quot;I&apos;m just existing&quot; </div>
            <div className={s.painPoint}>- &quot;I have nothing to look forward to&quot; </div>
            <div className={s.painPoint}>- &quot;I have this image stuck in my head&quot; </div>
            <div className={s.painPoint}>- &quot;All I feel is sorrow & loss&quot; </div>
            <div className={s.painPoint}>- &quot;This pain will never go away&quot; </div>
            <p>If any of the above feel familiar to you, please realize you are NOT alone in this!</p>
            <p>Many parents Ive worked with felt the same way before doing the program.</p>
          </div>
        </div>
      </section>
    )
  }
  renderBenefitsSection() {
    return (
      <section>
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
        <small>* Results may vary (<ExternalA href="/legal-stuff" style={{ color: 'inherit' }}>full disclaimer</ExternalA>)</small>
      </section>
    )
  }

  renderTestimonialsSection() {
    return (
      <section>
        <h1 className="text-center">What parents are saying ... <span className={s.asterixDisclaimer}>*</span></h1>
        <Testimonials testimonials={testimonials} />
        <small>* Results may vary (<ExternalA href="/legal-stuff" style={{ color: 'inherit' }}>full disclaimer</ExternalA>)</small>
      </section>
    )
  }
  renderPartenrshipsSection() {
    return (
      <section ref={(el) => { this.elPartnership = el }}>
        <h1 className="text-center" style={{ marginBottom: 30 }}>Partnerships and acknowledgements</h1>
        <h3 className="text-center">Helping Parents Heal</h3>
        <p className="lead">I work closely with Helping Parents Heal, a non profit organization dedicated to support parents in a very accepting, loving, non judgemental way, regardless of personal belief.</p>
        <img
          src={cloudImg('adamgoldman.me/helping-parents-heal-cover-min')}
          alt="Helping Parents Heal"
          style={{ maxWidth: '100%' }}
        />
        <h3 className="text-center" style={{ marginTop: 50 }}>Connirae & Steve Andreas</h3>
        <p className="lead">Connirae and Steve and  have developed the base for many of the processes we will work together through, among countless other books, programs, and training material.</p>
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
        <blockquote style={{ marginTop: 20 }}>
            Adam Goldman is a brilliant new colleague whose depth and breadth of understanding of the principles of personal change is exceptional, combined with the hands-on skills to manifest this in the experience of clients.
          <br />
          <br />
            Perceptive, intelligent, creative, confident, one of the fastest and most thorough learners I’ve ever met, able and willing to question established wisdom and discuss differences of opinion openly when that’s appropriate.
          <br />
          <br />

He has created open-source online programs to guide parents through effective change processes on their own, a huge opportunity for so many who would otherwise not be able to even think of affording it.
          <br />
          <br />
His work is a detailed challenge to the rest of us to learn how to “up our game” or be left behind in the dustbin of history.
          <br />
          <strong>- Steve Andreas, MA, master trainer and author.</strong>
        </blockquote>

      </section>
    )
  }
  renderAboutMeSection() {
    return (
      <section className={s.widthContainer} ref={(el) => { this.elAbout = el }}>
        <h1 className="text-center">About Me (Adam)</h1>
        <div className={s.aboutContainer}>
          <img
            src={cloudImg('adamgoldman.me/profile-smiling')}
            alt="About Adam Goldman"
          />
          <p className="lead">
            I&apos;ve been guiding people through personal change processes for over 8 years. My latest focus is helping you (and fellow parents) savor the relationship with your child, to align your brain, mind and body, towards a compelling brightening future, and let the light of your child shine through you as you carry it wherever you go.
          </p>
        </div>
      </section>
    )
  }

  renderTopBar() {
    const navitems = [
      { text: 'Trauma', nodeId: 'elTrauma' },
      { text: 'Program', nodeId: 'elProgram' },
      { text: 'Modules', nodeId: 'elModules' },
      { text: 'Partnership', nodeId: 'elPartnership' },
      { text: 'About', nodeId: 'elAbout' },
      { text: 'Guarantee', nodeId: 'elGuarantee' },
    ]
    const title = 'Savoring Your Child'
    return (
      <nav className="navbar navbar-expand-lg fixed-top main-nav navbar-light">
        <div className="container">
          <MobileNav items={navitems} onItemClick={this.scrollTo} title={title} />
          <Link className="navbar-brand mr-auto" to="/savoring-your-child">{title}</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {navitems.map(({ text, nodeId }) => (
                <li className="nav-item" key={nodeId}>
                  <a className="nav-link" onClick={() => this.scrollTo(nodeId)}>{text}</a>
                </li>
            ))}
              <li className="nav-item" key="buyNow">
                <a className="nav-link btn btn-primary btn-sm" onClick={() => this.scrollTo('elBuyNow')}>Claim Access</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  renderModules() {
    return (
      <div>
        <div>
          <h3>Module 1: Clarity and order</h3>
          <p>
            We’ll go over 5 common aspects of grief and carefully separate them to distinct concepts, before we examine and transform them one by one.
            <br /> <strong>✔️ Value: 30$</strong>
          </p>
        </div>
        <div>
          <h3>Module 2: Peaceful Ending</h3>
          <p>Soften the unpleasantness and negative feelings regarding the moment of transition, and the events regarding the transition, and rewire your mind to go back to the happy memories. This will also <strong>pacify disturbing or graphic images</strong> you might still have.            <br /> <strong>✔️ Value: $47</strong>
          </p>
        </div>
        <div>
          <h3>Module 3: Savoring future plans</h3>
          <p>Increase the peace and acceptance towards the future that will not be, and events you might have planned with and for your child.<br /> <strong>✔️ Value: $47</strong>
          </p>
        </div>
        <div>
          <h3>Module 4: Reunion</h3>
          <p>Say “hello” again, and regain access to the good times shared, and what you valued in the relationship and didn’t want to lose.            <br /> <strong>✔️ Value: $47</strong>
          </p>
        </div>
        <div>
          <h3>Module 5: Relationship Consolidation</h3>
          <p>Every relationship has ups and downs. Learn how to intensify the good feelings from the good experiences, and soften and discharge bad experiences and events you had.            <br /> <strong>✔️ Value: $47</strong>
          </p>
        </div>
        <div>
          <h3>Module 6: Special Days</h3>
          <p>Some days of the year are usually harder than others, like birthdays, memorial days and holidays. In this process you learn how to use these days as an opportunity to remind yourself how lucky you are to have had them in your life, reminisce about your relationship and honor it even more.            <br /> <strong>✔️ Value: $47</strong>
          </p>
        </div>
        <div>
          <h3>Module 7: Re-engaging the future</h3>
          <p>Now that we transformed much of the emptiness to presence and appreciation, it’s time to create a compelling ever brightening future, as you learn how to let the qualities in this valued relationship draw you forward.            <br /> <strong>✔️ Value: $47</strong>
          </p>
        </div>
        <div className="text-center">
          <h2>How much is it worth?</h2>
        30$ + $47 + $47 + $47 + $47 + $47 + $47 =
          <h3 style={{ marginTop: 20 }}>312$</h3>
        </div>
      </div>
    )
  }

  renderBuyNowScrollButton() {
    return (
      <button onClick={() => scrollToTopOfNode(this.elBuyNow, 1000)} className={`btn btn-primary ${s.getStartedButton}`}>Get Started</button>
    )
  }

  scrollTo = (nodeId) => {
    scrollToTopOfNode(this[nodeId], { duration: 1000, topOffest: TOP_BAR_HRIGHT })
  }

  renderFinalPrice() {
    return <h3 className="text-center"><small>Order today for</small><br /> <strong>Only $97</strong></h3>
  }
  renderPaymentButton() {
    return (
      <div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="text-center">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="landing_page" value="billing" />
          <input type="hidden" name="hosted_button_id" value="YMMX847LLRW4E" />
          <input type="image" src="http://res.cloudinary.com/goldylucks/image/upload/v1531924994/get-access-now_pqssf4.jpg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
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

export default withStyles(s)(SavoringYourChild)

function trackFbVisitor() {
  window.fbq('track', 'Savoring Your Child Sales Letter Visitor')
}
