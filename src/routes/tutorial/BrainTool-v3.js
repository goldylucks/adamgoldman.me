// @flow

import React from 'react'

import Tags from '../../components/Tags'
import BottomSection from '../../components/BottomSection'
import Share from '../../components/Share'

import StepsV3 from './components/Steps-v3'
import StepsV2 from './components/Steps-v2'

const toolsV2 = [
  'coming-to-wholeness',
  'trauma-relief-he',
]

type Props = {
  tool: Object,
};

const BrainToolV3 = ({ tool }: Props) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Share />
        </div>
        <div className="col-md-8 col-xs-12">
          <div className="mainheading">
            <h1 className={`posttitle ${!tool.isRtl ? '' : 'rtl'}`}>{tool.title}</h1>
          </div>
          <div className="article-post">
            {console.log(tool.url) || toolsV2.includes(tool.url)
              ? <StepsV2 {...tool} />
              : <StepsV3 {...tool} />
          }
          </div>
          <Tags tags={tool.tags} />
        </div>
      </div>
    </div>
    <BottomSection />
  </div>
)

export default BrainToolV3
