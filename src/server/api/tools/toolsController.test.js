import { toolFileName } from './toolsController'

describe('toolFileName', () => {
  it('should return seedDbFooBarToolData', () => {
    expect(toolFileName('foo-bar')).toEqual('fooBar')
    expect(toolFileName('foo-bar-baz')).toEqual('fooBarBaz')
    expect(toolFileName('foo')).toEqual('foo')
  })
})
