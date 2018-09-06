// @flow
import React from 'react'
import axios from 'axios'
import isEmail from 'validator/lib/isEmail'

type Props = {
  onLogin: Function
}

class SignupWithEmail extends React.Component<Props> {
  state = {
    password: '',
    email: '',
  }
  render() {
    return (
      <div className="container">
        <h1>Signup or Login</h1>
        <form onSubmit={(evt) => { evt.preventDefault() }}>
          <div className="form-group">
            Email
            <input
              required
              type="email"
              className="form-control"
              placeholder="Type your email here"
              value={this.state.email}
              onChange={evt => this.setState({ email: evt.target.value })}
            />
          </div>
          <div className="form-group">
            Password
            <input
              required
              className="form-control"
              placeholder="Type your password here"
              value={this.state.password}
              onChange={evt => this.setState({ password: evt.target.value })}
            />
          </div>
          <button className="btn" onClick={this.signup} style={{ marginRight: 20 }}>Signup</button>
          <button className="btn" onClick={this.login}>Login</button>
        </form>
      </div>
    )
  }

  login = (evt) => {
    evt.preventDefault()
    if (!this.validateForm()) {
      return
    }
    const { email, password } = this.state
    axios.post('/api/users/loginWithEmail', { password, email })
      .then((res) => {
        global.alert('Logged in successfully')
        global.console.log(res)
        this.props.onLogin(res.data)
        this.resetForm()
      })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.response.data)
      })
  }

  signup = (evt) => {
    evt.preventDefault()
    if (!this.validateForm()) {
      return
    }
    const { email, password } = this.state
    axios.post('/api/users/signupWithEmail', { password, email })
      .then((res) => {
        global.console.log(res)
        this.props.onLogin(res.data)
        global.alert('Signed up successfully')
        this.resetForm()
      })
      .catch((err) => {
        global.alert(err.message)
        global.console.error(err)
      })
  }

  resetForm() {
    this.setState({ password: '', email: '' })
  }

  validateForm() {
    if (!isEmail(this.state.email)) {
      global.alert('please fill valid email address')
      return false
    }
    if (!this.state.password) {
      global.alert('please fill a password')
      return false
    }
    return true
  }
}

export default SignupWithEmail
