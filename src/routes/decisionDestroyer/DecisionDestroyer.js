// @flow
/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import axios from 'axios'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { cloudImg, scrollToTopOfNode } from '../../utils'
import Link from '../../components/Link'
import Footer from '../../components/Footer'
import ExternalA from '../../components/ExternalA'
import Benefits from '../../components/Benefits'
import Testimonials from '../../components/Testimonials'
import YtEmbedd from '../../components/YtEmbedd/YtEmbedd'

import MessengerFixed from './MessengerFixed'
import testimonials from './testimonialsData'
import FAQContainer from './FAQContainer'
import s from './DecisionDestroyer.css'
import MobileNav from './MobileNav'

export const TOP_BAR_HRIGHT = 56

type Props = {}

type State = {
  isCouponApplied: boolean,
  isProcessingCoupon: boolean,
  couponInputValue: string
}

class DecisionDestroyer extends React.Component<Props, State> {
  state = {
    isCouponApplied: false,
    isProcessingCoupon: false,
    couponInputValue: '',
  }
  render() {
    return (
      <div style={{ paddingTop: TOP_BAR_HRIGHT }}>
        <MessengerFixed />
        {this.renderTopBar()}
        <div className="container">
          <div className={`mainheading ${s.widthContainer}`}>
            <h1 className="sitetitle text-center">How to reprogram traumas and limiting beliefs</h1>
            <p className="lead text-center">And plant life altering powerful experiences instead</p>
          </div>
          <div className={s.widthContainer}>
            <p>We all had negative imprint experiences that caught us unprepared, and caused us to form limiting beliefs about ourselves and the world around us.</p>
            <h2 className="text-center" style={{ marginBottom: 25, marginTop: 40 }}>Did you ever feel any of the following?</h2>
            <ul>
              <li>I don’t deserve ...</li>
              <li style={{ fontWeight: 'bold' }}>I am not enough / worthy</li>
              <li>I am stupid / not smart</li>
              <li style={{ fontWeight: 'bold' }}>Making money is hard</li>
              <li>The world is not safe</li>
              <li style={{ fontWeight: 'bold' }}>I will never / always …</li>
              <li>I must / shouldn’t ...</li>
            </ul>
            <p>You need to know <strong>you are NOT alone in this</strong>. Almost each client I had over the past 8 years was once limited by one (and usually more) of the above beliefs.</p>
            <p>As author and master trainer <ExternalA href="https://conniraeandreas.com/">Connirae Andreas</ExternalA> (PhD) explains in her excellent <ExternalA href="http://steveandreas.com/Articles/DecisionD.html">article</ExternalA>:</p>
            <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
              <blockquote className="lead text-center" style={{ fontStyle: 'italic' }}>“If we have an experience early in life that makes us conclude, for example, that we are unworthy, or that we are stupid or incapable of learning, this typically colors and influences the way we act from then on. We tend to act in ways that confirm these beliefs.”</blockquote>
              <div className={`text-center ${s.connirae}`}>
                <img
                  style={{ borderRadius: '50%' }}
                  src={cloudImg('adamgoldman.me/Connirae_Andreas')}
                  alt="Connirae Andreas"
                />
                <ExternalA className={s.andreasCaption} href="https://andreasnlptrainings.com/connirae-andreas-bio/">Connirae Andreas, Ph.D., master trainer</ExternalA>
              </div>
              <p style={{ marginTop: 20, marginBotton: 20 }}>She then alludes to <strong>the solution</strong>:</p>
              <blockquote className="lead text-center" style={{ fontStyle: 'italic' }}>“In the same way, if we had an even earlier impactful experience that we are worthy or are capable of learning, this strong belief can then transform even the most difficult experiences that occur later, so that they support this positive belief.”</blockquote>
            </div>
            <p>And that’s exactly what you’re going to experience today. Presenting ...</p>
            <h1 className="text-center">The Decision Destroyer</h1>
            <p>Trying to hold a house during an earthquake, or reconstruct it afterwards, requires tremendous work and resources.</p>
            <p>But if you could go back to before the earthquake happened, get a warning, and build something stronger, the house would be able to sustain it much better.</p>
            <p>In the same way, this pattern developed by Dr. Bandler, will allow you to make up a new powerful imprint experience, code it in your mind as a life altering moment, and place it just in the right moment in your past, BEFORE you were struck by the traumatic imprint that caused you to form limiting beliefs.</p>
            <p>Now I know what you might be thinking …</p>
            <p>“But if I make up this experience, it’s not real! Why would it affect me?”</p>
            <p>This is exactly what Janet thought as well before experiencing this process, and watch her reaction at the 1:10 mark of this quick video:</p>
            <div>
              <YtEmbedd src="B9a-fKFcFHM" />
            </div>
            <p style={{ fontStyle: 'italic' }}>“The strangest thing to me is that the memory I made up seems real! I logically know this didn’t happen!”</p>
            <p>The trick is to deconstruct how your mind already codes life altering moments, and apply these codings to the new imprint experience, so you can learn how to ...</p>
            <section>
              <div className="row justify-content-md-center">
                <div className="col col-lg-10" ref={(el) => { this.elBenefits = el }}>
                  <Benefits benefits={[
              'Transform beliefs you formed about yourself and the world',
              'Heal traumatic experiences that caught you unprepared',
              'Imprint powerful decisions and beliefs on demand',
              'Be free from past limitations',
              'Program your future behavior and emotions',
                ]}
                  />
                </div>
              </div>
              <small>* Results may vary (<ExternalA href="/legal-stuff" style={{ color: 'inherit' }}>full disclaimer</ExternalA>)</small>
            </section>
            <hr className={s.hr} />
            {this.renderBuyNowScrollButton()}
            <hr className={s.hr} />
            <h2 className="text-center" style={{ marginBottom: 25, marginTop: 40 }}>How is this program different?</h2>
            <p>I know we all have had our share of things that did not work, so let me start by listing what this process is NOT:</p>
            <div>❌ Medication</div>
            <div>❌ Life advice or coaching</div>
            <div>❌ Positive affirmations</div>
            <div>❌ Traditional therapy and psychoanalysis</div>
            <div>❌ New age woo-woo methods</div>
            <h2 ref={(el) => { this.elSteps = el }} className="text-center" style={{ marginBottom: 25, marginTop: 40 }}>What are the steps I will take?</h2>

            <h4>Step 1: Identify negative imprint</h4>
            <p>Choose a negative experience that left a negative imprint and still limits you. </p>
            <p>I.e. I had a client that overheard his parents shouting about a divorce, having no idea that things aren’t going well between them. This caught him completely unprepared, and he formed the limiting belief that “I am not enough”, since if he would have been “enough”, his parents would stay together.</p>

            <h4>Step 2: Design new imprint experience</h4>
            <p>Design in your mind an experience, that if it would have happened, would have prepared you for the negative imprint experience.</p>
            <p>For my client, designing an experience of his parents explaining to him the situation, and that their separation has nothing to do with him, would have prepare him for hearing them shouting about the breakup.</p>

            <h4>Step 3: Decode a powerful life altering moment</h4>
            <p>Think about one of the more meaningful experiences that you had, that as you look back at it now, you're really glad it happened, and it shaped you in a positive way.</p>
            <p>We will use a carefully design sequence to deconstruct how your mind codes this experience (note: this step is mind boggling)</p>

            <h4>Step 4: Apply codings to the designed experience</h4>
            <p>Now that we know exactly how your mind codes a powerful experience, we apply these codings to the new experience you designed in step 2.</p>
            <p>This step is what caused Janet (the woman from the video above) to say: “The strangest thing to me is that the memory I made up seems real” (it’s at the 1:10 mark)</p>

            <h4>Step 5: Recode the past</h4>
            <p>In this step we take the change and the learnings of the newly designed imprint experience, and carry it forward through time, reevaluating the negative imprint experience (step 1) and other past events that followed.</p>
            <p>This is where Janet said “It changed everything! It’s like it doesn’t matter anymore”.</p>

            <h4>Step 6: Program the future</h4>
            <p>Now that we’ve recoded the past, it’s time to program the future with you being as you are, without the limitation and with the new powerful positive imprint.</p>

            <hr className={s.hr} />
            {this.renderBuyNowScrollButton()}
            <hr className={s.hr} />
            <div className="text-center"><h4 style={{ fontStyle: 'italic' }}>“We consider this pattern to be the most rapid and complete method for dealing with all traumatic imprint experiences that is available to date”</h4> - Connirae Andreas PhD, author and master trainer</div>
            <div className={s.widthContainer}>
              <hr className={s.hr} />
              <div className={s.widthContainer}>
                {this.renderAboutMeSection()}
                <p className="lead" style={{ marginTop: 60, marginBottom: 30 }}>Here’s what <strong>author and master trainer Steve Andreas (M.A.)</strong> recently said about my work:</p>
                {this.renderSteveAndreas()}
              </div>
              <hr className={s.hr} />
            </div>
            {this.renderBuyNowScrollButton()}
          </div>
          {this.renderTestimonialsSection()}
          <div className={s.widthContainer}>
            <hr className={s.hr} />
            <h2 ref={(el) => { this.elBuyNow = el }} className="text-center">“So how much will it cost me?”</h2>
            <p>Here’s the problem … I haven’t met many good trainers that can walk you through this process, and the ones that are good are pretty expensive (I charge $200 myself).</p>

            <p>But I don’t want you to pay nearly that much. Even tho the results of this process are worth way more than that, I want this to be available for anyone who is interested in shattering their limitations and put non useful beliefs and traumas in the past.</p>

            <p>That’s why I designed a step by step interactive process that you can do right now, from the comfort of your own home (or wherever you are), for less than a quarter of the price of a therapy session.</p>

            <div>
              <h4 className="text-center"><small>Instead of the price of a private session </small><s>$200</s></h4>
              {this.renderFinalPrice()}
              {this.renderPaymentButton()}
              {this.renderPaypalSecure()}
            </div>
            <hr className={s.hr} />
            <p>That’s right, you can <strong>guarantee</strong> your <strong>lifetime access</strong> to this program <strong>for less than the price of dinner and a movie</strong>.</p>
            <p>I am so confident this will help you beyond your expectations, I’m willing to personally take all the risk off your hands when you invest in this today, with a double guarantee:</p>
            <div ref={(el) => { this.elGuarantee = el }} className="text-center" style={{ marginBottom: 40 }}>
              <h4 className="text-center">30 days no hassle money back guarantee</h4>
              <img
                src={cloudImg('30-day-refund-guarantee_ug806q')}
                alt="30 day refund guarantee"
              />
              <p>Try it for 30 days. If you are not blown away by the results, I will not only refund you in full, but you can also even <strong>keep access to the process for free</strong>. This is my way of thanking you for proactively choosing to take <strong>action and improve your life</strong>.</p>
            </div>
            <h4 className="text-center" style={{ marginBottom: 40 }}>Complementary private session guarantee ($100 value)</h4>
            <p>In fact, I’m willing to make this even easier for you to get on board today. I charge $200 for a private 1 hour session. and after you’re done with this process, if you still don’t feel this is one of the best decisions you ever took, I will not only refund you in full, I will get on a complementary one on one 30 minute private video session with you, to explore other methods to assist you and facilitate in your healing, and getting the results you want.</p>
            <p>You either get immense benefits from this process, or you get a $100 free session. Either way, it’s a win-win for you.</p>
            <hr className={s.hr} />
            <h5 style={{ marginBottom: 30 }} className="text-center">No need to continue suffering more than you have to</h5>
            <p>
              <strong>Instead of feeling pain</strong> as you think of the negative experiences that limit your present and future, you can literally redesign your past and program your future in a way that serves you most.
            </p>
            <p>I am very curious to hear about all the ways the decision you took today has brought peace, comfort, opportunities and freedom to your life.</p>
            <p>Best to you on your journey,
              <br />
            - <strong>Adam Goldman</strong>
            </p>
            {this.renderBuyNowScrollButton()}
            <p style={{ marginTop: 40 }}><strong>Ps.</strong> Yes, you can literally rewire your mind and feelings, and trade past limitations for new positive imprint experiences.</p>
            <p><strong>Ps.s. </strong> Remember all the risk is on me, so when you gain access today there’s nothing for you to lose other than unwanted negative limitations and feelings.</p>
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
  renderTopBar() {
    const navitems = [
      { text: 'Benefits', nodeId: 'elBenefits' },
      { text: 'Steps', nodeId: 'elSteps' },
      { text: 'About Me', nodeId: 'elAboutMe' },
      { text: 'Testimonials', nodeId: 'elTestimonials' },
      { text: 'Guarantee', nodeId: 'elGuarantee' },
    ]
    const title = 'Decision Destroyer'
    return (
      <nav className="navbar navbar-expand-lg fixed-top main-nav navbar-light">
        <div className="container">
          <MobileNav items={navitems} onItemClick={this.scrollTo} title={title} />
          <Link className="navbar-brand mr-auto" to="/shop/decision-destroyer">{title}</Link>
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
  scrollTo = (nodeId) => {
    scrollToTopOfNode(this[nodeId], { duration: 1000, topOffest: TOP_BAR_HRIGHT })
  }

  renderBuyNowScrollButton() {
    return (
      <button onClick={() => scrollToTopOfNode(this.elBuyNow, 1000)} className={`btn btn-primary ${s.getStartedButton}`}>Get Started</button>
    )
  }

  renderSteveAndreas() {
    return (
      <div>
        <div className={s.widthContainer}>
          <blockquote style={{ marginTop: 20 }}>
            Adam Goldman is a brilliant new colleague whose depth and breadth of understanding of the principles of personal change is exceptional, combined with the hands-on skills to manifest this in the experience of clients.
            <br />
            <br />
            Perceptive, intelligent, creative, confident, one of the fastest and most thorough learners I’ve ever met, able and willing to question established wisdom and discuss differences of opinion openly when that’s appropriate.
            <br />
            <br />

            <strong>He has created online programs to guide participants through effective change processes on their own, a huge opportunity for so many who would otherwise not be able to even think of affording it.</strong>
            <br />
            <br />
His work is a detailed challenge to the rest of us to learn how to “up our game” or be left behind in the dustbin of history.
          </blockquote>
          <br />
          <div className={s.andreasContainerBoth}>
            <div className={s.andreasContainerIndividual}>
              <img
                src={cloudImg('adamgoldman.me/Steve_Andreas')}
                alt="Steve Andreas"
              />
              <ExternalA className={s.andreasCaption} href="http://steveandreas.com/cv.html">Steve Andreas, M.A., master trainer</ExternalA>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderTestimonialsSection() {
    return (
      <section ref={(el) => { this.elTestimonials = el }} style={{ marginTop: 30 }}>
        <div className={`${s.widthContainer} text-center`}>
          <p>But don’t take my word for it</p>
          <h1>Listen to what people are saying ... <span className={s.asterixDisclaimer}>*</span></h1>
        </div>
        <Testimonials testimonials={testimonials} />
        <small>* Results may vary (<ExternalA href="/legal-stuff" style={{ color: 'inherit' }}>full disclaimer</ExternalA>)</small>
      </section>
    )
  }
  renderAboutMeSection() {
    return (
      <section ref={(el) => { this.elAboutMe = el }} id="about-me">
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
  renderFinalPrice() {
    const { isCouponApplied } = this.state
    if (!isCouponApplied) {
      return <h3 className="text-center"><small>Order today for</small><br /> <strong>Only $30</strong></h3>
    }
    return (
      <div>
        <h3 className="text-center" style={{ textDecoration: 'line-through' }}><small>Order today for</small><br /> <strong>Only $30</strong></h3>
        <h2 className="text-center">Limited time offer for my partners` customers!</h2>
        <h3 className="text-center"><small>Order today for</small><br /> <strong>Only $13</strong></h3>
      </div>
    )
  }
  renderPaymentButton() {
    const { isCouponApplied, couponInputValue, isProcessingCoupon } = this.state
    return (
      <div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="text-center">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="landing_page" value="billing" />
          <input type="hidden" name="hosted_button_id" value={isCouponApplied ? 'Y38NYRE7NZAH6' : 'US9BDVZ3FFKJA'} />
          <div style={{ display: 'none' }}>
            <input type="hidden" name="on0" value="coupon" />coupon
            <input type="text" name="os0" maxLength="200" value={couponInputValue} />
          </div>
          <input type="image" src="http://res.cloudinary.com/goldylucks/image/upload/v1531924994/get-access-now_pqssf4.jpg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <form onSubmit={this.onSubmitCoupon} className="text-center">
          <input type="text" value={couponInputValue} onChange={this.onCouponInputChange} placeholder="Coupon" />
          <button>Validate Coupon</button>
        </form>
        { isProcessingCoupon && <p>Loading, please wait ...</p>}
      </div>
    )
  }
  onCouponInputChange = (evt) => {
    this.setState({ couponInputValue: evt.target.value })
  }
  onSubmitCoupon = async (evt) => {
    const { couponInputValue, isProcessingCoupon } = this.state
    evt.preventDefault()
    if (isProcessingCoupon) {
      return
    }
    this.setState({ isProcessingCoupon: true })
    try {
      const { data: isValid } = await axios.get(`/api/coupons/validate/decision-destroyer/${couponInputValue}`)
      if (isValid) {
        global.alert('Valid coupon, enjoy your discount')
        this.setState({ isCouponApplied: true, isProcessingCoupon: false })
      } else {
        global.alert('invalid coupon, please contact me if you think it is a mistake')
        this.setState({ isProcessingCoupon: false })
      }
    } catch (err) {
      this.setState({ isProcessingCoupon: false })
      global.alert('error validating the coupon, please try again')
    }
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

export default withStyles(s)(DecisionDestroyer)
