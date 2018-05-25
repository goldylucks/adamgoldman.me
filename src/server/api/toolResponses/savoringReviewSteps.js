/* eslint-disable max-len */

import { MESSENGER_LINK_WELCOME } from '../../../constants'

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
    id: 'choosePaymentAmount',
    description: `Great!
I’m glad you’ve found value in our time together.

Like I said in the beginning, I work with a [value first biz model](/savoring-your-child/pricingNEW), so you get to decide how much you want to pay back for the benefits you got from this process.`,
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

That’s perfectly fine. Our #1 priority is to reconnect you with what you value and appreciate in your relationship with \${hchildName}, give you more control over your internal experiences, emotions, and thought processes, hence increasing the freedom and choices in your life.

You are more than welcome to share this with others parents of course`,
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
    description: 'This allows me to invest more time to improve these processes and help more parents worldwide, just like you.',
    type: 'payment',
    answers: [
      { text: 'Made the payment, let\'s continue' },
      { text: 'Paid back as promised, thank you!' },
    ],
  },
  {
    title: 'Final comments & suggestions',
    id: 'finalComments',
    description: `Do you want to help me improve this process for the next parent?

Please share with me how was it for you. Any suggestions you might have? Any questions? Critics? Comments? Thoughts?

A single insight could change the lives of hundreds of fellow parents.

Please don’t hold back. I take everything as constructive feedback.`,
    type: 'long',
    answers: [],
  },
  {
    title: 'Next steps',
    description: 'What would you like to do next?',
    answers: [
      { text: 'Choose the next process to experience', isLink: true, link: '/savoring-your-child/modules' },
      { text: 'Repeat this process again', isRepeatProcess: true },
      { text: 'Talk to me (Adam)', isLinkNew: true, linkNew: MESSENGER_LINK_WELCOME },
    ],
  },
]
