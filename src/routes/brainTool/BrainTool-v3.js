// @flow

import React from 'react'

import Markdown from '../../components/Markdown'
import Ending from '../../components/Ending'
import BreadCrumbs from '../../components/BreadCrumbs'
import FbShareButton from '../../components/FbShareButton'
import FbComments from '../../components/FbComments'

import StepsV3 from './components/Steps-v3'

type Props = {
  tool: Object,
};

const BrainToolV3 = ({ tool }: Props) => (
  <div>
    <div className="main-layout tool-page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <BreadCrumbs
          crumbs={[
            { text: 'Brain Hacking Tools', path: '/tools' },
            { text: tool.title },
          ]}
          style={{ marginBottom: 10 }}
        />
        <FbShareButton />
      </div>
      <h1 className="main-title">{tool.title}</h1>
      <div>
        <StepsV3 {...tool} />
      </div>
      <hr />
      <Markdown source={tool.credits} className={`tool-credits ${!tool.isRtl ? '' : 'rtl'}`} />
      <FbShareButton style={{ marginBottom: 10 }} />
      <Markdown source="You can do this, and more, I've got your back." />
      <Ending nick={tool.nick} />
      <FbComments style={{ marginTop: 10 }} />
    </div>
  </div>
)

export default BrainToolV3
