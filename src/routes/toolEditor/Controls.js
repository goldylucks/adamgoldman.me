import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTrashAlt from '@fortawesome/free-regular-svg-icons/faTrashAlt'
import faSave from '@fortawesome/free-regular-svg-icons/faSave'
import faEye from '@fortawesome/free-solid-svg-icons/faEye'
import faDatabase from '@fortawesome/free-solid-svg-icons/faDatabase'
import _ from 'lodash'

import { getValidationWarnings, cleanEmptyValues } from './toolEditorUtils'

import Link from '../../components/Link'

import './ToolEditor.css'

class Controls extends React.Component {
  static propTypes = {
    tool: PropTypes.object.isRequired,
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
        <Link
          className='control'
          to={`/tools/${this.props.tool.url}`}
          target='_blank'
        >
          <FontAwesomeIcon icon={faEye} />
        </Link>
        <a className='control' onClick={this.save}>
          <FontAwesomeIcon icon={faSave} />
        </a>
        <a className='control' onClick={this.del}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </a>
        <a className='control' onClick={this.export}>
          <FontAwesomeIcon icon={faDatabase} />
        </a>
      </div>
    )
  }
  save = () => {
    const state = cleanEmptyValues({ ...this.props.tool })
    const warnings = getValidationWarnings(state)
    if (warnings.length) {
      global.alert('validation warnings')
      global.console.log('[validation warnings]', warnings)
    }
    axios
      .post('/api/tools', state)
      .then(res => {
        global.console.log('saved!', res.data)
        global.alert('saved!')
      })
      .catch(err => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  del = () => {
    if (!global.confirm('Sure you want to delete this tool?')) {
      return
    }
    axios
      .delete(`/api/tools/${this.props.tool.url}`)
      .then(res => {
        global.console.log('deleted!', res.data)
        global.alert('deleted!')
      })
      .catch(err => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  export = () => {
    const state = cleanEmptyValues({ ...this.props.tool })
    axios
      .post('/api/tools/export', _.omit(state, ['__v', '_id']))
      .then(res => {
        global.console.log(res.data)
        global.alert(res.data)
      })
      .catch(err => {
        global.console.error(err)
        global.alert(err.message)
      })
  }

  setupHotkeys = evt => {
    if (evt.key === 'S' && evt.ctrlKey && evt.shiftKey) {
      this.save()
    }

    if (evt.key === 'e' && evt.ctrlKey && evt.altKey) {
      this.export()
    }
  }
}

export default Controls
