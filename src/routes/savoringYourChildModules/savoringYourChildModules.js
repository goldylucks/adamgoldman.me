// @flow

import React from 'react'

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
