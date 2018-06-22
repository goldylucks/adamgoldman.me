import getStripeInstance from 'stripe'

const stripe = getStripeInstance(process.env.STRIPE_SECRET_KEY)

export default {
  oneTimePayment,
}

async function oneTimePayment(req, res, next) {
  const { token, amount } = req.body
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token.id,
      description: 'test charge',
    })
    res.json(charge)
  } catch (err) {
    next(err)
  }
}
