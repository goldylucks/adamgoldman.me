// @flow

import React from 'react'
import axios from 'axios'

import Share from '../../components/Share'
import Steps from '../tool/Steps'

type Props = {
  tool: Object,
  user: Object,
  path: string,
  historyId: string,
  onLogin: Function,
};

// eslint-disable-next-line react/prefer-stateless-function
class ToolByHistoryId extends React.Component {
  state = {
    data: null,
    isLoaded: false,
  }
  componentDidMount() {
    this.fetchToolByHistoryId()
  }
  props: Props
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
                  <Steps
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
    axios.get(`/api/toolsHistory/${this.props.historyId}/`)
      .then(({ data }) => this.setState({ data, isLoaded: true }))
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  updateProgress = (nextState) => {
    if (nextState.currentStep === this.state.data.steps.length - 1) {
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
