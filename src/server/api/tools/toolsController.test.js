import { toolFileName } from './toolsController'

describe('toolFileName', () => {
  it('should return seedDbFooBarToolData', () => {
    expect(toolFileName('foo-bar')).toEqual('seedDbFooBarToolData')
  })
})
