// @flow

import React from 'react'

import MessageMe from '../../components/MessageMe'
import SavoringYourChildModulesComponent from '../../components/SavoringYourChildModulesComponent'

const SavoringYourChildModules = () => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle">Which module you want to explore next?</h1>
      </div>
      <SavoringYourChildModulesComponent />
      <hr />
      <MessageMe />
    </div>
  </div>
)

export default SavoringYourChildModules
