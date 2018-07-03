/* global cy */
describe('homepage', () => {
  it('should display title', () => {
    cy
      .visit('/')
      .getByText('Hack Your Mind')
      .getByText('Mind Hacking Sessions Transcripts')
  })
})
