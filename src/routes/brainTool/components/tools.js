import toPascalCase from 'to-pascal-case'

export default [
  'smoking-destroyer',
  'loved-ones-amplifier',
  'nail-biting-destroyer',
  'perfect-day',
  'feel-good-generator',
  'trauma-relief',
  'grief-to-appreciation',
  'internal-dialog-scrambler',
  'reverse-feeling-spin',
  'reverse-feeling-spin2',
  'recurring-time-distortion',
  'loved-ones-amplifier-generalizer',
].map(url => ({
  url,
  ...require(`../${toPascalCase(url)}`), // eslint-disable-line import/no-dynamic-require,global-require
}))
