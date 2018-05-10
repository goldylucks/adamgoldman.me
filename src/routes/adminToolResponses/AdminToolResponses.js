// @flow

import React from 'react'
import axios from 'axios'

import Link from '../../components/Link'

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
                        <th scope="col">{item.user.name}</th>
                        <th scope="col">{item.title}</th>
                        <th scope="col">{item.currentStepNum}</th>
                        <th scope="col">{item.status}</th>
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
  fetchToolResponses() {
    axios.get('/api/toolResponses')
      .then(({ data }) => this.setState({ toolResponses: data, isFetchingToolResponses: false }))
      .catch((err) => {
        global.console.log(err)
        this.setState({ isFetchingToolResponses: false })
      })
  }
}

export default AdminToolResponses
