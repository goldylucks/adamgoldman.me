// @flow

import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import ExternalA from '../../components/ExternalA'
import { MESSENGER_LINK_DECISION_DESTROYER_AFTER_PURCHASE_INTRO, MAIL_TO_LINK } from '../../constants'
import Link from '../../components/Link'
import { TOP_BAR_HRIGHT } from '../decisionDestroyer/DecisionDestroyer'
import MessengerFixed from '../decisionDestroyer/MessengerFixed'
import '../decisionDestroyer/DecisionDestroyer.css'

type Props = {}

class DecisionDestroyerAfterPayment extends Component<Props> {
  // componentDidMount() {
  //   trackAdwordsConversion()
  // }
  render() {
    return (
      <div style={{ paddingTop: TOP_BAR_HRIGHT }}>
        <MessengerFixed />
        {this.renderTopBar()}
        <div className="container">
          <div className={`mainheading ${s.widthContainer}`}>
            <h1>Welcome aboard</h1>
            <p>I want to make sure you have direct access to me at all times, and I have prepared a special link for you.</p>
            <p>The following button will open a conversation with me on messenger, click on it to get started:</p>
            <ExternalA className="btn btn-primary" href={MESSENGER_LINK_DECISION_DESTROYER_AFTER_PURCHASE_INTRO}>Get Started</ExternalA>
            <p style={{ marginTop: 30 }}><small>This program is delivered through FB messenger. If you do not have access to messenger, please email me at <ExternalA href={MAIL_TO_LINK}>goldy@adamgoldman.me</ExternalA></small></p>
          </div>
        </div>
      </div>
    )
  }

  renderTopBar() {
    const title = 'Decision Destroyer'
    return (
      <nav className="navbar navbar-expand-lg fixed-top main-nav navbar-light">
        <div className="container">
          <Link className="navbar-brand mr-auto" to="/shop/decision-destroyer">{title}</Link>
        </div>
      </nav>
    )
  }
}

export default withStyles(s)(DecisionDestroyerAfterPayment)

// copied from savoring your pet success route
// function trackAdwordsConversion() {
//   global.console.log('tracked adwords conversion')
//   window.gtag('event', 'conversion', {
//     send_to: 'AW-842400866/3qJzCLTHtIcBEOKI2JED',
//     transaction_id: '',
//   })
// }
