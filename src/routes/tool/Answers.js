// @flow

import React from 'react'

import Link from '../../components/Link'
import ExternalA from '../../components/ExternalA'
import { MESSENGER_LINK_TOOL_CONCERN } from '../../constants'

type Props = {
  answers: Array<any>,
  onSubmit: Function,
  onSubmitOther?: Function,
}

class AnswersV4 extends React.Component {
  state = {
    other: '',
  }

  props: Props

  render() {
    const { answers, onSubmit, onSubmitOther } = this.props
    return (
      <div>
        {answers.map((answer, idx) => {
          let html
          if (answer.isConcern) {
            html = <ExternalA className="btn btn-primary" onClick={this.concernClick} href={MESSENGER_LINK_TOOL_CONCERN}>{answer.text}</ExternalA>
          } else if (answer.link) {
            html = <Link className="btn btn-primary" to={answer.link}>{answer.text}</Link>
          } else if (answer.linkNew) {
            html = <ExternalA className="btn btn-primary" href={answer.linkNew}>{answer.text}</ExternalA>
          } else if (answer.isOther) {
            html = (
              <form onSubmit={(evt) => {
                  evt.preventDefault()
                  onSubmitOther(this.state.other)
                }}
              >
                <input
                  onChange={(evt) => { this.setState({ other: evt.target.value }) }}
                  placeholder="Other"
                  value={this.state.other}
                  className="btn btn-primary"
                />
                <button>Submit</button>
              </form>
            )
          } else {
            html = (
              <a className="btn btn-primary" onClick={() => onSubmit(idx)}>{answer.text}</a>
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
}

AnswersV4.defaultProps = {
  onSubmitOther: () => {},
}

export default AnswersV4
