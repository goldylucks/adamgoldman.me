// @flow

import React from 'react'
import axios from 'axios'

import { inputChange } from '../../forms'

type Props = {
  listId: string,
  onNext: Function,
}

class SignupForm extends React.Component {
  state = {
    email: '',
  }

  props: Props

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          value={this.state.email}
          onChange={inputChange.call(this, 'email')}
          required
          className="form-control"
          type="email"
          placeholder="My best email is ..."
        />
        <button
          className="btn btn-primary"
          style={{
 fontWeight: 'bold', fontSize: 24, padding: 20, marginBottom: 30,
}}
        >
          Follow up on me Adam
        </button>
      </form>
    )
  }

  submit = (evt) => {
    evt.preventDefault()
    const { listId, onNext } = this.props
    axios.post(`/api/mailChimp/${listId}/subscribe/`, {
      email_address: this.state.email,
      status: 'subscribed',
      merge_fields: {},
    })
      .then(({ data }) => {
        alert(`subscribed email: ${data.email_address} \n Please check your email! :)`)
        onNext()
      })
      .catch(err => alert(`there was an error: ${err.message}\n Please contact me!`))
  }
}

export default SignupForm
