import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import { inputChange, inputToggle } from '../../forms'

import s from './PostsGenerator.css'

class PostsGenerator extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    isDraft: false,
    title: '',
    description: '',
    nick: '',
    isRtl: false,
  }

  componentWillMount() {
    if (this.props.data) {
      this.setState(this.props.data)
    }
  }

  render() {
    return (
      <div className="main-layout relative">
        <h1>Details</h1>
        {this.renderDetails()}

        <hr />

        <div className={s.controls}>
          <a className={s.control} onClick={this.save}>Save</a>
        </div>
      </div>
    )
  }

  renderDetails() {
    const {
      title, nick, description, isRtl, isDraft, intro, fbProfile, fbReview,
    } = this.state
    return (
      <div>
        <input className="input" placeholder="title" value={title} onChange={inputChange.call(this, 'title')} />
        <input className="input" placeholder="nick" value={nick} onChange={inputChange.call(this, 'nick')} />
        <input className="input" placeholder="description" value={description} onChange={inputChange.call(this, 'description')} />
        <input className="input" placeholder="fbProfile" value={fbProfile} onChange={inputChange.call(this, 'fbProfile')} />
        <input className="input" placeholder="fbReview" value={fbReview} onChange={inputChange.call(this, 'fbReview')} />
        <textarea className="textarea" placeholder="intro" value={intro} onChange={inputChange.call(this, 'intro')} />
        <div>
          <input type="checkbox" id="isRtl" value={isRtl} checked={isRtl} onChange={inputToggle.call(this, 'isRtl')} />
          <label htmlFor="isRtl">RTL</label>
        </div>
        <div>
          <input type="checkbox" id="isDraft" value={isDraft} checked={isDraft} onChange={inputToggle.call(this, 'isDraft')} />
          <label htmlFor="isDraft">Draft</label>
        </div>
      </div>
    )
  }

  save = () => {
    const state = { ...this.state }
    state.url = this.props.url
    delete state._id
    axios.post('/api/posts/', state)
      .then(res => console.log('saved!', res.data))
      .catch(err => console.error(err))
  }
}

export default withStyles(s)(PostsGenerator)
