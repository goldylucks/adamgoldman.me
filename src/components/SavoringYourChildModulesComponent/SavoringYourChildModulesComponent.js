// @flow

import React from 'react'

import Card from '../Card'

type Props = {
  modules: string,
  user: Object,
}

const SavoringYourChildModulesComponent = ({ modules, user }:Props) => (
  <div>
    <section className="recent-posts">
      <div className="card-columns listrecent">
        {modules
          .map(m => (
            <Card {...m} url={`/savoring-your-child/${m.url}`} key={m.url} user={user} />
          ))}
      </div>
    </section>
  </div>
)

export default SavoringYourChildModulesComponent
