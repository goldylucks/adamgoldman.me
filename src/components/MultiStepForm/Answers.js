// @flow

import React from 'react'

import Link from '../../components/Link'
import ExternalA from '../../components/ExternalA'
import { MESSENGER_LINK_TOOL_CONCERN } from '../../constants'
import { getFbShareUrl } from '../../utils/fbUtils'

type Props = {
  answers: Array<any>,
  onSubmit: Function,
  onSubmitOther?: Function,
  path: String,
}

class Answers extends React.Component {
  state = {
    other: '',
  }

  props: Props

  render() {
    const {
      answers, onSubmit, onSubmitOther, path,
    } = this.props
    return (
      <div>
        {answers.map((answer, idx) => {
          let html
          if (answer.isConcern) {
            html = <ExternalA className="btn btn-primary text-left" style={{ width: this.getMaxWidth() }} onClick={this.concernClick} href={MESSENGER_LINK_TOOL_CONCERN}>{answer.text}</ExternalA>
          } else if (answer.isFbShare) {
            html = <ExternalA className="btn btn-primary text-left" style={{ width: this.getMaxWidth() }} href={getFbShareUrl(path)}>{answer.text}</ExternalA>
          } else if (answer.link) {
            html = <Link className="btn btn-primary" to={answer.link}>{answer.text}</Link>
          } else if (answer.linkNew) {
            html = <ExternalA className="btn btn-primary text-left" style={{ width: this.getMaxWidth() }} href={answer.linkNew}>{answer.text}</ExternalA>
          } else if (answer.isOther) {
            html = (
              <form onSubmit={(evt) => {
                  evt.preventDefault()
                  onSubmitOther(idx, this.state.other)
                }}
              >
                <input
                  onChange={(evt) => { this.setState({ other: evt.target.value }) }}
                  placeholder="Other"
                  value={this.state.other}
                  className="btn btn-primary text-left"
                />
                <button>Submit</button>
              </form>
            )
          } else {
            html = (
              <a className="btn btn-primary text-left" style={{ width: this.getMaxWidth() }} onClick={() => onSubmit(idx)}>{answer.text}</a>
            )
          }

          return (
            <div key={idx} style={{ marginBottom: 10 }}>{html}</div>
          )
        })}
      </div>
    )
  }

  concernClick = () => global.alert('Let\'s talk about it in messenger, click "get started" if messenger asks you')
  getMaxWidth = () => {
    const maxLength = this.props.answers.reduce(
      (prev, current) => ((prev.text.length > current.text.length) ? prev : current),
    ).text.replace(/ /g, '').length
    return maxLength * 12
  }
}

Answers.defaultProps = {
  onSubmitOther: () => {},
}
export default Answers
