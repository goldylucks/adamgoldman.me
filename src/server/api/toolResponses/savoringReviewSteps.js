/* eslint-disable max-len */
// name property is used for analytics.

export default ({ toolSlug }) => [
  {
    title: 'Review - most useful',
    description: 'Which part did you find the most useful, and why?\n (or found more beneficial/healing)',
    type: 'long',
    id: 'most-useful',
    gaEventAction: '100 Go to most useful',
    answers: [],
  },
  {
    title: 'Review - rate',
    description: 'nHow much did you find this process useful/beneficial/healing?',
    type: 'stars-review',
    gaEventAction: '110 most useful -> stars',
    hasValue: true,
  },
  {
    title: 'Final comments & suggestions',
    id: 'finalComments',
    gaEventAction: '140 Final Comments',
    description: `Do you want to help me improve this process for the next parent?

Please share with me how was it for you. Any suggestions you might have? Any questions? Critics? Comments? Thoughts?

A single insight could change the lives of hundreds of fellow parents.

Please don’t hold back. I take everything as constructive feedback.`,
    type: 'long',
    answers: [],
  },
  {
    title: 'Finish',
    gaEventAction: '150 Arrive at Finish',
    description: 'Click the "I am done" button below to continue',
    answers: [
      { text: 'I am done <----- CLICK HERE', isLinkNew: true, linkNew: `https://m.me/adamgoldman.me?ref=finished-${toolSlug}` },
    ],
  },
]
