// @flow

import React from 'react'
import axios from 'axios'

import { filterDrafts } from '../../utils'
import BottomSection from '../../components/BottomSection'
import Card from '../../components/Card'

import tutorialsHardCoded from './tutorialsHardCoded'

type Props = {
  title: string,
  path: string,
  description: string,
}

class ToolsListPage extends React.Component<Props> {
  state = {
    tutorials: [],
    isFetchingTutorials: true,
  }
  componentDidMount() {
    this.fetchTutorials()
  }
  render() {
    const { title, description, path } = this.props
    const { tutorials, isFetchingTutorials } = this.state
    return (
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
              {
                isFetchingTutorials
                  ? <div>Loading ...</div>
                  : tutorials
                    .concat(tutorialsHardCoded)
                    .filter(filterDrafts)
                    .filter(this.filterSavoring)
                  .map(t => (
                    <Card {...t} url={`${path}/${t.url}`} key={t.url} />
                  ))
                }
            </div>
          </section>
        </div>
        <BottomSection />
      </React.Fragment>
    )
  }
  fetchTutorials() {
    axios.get('/api/tools/all')
      .then(({ data }) => this.setState({ tutorials: data, isFetchingTutorials: false }))
      .catch((err) => {
        global.console.log(err)
        this.setState({ isFetchingTutorials: false })
      })
  }
  filterSavoring = tool => !tool.isSavoring
}

export default ToolsListPage
