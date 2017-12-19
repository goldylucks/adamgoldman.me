// @flow

import React from 'react'

import Markdown from '../../components/Markdown'
import Ending from '../../components/Ending'
import BreadCrumbs from '../../components/BreadCrumbs'
import FbShareButton from '../../components/FbShareButton'
import FbComments from '../../components/FbComments'

import StepsV2 from './components/Steps-v2'

type Props = {
  tool: Object,
};

// eslint-disable-next-line react/prefer-stateless-function
class BrainToolV2 extends React.Component {
  props: Props;

  render() {
    const { tool } = this.props
    return (
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
          <h1 className={`main-title ${!tool.isRtl ? '' : 'rtl'}`}>{tool.title}</h1>
          <div>
            <StepsV2 {...this.props.tool} />
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
  }
}

export default BrainToolV2
