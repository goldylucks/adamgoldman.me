import React from 'react'
import axios from 'axios'

class ToolJsonEditor extends React.Component {
  state = {
    json: '',
  }
  render() {
    return (
      <div>
        <div className='form-group'>
          <textarea
            autoFocus
            style={{ height: '90vh' }}
            value={this.state.json}
            className='form-control'
            placeholder='paste json here'
            onChange={evt => this.setState({ json: evt.target.value })}
          />
        </div>
        <button className='btn btn-primary btn-block' onClick={this.save}>
          Save
        </button>
      </div>
    )
  }
  save = () => {
    try {
      axios
        .post('/api/tools/', JSON.parse(this.state.json.trim()))
        .then(res => {
          global.console.log('saved!', res.data)
          global.alert('saved!')
        })
        .catch(err => {
          global.console.error(err)
          global.alert(err.message)
        })
    } catch (err) {
      global.alert(err.message)
    }
  }
}

export default ToolJsonEditor
