// @flow

import React from 'react'
import axios from 'axios'

import { MESSENGER_LINK_BOOK_SESSION } from '../../constants'
import Markdown from '../../components/Markdown'
import Card from '../../components/Card'
import Ending from '../../components/Ending'

type Props = {
  tutorials: [],
}

class Home extends React.Component<Props> {
  state = {
    transcripts: [],
    isFetchingTranscripts: true,
  }

  componentDidMount() {
    this.fetchTranscripts()
  }

  render() {
    const { transcripts, isFetchingTranscripts } = this.state
    const { tutorials } = this.props
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle">Relax, it&apos;s just life ...</h1>
            <Markdown
              className="lead"
              source={`
Book a [session](${MESSENGER_LINK_BOOK_SESSION}), hack your [mind](/tools), [learn](/transcripts) what's possible, and [read](/FB_REVIEWS) what others have to say.
                `}
            />
          </div>
          <section className="recent-posts">
            <div className="section-title">
              <h2><span>Hack Your Mind</span></h2>
            </div>
            <div className="card-columns card-columns-three listrecent">
              {tutorials
                  .map(t => (
                    <Card {...t} url={`/tools/${t.url}`} key={t.url} />
                  ))}
            </div>
          </section>
          <section className="recent-posts">
            <div className="section-title">
              <h2><span>Mind Hacking Sessions Transcripts</span></h2>
            </div>
            <div className="card-columns card-columns-three listrecent">
              {
                    isFetchingTranscripts
                      ? 'Loading transcripts...'
                      : transcripts.map(t => (
                        <Card {...t} url={`/blog/${t.url}`} key={t.url} />
                      ))
                  }
            </div>
          </section>
          <hr />
          <Ending nick="mi casa, su casa" />
        </div>
      </div>
    )
  }

  fetchTranscripts() {
    axios.get('/api/posts/transcripts')
      .then(({ data }) => this.setState({ transcripts: data, isFetchingTranscripts: false }))
      .catch((err) => {
        global.console.log(err)
        this.setState({ isFetchingTranscripts: false })
      })
  }
}

export default Home
