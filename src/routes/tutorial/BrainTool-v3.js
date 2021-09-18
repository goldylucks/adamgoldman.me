// @flow

import React from 'react'

import StepsV2 from './components/Steps-v2'

type Props = {
  tool: Object,
  path: string,
}

const BrainToolV3 = ({ tool }: Props) => (
  <div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-2 col-xs-12' />
        <div className='col-md-8 col-xs-12'>
          <div className='mainheading'>
            <h1 className={`posttitle ${!tool.isRtl ? '' : 'rtl'}`}>
              {tool.title}
            </h1>
          </div>
          <div className='article-post'>
            <StepsV2 {...tool} />
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
)

export default BrainToolV3
