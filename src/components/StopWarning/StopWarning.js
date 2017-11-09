import React from 'react'
import PropTypes from 'prop-types'

import Markdown from '../Markdown'
import { cloudImg } from '../../utils'

class StopWarning extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    dismissText: PropTypes.string,
    id: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
  };

  static defaultProps = {
    dismissText: 'Got it, never show this again',
  }

  state = { hide: true };

  componentDidMount() {
    if (localStorage.getItem(`hideWarning${this.props.id}`)) {
      this.props.onDismiss()
      return
    }
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ hide: false })
  }

  dismiss = () => {
    localStorage.setItem(`hideWarning${this.props.id}`, true)
    this.setState({ hide: true })
    this.props.onDismiss()
  };

  render() {
    if (this.state.hide) {
      return null
    }

    const { text, dismissText } = this.props
    return (
      <article
        style={{
          border: '4px dotted red',
          padding: '20px 40px',
          margin: 40,
        }}
      >
        <h1
          style={{
            color: 'red',
            textAlign: 'center',
          }}
        >
          STOP!
        </h1>
        <img
          style={{
            maxWidth: '100%',
            display: 'block',
            margin: '10px auto',
          }}
          alt="Puss in boots asking you please"
          src={`${cloudImg('adamgoldman.me/boots')}`}
        />
        <Markdown source={text} />
        <a onClick={this.dismiss} style={{ fontStyle: 'italic' }}>{dismissText}</a>
      </article>
    )
  }
}

export default StopWarning
