// @flow

import React from 'react'

import MessageMe from '../../components/MessageMe'
import SelectedCard from '../../components/SelectedCard'

const modules = [
  {
    title: 'Peaceful Ending', description: 'Attach the moment of transition to your last happy memory', url: 'peaceful-ending', formId: 'Rwa8iu',
  },
  {
    title: 'Savoring The Future', description: 'Savor the future plans & dreams for your child', url: 'savoring-the-future', formId: 'UGn1TQ',
  },
  {
    title: 'Reunion', description: 'Reunite with your child\'s presence and valued relationship', url: 'reunion', formId: 'hcBBCM',
  },
  {
    title: 'Reengaging The Future', description: 'Let the qualities of your child propel you towards a brightening future', url: 'reengaging-the-future', formId: 'A3Pjm8',
  },
  {
    title: 'Special Days', description: 'Birthdays, holidays, and transition days as an opportunity', url: 'special-days', formId: 'kERZFQ',
  },
  {
    title: 'Relationship Consolidation', description: 'Soften bad experiences & intensify positive ones', url: 'relationship-consolidation', formId: 'lDT9YI',
  },
  {
    title: 'Test 1', description: 'Soften bad experiences & intensify positive ones', url: 'test1', formId: 'FYg9Da',
  },
  {
    title: 'Test 2', description: 'Soften bad experiences & intensify positive ones', url: 'test2', formId: 'm4iegB',
  },
]

type Props = {
  user: Object
}

const SavoringYourChildModules = ({ user }:Props) => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle">Which module you want to explore next?</h1>
      </div>
      <section className="recent-posts">
        <div className="card-columns listrecent">
          {modules
              .map(m => (
                <SelectedCard {...m} url={`/savoring-your-child/${m.url}`} key={m.url} user={user} />
              ))}
        </div>
      </section>
      <hr />
      <MessageMe />
    </div>
  </div>
)

export default SavoringYourChildModules
