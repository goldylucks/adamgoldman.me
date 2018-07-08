// @flow

import React from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import MessageMe from '../../components/MessageMe'
import SavoringYourChildModulesComponent from '../../components/SavoringYourChildModulesComponent'

// TODO  get from DB instead
import { modules } from './data'

type Props = {
  user: Object,
}

const SavoringYourChildModules = ({ user }:Props) => (
  <div>
    <div className="container">
      <BreadCrumbs
        basePath="/savoring-your-child"
        crumbs={[
          { text: 'Modules', path: '/modules' },
        ]}
      />
      <div className="mainheading">
        <h1 className="sitetitle">Which module you want to explore next?</h1>
      </div>
      <SavoringYourChildModulesComponent modules={modules} user={user} />
      <hr />
      <MessageMe />
    </div>
  </div>
)

export default SavoringYourChildModules
