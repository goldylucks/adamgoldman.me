// @flow

import React from 'react'

import Card from '../Card'
import { didUserFillForm } from '../../utils'

type Props = {
  modules: Object,
  user: Object,
}

const SavoringYourChildModulesComponent = ({ modules, user }: Props) => (
  <div>
    <section className='recent-posts'>
      <div className='card-columns listrecent'>
        {modules.map(m => (
          <Card
            {...m}
            url={`/savoring-your-child/${m.url}`}
            key={m.url}
            isDone={didUserFillForm(user, m.formId)}
          />
        ))}
      </div>
    </section>
  </div>
)

export default SavoringYourChildModulesComponent
