import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

// eslint-disable-next-line prefer-destructuring
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY

class Stripe extends Component {
  render() {
    return (
      <div>
        <h1>Stripe checkout here</h1>
        <StripeCheckout
          token={this.onToken}
          stripeKey={STRIPE_PUBLISHABLE_KEY}
        />
      </div>
    )
  }

  onToken = async (token) => {
    const amountInCents = 100 // TODO - make real
    try {
      const response = await axios.post('/api/stripe/oneTimePayment', { token, amount: amountInCents })
      console.log('response', response)
    } catch (err) {
      console.warn('error creating payment', err)
    }
  }
}

export default Stripe
