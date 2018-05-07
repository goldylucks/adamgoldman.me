import React from 'react'
import { Fetch } from 'react-data-fetching'
import PropTypes from 'prop-types'

import Link from '../../components/Link'

class AdminToolResponses extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle">Tool Histories</h1>
          </div>
          <Fetch url="/api/toolResponses">
            {({ data }) => (
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
                  {data.map(item => (
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
            )}
          </Fetch>
          <hr />
        </div>
      </div>
    )
  }
}

export default AdminToolResponses
