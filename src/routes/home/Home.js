// @flow

import React from 'react'
import { Fetch } from 'react-data-fetching'

import { MESSENGER_LINK_BOOK_SESSION } from '../../constants'
import Markdown from '../../components/Markdown'
import Card from '../../components/Card'
import Ending from '../../components/Ending'

type Props = {
  tutorials: [],
}

const Home = ({ tutorials }: Props) => (
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
          <Fetch
            url="/api/posts/transcripts"
          >
            {({ data }) => data.map(t => (
              <Card {...t} url={`/blog/${t.url}`} key={t.url} />
            ))}
          </Fetch>
        </div>
      </section>
      <hr />
      <Ending nick="mi casa, su casa" />
    </div>
  </div>
)
export default Home
