// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { cloudImg } from '../../utils'
import Footer from '../../components/Footer'
import ExternalA from '../../components/ExternalA'
import Benefits from '../../components/Benefits'
import Testimonials from '../../components/Testimonials'
import GetStarted from '../../components/GetStartedButton'

import testimonials from './testimonialsData'
import FAQContainer from './FAQContainer'
import s from './SavoringYourPet.css'

type Props = {}

class SavoringYourPet extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle text-center">How to honor your furry friend&apos;s memory after the transition</h1>
            <p className="lead text-center">And savor the relationship in a healing way</p>
            <GetStarted style={{ marginTop: 80, marginBottom: 80 }} />
          </div>
          <hr className={s.hr} />
          {this.renderPainsSection()}
          <hr className={s.hr} />
          {this.renderBenefitsSection()}
          <hr className={s.hr} />
          <GetStarted />
          <hr className={s.hr} />
          {this.renderTestimonialsSection()}
          <hr className={s.hr} />
          <GetStarted />
          <hr className={s.hr} />
          {this.renderPartenrshipsSection()}
          <hr className={s.hr} />
          <GetStarted />
          <hr className={s.hr} />
          {this.renderAboutMeSection()}
          <hr className={s.hr} />
          {this.renderPaymentButton()}
          <hr className={s.hr} />
          <section>
            <FAQContainer />
          </section>
        </div>
        <div className="container container-footer">
          <Footer />
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
        <h1 className="text-center">Learn how to ...<span className={s.asterixDisclaimer}>*</span></h1>
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
      <section>
        <h1 className="text-center" style={{ marginBottom: 30 }}>Partnerships and acknowledgements</h1>
        <h3 className="text-center">Helping Parents Heal</h3>
        <p className="lead">I work closely with helping parents heal, a non profit organization dedicated to support parents in a very accepting, loving, non judgemental way, regardless of personal belief.</p>
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
      <section>
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
  renderPaymentButton() {
    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input
          type="hidden"
          name="encrypted"
          value="-----BEGIN PKCS7-----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-----END PKCS7-----
"
        />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>

    )
  }
}

export default withStyles(s)(SavoringYourPet)
