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
    fbProfile: '',
    name: '',
    date: '',
    age: '',
    diagnosis: '',
    tags: '',
    title: '',
    description: '',
    nick: '',
    isRtl: false,
    intro: '',
    transcript: '',
  }

  componentWillMount() {
    if (this.props.data) {
      const data = { ...this.props.data }
      data.transcript = JSON.stringify(data.transcript, null, 2)
      data.tags = data.tags.join(', ')
      this.setState(data)
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
      title,
      nick,
      tags,
      date,
      age,
      description,
      isRtl,
      diagnosis,
      isDraft,
      intro,
      fbProfile,
      fbReview,
      transcript,
      name,
    } = this.state
    return (
      <div>
        <input className="input" placeholder="title" value={title} onChange={inputChange.call(this, 'title')} />
        Title

        <input className="input" placeholder="nick" value={nick} onChange={inputChange.call(this, 'nick')} />
        Nick

        <input className="input" placeholder="description" value={description} onChange={inputChange.call(this, 'description')} />
        description

        <input className="input" placeholder="fbProfile" value={fbProfile} onChange={inputChange.call(this, 'fbProfile')} />
        fbProfile

        <input className="input" placeholder="name" value={name} onChange={inputChange.call(this, 'name')} />
        name

        <input className="input" placeholder="tags" value={tags} onChange={inputChange.call(this, 'tags')} />
        tags

        <input className="input" placeholder="diagnosis" value={diagnosis} onChange={inputChange.call(this, 'diagnosis')} />
        diagnosis

        <input className="input" placeholder="date" value={date} onChange={inputChange.call(this, 'date')} />
        date

        <input className="input" placeholder="age" value={age} onChange={inputChange.call(this, 'age')} />
        age

        <input className="input" placeholder="fbReview" value={fbReview} onChange={inputChange.call(this, 'fbReview')} />
        fbReview

        <textarea className="textarea" placeholder="intro" value={intro} onChange={inputChange.call(this, 'intro')} />
        intro

        <textarea className="textarea" placeholder="transcript" value={transcript} onChange={inputChange.call(this, 'transcript')} />
        transcript

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
    // uncomment for migrating coded transcripts with "comment" function
    // const comment = md => ({ author: 'comment', md })
    state.transcript = eval(state.transcript) // eslint-disable-line no-eval
    state.tags = state.tags.split(', ')
    axios.post('/api/posts/', state)
      .then(res => console.log('saved!', res.data))
      .catch(err => console.error(err))
  }
}

export default withStyles(s)(PostsGenerator)
