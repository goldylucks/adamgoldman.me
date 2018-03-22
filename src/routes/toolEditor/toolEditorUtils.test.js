/* eslint-disable no-template-curly-in-string */

import { getValidationWarnings, strToValidationErrors } from './toolEditorUtils'

describe('strToValidationErrors', () => {
  it('should return null', () => {
    expect(strToValidationErrors('${s0}')).toBeNull()
  })
  it('should return [${0}]', () => {
    expect(strToValidationErrors('${0} and ${s0}')).toEqual(['${0}'])
  })
})

describe('getValidationWarnings', () => {
  it('should return empty array', () => {
    expect(getValidationWarnings({ steps: [{ title: 'foo' }, { title: 'foo ${s0} ${echo} ${he0} ${his0} ${him0} ${hfoo}' }] })).toEqual([])
  })
  it('should return [${0}, ${1}]', () => {
    expect(getValidationWarnings({
      steps: [{ title: 'foo' }, {
        title: 'foo ${0}',
        description: 'bar ${s2}',
        answers: [{ text: '${1}' }],
      }],
    })).toEqual(['${0}', '${1}'])
  })
})
