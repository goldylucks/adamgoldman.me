/* eslint-disable max-len */

export default [
  {
    title: 'Review - most useful',
    description:
      'Which part did you find the most useful, and why?\n (or found more beneficial/healing)',
    type: 'long',
    answers: [],
  },
  {
    title: 'Review - rate',
    description:
      'How much did you find this process useful/beneficial/healing?',
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
      {
        text: 'Share my experience in the FB group',
        isLinkNew: true,
        linkNew: 'https://www.facebook.com/groups/mindHackingAdamGoldman',
      },
      {
        text: 'Choose my next mind adventure',
        isLinkNew: true,
        linkNew: 'https://www.adamgoldman.me/mind-hacking-journeys/',
      },
      {
        text: 'Talk to you Adam (Opens messenger)',
        isLinkNew: true,
        linkNew: 'https://m.me/adamgoldman.me?ref=talk-at-end-of-module',
      },
    ],
  },
]
