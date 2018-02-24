// @flow

import React from 'react'

import Card from '../../components/Card'

type Props = {
  title: '',
  description: '',
  transcripts: [],
}

const Transcripts = ({ title, description, transcripts }: Props) => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle">{title}</h1>
        <p className="lead">{description}</p>
      </div>
      <section className="recent-posts">
        <div className="section-title">
          <h2><span>All Transcripts</span></h2>
        </div>
        <div className="card-columns listrecent">
          {transcripts
            .map(t => (
              <Card {...t} url={`/blog/${t.url}`} key={t.url} />
            ))}
        </div>
      </section>
    </div>
  </div>
)

export default Transcripts
