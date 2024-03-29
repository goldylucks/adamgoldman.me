// @flow

import React from 'react'
import cx from 'classnames'

import Link from '../../components/Link'
import ExternalA from '../../components/ExternalA'
import { MESSENGER_LINK_TOOL_CONCERN } from '../../constants'
import { getFbShareUrl } from '../../utils/fbUtils'

class Answers extends React.Component {
  static defaultProps = {
    onSubmitOther: () => {},
  }
  state = {
    other: '',
  }
  render() {
    const {
      answers,
      onSubmit,
      path,
      isPulsating,
      onLinkPress,
      onNewLinkPress,
    } = this.props
    return (
      <div className={cx('answer-group', { pulsating: isPulsating })}>
        {answers.map((answer, idx) => {
          let html
          if (answer.isConcern) {
            html = (
              <ExternalA
                className='btn btn-secondary btn-fixed'
                onClick={this.concernClick}
                href={MESSENGER_LINK_TOOL_CONCERN}
              >
                {answer.text}
              </ExternalA>
            )
          } else if (answer.isFbShare) {
            html = (
              <ExternalA
                className='btn btn-secondary btn-fixed'
                href={getFbShareUrl(path)}
              >
                {answer.text}
              </ExternalA>
            )
          } else if (answer.link) {
            html = (
              <Link
                className='btn btn-secondary btn-fixed'
                onClick={() => onLinkPress(answer.link)}
                to={answer.link}
              >
                {answer.text}
              </Link>
            )
          } else if (answer.linkNew) {
            html = (
              <ExternalA
                className='btn btn-secondary btn-fixed'
                onClick={() => onNewLinkPress(answer.linkNew)}
                href={answer.linkNew}
              >
                {answer.text}
              </ExternalA>
            )
          } else if (answer.isOther) {
            html = (
              <form
                onSubmit={evt => {
                  evt.preventDefault()
                  this.submitOther(idx)
                }}
              >
                <input
                  onChange={evt => {
                    this.setState({ other: evt.target.value })
                  }}
                  placeholder='Other'
                  data-test='other'
                  value={this.state.other}
                  className='btn btn-secondary text-left'
                />
                <button>Submit</button>
              </form>
            )
          } else {
            html = (
              <a
                className='btn btn-secondary btn-fixed'
                onClick={() => onSubmit(idx)}
              >
                {answer.text}
              </a>
            )
          }

          return (
            <div
              key={idx}
              style={{ marginBottom: 10 }}
              data-test={`answer-${idx}`}
            >
              {html}
            </div>
          )
        })}
      </div>
    )
  }

  submitOther(idx) {
    this.props.onSubmitOther(idx, this.state.other)
    this.setState({ other: '' })
  }

  concernClick = () => {
    this.props.onConcern()
    global.alert(
      'Let\'s talk about it in messenger, click "get started" if messenger asks you',
    )
  }
}

export default Answers
