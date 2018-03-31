// @flow

import React from 'react'
import axios from 'axios'

import history from '../../history'
import FbGateKeeper from '../../components/FbGateKeeper'
import Link from '../../components/Link'
import Share from '../../components/Share'

type Props = {
  tool: Object,
  user: Object,
  path: string,
  onLogin: Function,
};

// eslint-disable-next-line react/prefer-stateless-function
class Tool extends React.Component {
  props: Props
  render() {
    const {
      path, tool,
    } = this.props
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <Share path={path} title={tool.title} />
            </div>
            <div className="col-md-8 col-xs-12">
              <div className="mainheading">
                <h1 className="posttitle">{tool.title}</h1>
              </div>
              <div className="article-post">
                {this.renderStartNew()}
                {this.renderHistory()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderStartNew() {
    return (
      <div style={{ position: 'relative' }}>
        <section className="jumbotron">
          <h1 className="display-4">Start new proccess</h1>
          <p className="lead">
            <button className="btn btn-primary btn-lg" onClick={this.getStarted}>Get Started</button>
          </p>
        </section>
        {!this.props.user._id &&
        <FbGateKeeper onLogin={this.props.onLogin} />
        }
      </div>
    )
  }

  renderHistory() {
    const { user, path, tool } = this.props
    if (!this.props.user._id) {
      return null
    }
    const historyItems = user.toolsHistory.filter(item => item.toolId === tool._id)
    if (!historyItems.length) {
      return null
    }
    return (
      <section>
        <h4>History</h4>
        {historyItems.map(item => (
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={`${path}/${item._id}`} className="d-flex justify-content-between align-items-center">
                {item.createdAt}
                <span className="badge badge-primary badge-pill">{item.status}</span>
              </Link>
            </li>
          </ul>
        ))}
      </section>
    )
  }

  getStarted = () => {
    const { tool, user, path } = this.props
    const data = {
      toolId: tool._id,
      userId: user._id,
      ...tool,
    }
    delete data._id
    axios.post('/api/toolsHistory/', data)
      .then((res) => {
        global.console.log(res)
        history.push(`${path}/${res.data._id}`)
      })
      .catch((err) => {
        global.alert(err.message)
        global.console.error(err)
      })
  }
}

export default Tool
