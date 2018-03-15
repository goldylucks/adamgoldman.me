/* eslint-disable */

export default {
  url: 'resolving-shame',
  isDraft: false,
  title: 'Resolving Shame',
  description: 'How to resolve shame',
  hiddenFields: { color: 'blue' },
  steps: [
    {
      type: 'radio',
      title: 'Color is ${hcolor}',
      description: '',
      answers: [
        { text: 'skip ahead!', goToStep: 3 },
        { other: true },
      ]
    },
    {
      type: 'input',
      placeholder: 'My name is ...',
      title: 'Name',
      description: '"*${echo}*" \nso ${s00}, What is your name?',
      answers: [],
    },
    {
      type: 'radio',
      title: 'Gender',
      description: 'Hello ${s00} Male or Female?',
      answers: [
        { text: 'Male' },
        { text: 'Female' },
        { text: 'pricing', link: '/i-dont-charge-i-accept' },
        { text: 'new google', linkNew: 'http://google.com' },
      ],
    },
    {
      type: 'textarea',
      placeholder: 'Some stuff here ...',
      title: 'Gender var test',
      description: 'You like ${him01}, ${he01} is nice, ${his01} nose is red',
      answers: [],
    },
    // {
    //   type: '',
    //   title: '',
    //   description: '',
    //   answers: [
    //     { text: '' },
    //   ]
    // },
    //
  ],
}
