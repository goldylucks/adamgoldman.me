// @flow

import React from 'react'

import Markdown from '../../components/Markdown'
import Card from '../../components/Card'
import Ending from '../../components/Ending'

type Props = {
  transcripts: [],
  tutorials: [],
}

const Home = ({ transcripts, tutorials }: Props) => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle">Adam Goldman</h1>
        <small>Relax, it&apos;s just life ...</small>
        <Markdown
          className="lead"
          source="
Book a [session](/book), try a [tutorial](/tools), [learn](/transcripts) what's possible, and [read](/FB_REVIEWS) what others have to say.
"
        />
      </div>
      <section className="recent-posts">
        <div className="section-title">
          <h2><span>Featured Transcripts</span></h2>
        </div>
        <div className="card-columns card-columns-three listrecent">
          {transcripts
            .map(t => (
              <Card {...t} url={`/blog/${t.url}`} key={t.url} />
            ))}
        </div>
      </section>
      <section className="recent-posts">
        <div className="section-title">
          <h2><span>Featured Tutorials</span></h2>
        </div>
        <div className="card-columns card-columns-three listrecent">
          {tutorials
            .map(t => (
              <Card {...t} url={`/tools/${t.url}`} key={t.url} />
            ))}
        </div>
      </section>
      <hr />
      <Ending nick="mi casa, su casa" />
    </div>
  </div>
)

export default Home
