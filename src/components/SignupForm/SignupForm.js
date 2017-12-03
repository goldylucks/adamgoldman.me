import React from 'react'

const SignupForm = () => (
  <form
    action="https://www.getdrip.com/forms/47603601/submissions"
    method="post"
    data-drip-embedded-form="47603601"
  >
    <input
      required
      className="input"
      type="email"
      id="drip-email"
      name="fields[email]"
      placeholder="My best email is ..."
    />
    <button
      name="submit"
      data-drip-attribute="sign-up-button"
      className="button"
    >
      keep me updated Adam
    </button>
  </form>
)

export default SignupForm
