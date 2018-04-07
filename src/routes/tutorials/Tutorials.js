// @flow

import React from 'react'
import { Fetch } from 'react-data-fetching'

import { filterDrafts } from '../../utils'
import BottomSection from '../../components/BottomSection'
import Card from '../../components/Card'

import tutorialsHardCoded from './tutorialsHardCoded'

type Props = {
  title: '',
  path: '',
  description: '',
}

const ToolsListPage = ({
  title, description, path,
}: Props) => (
  <React.Fragment>
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
          <Fetch
            url="/api/tools/all"
          >
            {({ data }) => data.concat(tutorialsHardCoded).filter(filterDrafts)
            .map(t => (
              <Card {...t} url={`${path}/${t.url}`} key={t.url} />
            ))}
          </Fetch>
        </div>
      </section>
    </div>
    <BottomSection />
  </React.Fragment>
)

export default ToolsListPage
