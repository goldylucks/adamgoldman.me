/* eslint-disable max-len */

import { MESSENGER_LINK_WELCOME, MESSENGER_LINK_BOOK_SESSION, MESSENGER_LINK_INNER_CIRCLE } from '../../constants'

export default [
  {
    title: 'Review - most useful',
    description: 'Which part did you find the most useful, and why?\n (or found more beneficial/healing)',
    type: 'long',
    answers: [],
  },
  {
    title: 'Review - rate',
    description: 'How much did you find this process useful/beneficial/healing?',
    type: 'stars-review',
  },
  {
    title: 'Value first biz model - choose',
    id: 'choose-payment-amount',
    description: `Great!
I’m glad you’ve found value in our time together.

Like I said in the beginning, I work with a [value first biz model](/i-dont-charge-i-acceptNEW), so you get to decide how much you want to pay back for the benefits you got from this process.`,
    type: 'radio',
    answers: [
      { text: 'I got some good insights - $9', price: 9, goToStepById: 'payment' },
      { text: 'Felt an emotional shift - $23', price: 23, goToStepById: 'payment' },
      { text: 'This is wonderful, I feel great - $70', price: 70, goToStepById: 'payment' },
      { text: 'I’m actually low on $$$ :(' },
      { text: 'Let me do another module before I pay' },
    ],
  },
  {
    title: 'Value first biz model',
    id: 'low-on-cash',
    description: `\${echo}

That’s perfectly fine. Our #1 priority is to give you more control over your internal experiences, emotions, and thought processes, hence increasing the freedom and choices in your life.

You are more than welcome to [share](FB_SHARE) this with others of course`,
    type: 'radio',
    answers: [
      { text: 'You know what, I can spare $7', price: 7 },
      { text: 'OK, let\'s continue', goToStepById: 'finalComments' },
      { text: 'Thank you for understanding Adam', goToStepById: 'finalComments' },
    ],
  },
  {
    title: 'Thank you for your support!',
    id: 'payment',
    description: 'This allows me to invest more time to improve these processes and help more people worldwide, just like you.',
    type: 'payment',
    answers: [
      { text: 'Made the payment, let\'s continue' },
      { text: 'Paid back as promised, thank you!' },
    ],
  },
  {
    title: 'Final comments & suggestions',
    id: 'finalComments',
    description: `Do you want to help me improve this process for the next person?

Please share with me how was it for you. Any suggestions you might have? Any questions? Critics? Comments? Thoughts?

A single insight could change the lives of hundreds of our fellow humans.

Please don’t hold back. I take everything as constructive feedback.`,
    type: 'long',
    answers: [],
  },
  {
    title: 'Next steps',
    description: 'What would you like to do next?',
    answers: [
      { text: 'Get cutting edge tools', isLinkNew: true, linkNew: MESSENGER_LINK_INNER_CIRCLE },
      { text: 'Try another process', isLink: true, link: '/tools' },
      { text: 'Repeat this process again', isRepeatProcess: true },
      { text: 'Share this process', isFbShare: true },
      { text: 'Talk to me (Adam)', isLinkNew: true, linkNew: MESSENGER_LINK_WELCOME },
      { text: 'Book a session', isLinkNew: true, linkNew: MESSENGER_LINK_BOOK_SESSION },
    ],
  },
]
