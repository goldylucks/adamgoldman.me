// @flow

import React from 'react'

import Card from '../../components/Card'

const modules = [
  { title: 'Peaceful Ending', description: 'Attach the moment of transition to your last happy memory', url: 'peaceful-ending' },
  { title: 'Savoring The Future', description: 'Savor the future plans & dreams for your child', url: 'savoring-the-future' },
  { title: 'Reunion', description: 'Reunite with your child\'s presence and valued relationship', url: 'reunion' },
  { title: 'Reengaging The Future', description: 'Let the qualities of your child propel you towards a brightening future', url: 'reengaging-the-future' },
  { title: 'Special Days', description: 'Birthdays, holidays, and transition days as an opportunity', url: 'special-days' },
  { title: 'Relationship Consolidation', description: 'Soften bad experiences & intensify positive onces', url: 'relationship-consolidation' },
]

const SavoringYourChildModules = () => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle">Which module you want to explore next?</h1>
      </div>
      <section className="recent-posts">
        <div className="card-columns listrecent">
          {modules
            .map(m => (
              <Card {...m} url={`/savoring-your-child/${m.url}`} key={m.url} />
            ))}
        </div>
      </section>
      <hr />
    </div>
  </div>
)

export default SavoringYourChildModules
