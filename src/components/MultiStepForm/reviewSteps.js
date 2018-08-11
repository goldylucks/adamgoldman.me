/* eslint-disable max-len */

import { MESSENGER_LINK_WELCOME } from '../../constants'

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
      { text: 'Repeat this process again', isRepeatProcess: true },
      { text: 'Talk to me (Adam)', isLinkNew: true, linkNew: MESSENGER_LINK_WELCOME },
    ],
  },
]
