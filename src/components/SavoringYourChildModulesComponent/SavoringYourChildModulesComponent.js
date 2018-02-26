// @flow

import React from 'react'

import {
  TYPEFORM_ID_SAVORING_PEACEFUL_ENDING,
  TYPEFORM_ID_SAVORING_REENGAGING_THE_FUTURE,
  TYPEFORM_ID_SAVORING_RELATIONSHIP_CONSOLIDATION,
  TYPEFORM_ID_SAVORING_REUNION,
  TYPEFORM_ID_SAVORING_SAVORING_THE_FUTURE,
  TYPEFORM_ID_SAVORING_SPECIAL_DAYS,
} from '../../constants'
import Card from '../Card'

const modules = [
  {
    title: 'Peaceful Ending', description: 'Attach the moment of transition to your last happy memory', url: 'peaceful-ending', formId: TYPEFORM_ID_SAVORING_PEACEFUL_ENDING,
  },
  {
    title: 'Savoring The Future', description: 'Savor the future plans & dreams for your child', url: 'savoring-the-future', formId: TYPEFORM_ID_SAVORING_SAVORING_THE_FUTURE,
  },
  {
    title: 'Reunion', description: 'Reunite with your child\'s presence and valued relationship', url: 'reunion', formId: TYPEFORM_ID_SAVORING_REUNION,
  },
  {
    title: 'Reengaging The Future', description: 'Let the qualities of your child propel you towards a brightening future', url: 'reengaging-the-future', formId: TYPEFORM_ID_SAVORING_REENGAGING_THE_FUTURE,
  },
  {
    title: 'Special Days', description: 'Birthdays, holidays, and transition days as an opportunity', url: 'special-days', formId: TYPEFORM_ID_SAVORING_SPECIAL_DAYS,
  },
  {
    title: 'Relationship Consolidation', description: 'Soften bad experiences & intensify positive ones', url: 'relationship-consolidation', formId: TYPEFORM_ID_SAVORING_RELATIONSHIP_CONSOLIDATION,
  },
]

const SavoringYourChildModulesComponent = () => (
  <div>
    <section className="recent-posts">
      <div className="card-columns listrecent">
        {modules
          .map(m => (
            <Card {...m} url={`/savoring-your-child/${m.url}`} key={m.url} />
          ))}
      </div>
    </section>
  </div>
)

export default SavoringYourChildModulesComponent
