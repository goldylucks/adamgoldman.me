/* global cy */
describe('homepage', () => {
  it('should display title', () => {
    cy
      .visit('/')
      .getByText('Adam Goldman')
  })
})
