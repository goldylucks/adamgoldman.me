// @flow

import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import ExternalA from '../../components/ExternalA'
import { MESSENGER_LINK_SAVORING_PETS_AFTER_PURCHASE_INTRO } from '../../constants'
import Link from '../../components/Link'
import { TOP_BAR_HRIGHT } from '../savoringYourPet/SavoringYourPet'
import MessengerFixed from '../savoringYourPet/MessengerFixed'
import s from '../savoringYourPet/SavoringYourPet.css'

type Props = {}

class SavoringYourPetAfterPayment extends Component<Props> {
  componentDidMount() {
    trackAdwordsConversion()
  }
  render() {
    return (
      <div style={{ paddingTop: TOP_BAR_HRIGHT }}>
        <MessengerFixed />
        {this.renderTopBar()}
        <div className="container">
          <div className={`mainheading ${s.widthContainer}`}>
            <h1>Welcome aboard</h1>
            <p>I want to make sure you have direct access to me at all times, and I have prepared a special link for you and the rest of &quot;Savoring Your Pet&quot; customers.</p>
            <p>The following button will open a conversation with me on messenger, click on it to get started:</p>
            <ExternalA className="btn btn-primary" href={MESSENGER_LINK_SAVORING_PETS_AFTER_PURCHASE_INTRO}>Get Started</ExternalA>
          </div>
        </div>
      </div>
    )
  }

  renderTopBar() {
    const title = 'Savoring Your Pet'
    return (
      <nav className="navbar navbar-expand-lg fixed-top main-nav navbar-light">
        <div className="container">
          <Link className="navbar-brand mr-auto" to="/savoring-your-pet">{title}</Link>
        </div>
      </nav>
    )
  }
}

export default withStyles(s)(SavoringYourPetAfterPayment)

function trackAdwordsConversion() {
  global.console.log('tracked adwords conversion')
  window.gtag('event', 'conversion', {
    send_to: 'AW-842400866/3qJzCLTHtIcBEOKI2JED',
    transaction_id: '',
  })
}
