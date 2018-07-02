// @flow

import React from 'react'
import axios from 'axios'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash'

import { fbLinkByUserId } from '../../utils/fbUtils'
import Link from '../../components/Link'
import ExternalA from '../../components/ExternalA'

type Props = {
  path: string,
}

class AdminToolResponses extends React.Component<Props> {
  state = {
    toolResponses: [],
    isFetchingToolResponses: true,
  }
  componentDidMount() {
    this.fetchToolResponses()
  }
  render() {
    const { toolResponses, isFetchingToolResponses } = this.state
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle">Tool Histories</h1>
          </div>
          {
            isFetchingToolResponses
              ? 'Loading responses'
              : (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">User</th>
                      <th scope="col">Tool</th>
                      <th scope="col">Current Step</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toolResponses.map(item => (
                      <tr key={item._id}>
                        <th scope="col">
                          <Link to={`${this.props.path}/${item._id}`}>
                            {`${new Date(item.createdAt)}`}
                          </Link>
                        </th>
                        <th scope="col">{this.renderUser(item.user)}</th>
                        <th scope="col">{item.title}</th>
                        <th scope="col">{item.currentStepNum}</th>
                        <th scope="col">{item.status}</th>
                        <th scope="col">
                          <a onClick={() => { this.deleteResponse(item._id) }}><FontAwesomeIcon icon={faTrash} /></a>
                        </th>
                      </tr>
                  ))}
                  </tbody>
                </table>
              )
          }
          <hr />
        </div>
      </div>
    )
  }
  renderUser({ name, fbUserId } = {}) {
    if (!name) {
      return 'user not found'
    }
    if (fbUserId) {
      return <ExternalA href={fbLinkByUserId(fbUserId)}>{name}</ExternalA>
    }
    return name
  }
  fetchToolResponses() {
    axios.get('/api/toolResponses')
      .then(({ data }) => this.setState({ toolResponses: data, isFetchingToolResponses: false }))
      .catch((err) => {
        global.console.log(err)
        this.setState({ isFetchingToolResponses: false })
      })
  }
  deleteResponse(id) {
    axios.delete(`/api/toolResponses/${id}`)
      .then(() => {
        this.setState({ toolResponses: this.state.toolResponses.filter(tr => tr._id !== id) })
      })
      .catch(err => console.error(err))
  }
}

export default AdminToolResponses
