// @flow

import React from 'react'
import axios from 'axios'

import {
  TYPEFORM_ID_SAVORING_INTRO_TEST,
  TYPEFORM_ID_SAVORING_PEACEFUL_ENDING_TEST,
  TYPEFORM_ID_SAVORING_REVIEW_TEST,
} from '../../constants'

/* eslint-disable react/no-danger */

class AdminTypeform extends React.Component {
  state = {
    questions: [],
  }

  componentDidMount() {
    this.onTypeFormChange(TYPEFORM_ID_SAVORING_INTRO_TEST)
  }

  render() {
    const { questions } = this.state
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle">Admin Typeform</h1>
          </div>
          <div>
            <p className="lead" style={{ marginBottom: 0 }}>Select Typeform:</p>
            <select
              className="select"
              onChange={evt => this.onTypeFormChange(evt.target.value)}
              required
            >
              <option value={TYPEFORM_ID_SAVORING_INTRO_TEST}>
                Intro Form test
              </option>
              <option value={TYPEFORM_ID_SAVORING_PEACEFUL_ENDING_TEST}>
                Peaceful Ending test
              </option>
              <option value={TYPEFORM_ID_SAVORING_REVIEW_TEST}>
                Review test
              </option>
            </select>
            <hr />
            <h3 style={{ marginTop: '20px' }}>Results</h3>
            <div>
              <ul>
                {questions && questions.map(i => (
                  <li key={i.id}><div dangerouslySetInnerHTML={{ __html: i.question }} /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onTypeFormChange = async (formId) => {
    try {
      const formResponses = await axios.get(`api/typeform/${formId}`)
      const formData = formResponses.data.questions
      this.setState({ questions: formData })
    } catch (err) {
      global.console.error('err', err)
    }
  }
}


export default AdminTypeform
