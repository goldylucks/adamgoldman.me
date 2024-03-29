import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons/'
import './ToolEditor.css'

class Controls extends React.Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    toolKey: PropTypes.string.isRequired,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.setupHotkeys, false)
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.setupHotkeys, false)
  }

  render() {
    return (
      <div className='controls'>
        <a
          className='control'
          href={`/tool-viewer/${this.props.toolKey}`}
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faEye} />
        </a>
        <a className='control' onClick={this.persist}>
          <FontAwesomeIcon icon={faDatabase} />
        </a>
      </div>
    )
  }

  persist = async () => {
    const { toolKey, steps } = this.props
    const body = {
      toolName: toolKey,
      steps,
    }
    try {
      const { data } = await axios.post('/persist-tool', body)
      alert(data)
    } catch (err) {
      console.error(err)
      alert(err.message)
    }
  }

  setupHotkeys = evt => {
    if (evt.key === 'S' && evt.ctrlKey && evt.shiftKey) {
      this.persist()
    }
  }
}

export default Controls
