import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Fetch } from 'react-data-fetching'

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
  }
  render() {
    const { path, historyId } = this.props
    return (
      <Fetch
        onFetch={this.onFetch}
        url={`/api/toolsHistory/${historyId}`}
      >
        {({ data, isOK }) => isOK && (
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-xs-12">
                <Share path={path} title={data.title} />
              </div>
              <div className="col-md-8 col-xs-12">
                <div className="mainheading">
                  <h1 className="posttitle">{data.title}</h1>
                </div>
                <div className="article-post">
                  <MultiStepForm
                    {...data}
                    path={path}
                    toolHistoryId={historyId}
                    onUpdateProgress={this.updateProgress}
                  />
                </div>
              </div>
            </div>
          </div>
      )}
      </Fetch>
    )
  }

  onFetch = ({ data, isOK, error }) => {
    if (isOK) {
      this.setState({ data })
    } else {
      global.alert('there was an error, please refresh the page')
      global.console.error(error)
    }
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
