export const freshAnswer = opts => ({
  isOther: false,
  text: '',
  hasGoToStep: false,
  goToStepByNum: '',
  isLink: false,
  link: '',
  isLinkNew: false,
  linkNew: '',
  isConcern: false,
  concern: '',
  ...opts,
})

export const freshStep = opts => ({
  title: '',
  description: '',
  type: 'radio',
  inputPlaceholder: '',
  answers: [freshAnswer()],
  ...opts,
})
