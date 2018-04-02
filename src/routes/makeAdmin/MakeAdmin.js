// @flow
import React from 'react'
import axios from 'axios'

type Props = {
  user: Object,
}

class MakeAdmin extends React.Component {
  state = {
    password: '',
  }
  props: Props
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit}>
          <input
            placeholder="password"
            value={this.state.password}
            onChange={evt => this.setState({ password: evt.target.value })}
          />
        </form>
      </div>
    )
  }

  submit = (evt) => {
    evt.preventDefault()
    axios.put(`/api/users/${this.props.user._id}/make-admin`, { password: this.state.password })
      .then((res) => {
        global.alert('welcome to management.')
        global.console.log(res)
      })
      .catch((err) => {
        global.alert(err.message)
        global.console.error(err)
      })
  }
}

export default MakeAdmin
