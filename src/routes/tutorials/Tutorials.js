// @flow

import React from 'react'

import { filterDrafts } from '../../utils'
import BottomSection from '../../components/BottomSection'
import Card from '../../components/Card'

type Props = {
  title: '',
  description: '',
  tutorials: [],
}

const ToolsListPage = ({ title, description, tutorials }: Props) => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle">{title}</h1>
        <p className="lead">{description}</p>
      </div>
      <section className="recent-posts">
        <div className="section-title">
          <h2><span>All Tutorials</span></h2>
        </div>
        <div className="card-columns listrecent">
          {tutorials
            .filter(filterDrafts)
            .map(t => (
              <Card {...t} url={`/tools/${t.url}`} key={t.url} />
            ))}
        </div>
      </section>
    </div>
    <BottomSection />
  </div>
)

export default ToolsListPage
