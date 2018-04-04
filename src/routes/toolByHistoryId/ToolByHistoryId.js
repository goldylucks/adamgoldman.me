import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import Share from '../../components/Share'
import MultiStepForm from '../../components/MultiStepForm'

class ToolByHistoryId extends React.Component {
  static propTypes = {
    tool: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    historyId: PropTypes.string.isRequired,
    onLogin: PropTypes.func.isRequired,
  }
  state = {
    data: null,
    isLoaded: false,
  }
  componentDidMount() {
    this.fetchToolByHistoryId()
  }
  render() {
    if (!this.state.isLoaded) {
      return null
    }
    const { path } = this.props
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <Share path={path} title={this.state.data.title} />
            </div>
            <div className="col-md-8 col-xs-12">
              <div className="mainheading">
                <h1 className="posttitle">{this.state.data.title}</h1>
              </div>
              <div className="article-post">
                <div>
                  <MultiStepForm
                    {...this.state.data}
                    path={path}
                    toolHistoryId={this.props.historyId}
                    onUpdateProgress={this.updateProgress}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  fetchToolByHistoryId() {
    axios.get(`/api/toolsHistory/${this.props.historyId}`)
      .then(({ data }) => this.setState({ data, isLoaded: true }))
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  updateProgress = (nextState) => {
    if (nextState.currentStepNum === this.state.data.steps.length - 1) {
      nextState.status = 'Completed'
    }
    axios.put(`/api/toolsHistory/${this.props.historyId}`, { ...this.state.data, ...nextState })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }
}

export default ToolByHistoryId
