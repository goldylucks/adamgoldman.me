import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import { inputChange, inputToggle } from '../../forms'

import './PostsGenerator.css'

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
      <div className='container'>
        <div className='mainheading'>
          <h1 className='posttitle'>Posts Generator</h1>
        </div>

        {this.renderDetails()}

        <hr />

        <div className={s.controls}>
          <a className={s.control} onClick={this.save}>
            Save
          </a>
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
        <h2>Details</h2>
        <div className='form-group'>
          Title
          <input
            className='form-control'
            placeholder='title'
            value={title}
            onChange={inputChange.call(this, 'title')}
          />
        </div>

        <div className='form-group'>
          Nick
          <input
            className='form-control'
            placeholder='nick'
            value={nick}
            onChange={inputChange.call(this, 'nick')}
          />
        </div>

        <div className='form-group'>
          description
          <input
            className='form-control'
            placeholder='description'
            value={description}
            onChange={inputChange.call(this, 'description')}
          />
        </div>

        <div className='form-group'>
          fbProfile
          <input
            className='form-control'
            placeholder='fbProfile'
            value={fbProfile}
            onChange={inputChange.call(this, 'fbProfile')}
          />
        </div>

        <div className='form-group'>
          name
          <input
            className='form-control'
            placeholder='name'
            value={name}
            onChange={inputChange.call(this, 'name')}
          />
        </div>

        <div className='form-group'>
          tags
          <input
            className='form-control'
            placeholder='tags'
            value={tags}
            onChange={inputChange.call(this, 'tags')}
          />
        </div>

        <div className='form-group'>
          diagnosis
          <input
            className='form-control'
            placeholder='diagnosis'
            value={diagnosis}
            onChange={inputChange.call(this, 'diagnosis')}
          />
        </div>

        <div className='form-group'>
          date
          <input
            className='form-control'
            placeholder='date'
            value={date}
            onChange={inputChange.call(this, 'date')}
          />
        </div>

        <div className='form-group'>
          age
          <input
            className='form-control'
            placeholder='age'
            value={age}
            onChange={inputChange.call(this, 'age')}
          />
        </div>

        <div className='form-group'>
          fbReview
          <input
            className='form-control'
            placeholder='fbReview'
            value={fbReview}
            onChange={inputChange.call(this, 'fbReview')}
          />
        </div>

        <div className='form-group'>
          intro
          <textarea
            className='form-control'
            placeholder='intro'
            value={intro}
            onChange={inputChange.call(this, 'intro')}
          />
        </div>

        <div className='form-group'>
          transcript
          <textarea
            className='form-control'
            placeholder='transcript'
            value={transcript}
            onChange={inputChange.call(this, 'transcript')}
          />
        </div>

        <div>
          <input
            type='checkbox'
            id='isRtl'
            value={isRtl}
            checked={isRtl}
            onChange={inputToggle.call(this, 'isRtl')}
          />
          <label htmlFor='isRtl'>RTL</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='isDraft'
            value={isDraft}
            checked={isDraft}
            onChange={inputToggle.call(this, 'isDraft')}
          />
          <label htmlFor='isDraft'>Draft</label>
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
    axios
      .post('/api/posts', state)
      .then(res => {
        global.console.log('saved!', res.data)
        global.alert('saved!')
      })
      .catch(err => {
        global.console.error(err)
        global.alert(err.message)
      })
  }
}

export default withStyles(s)(PostsGenerator)
