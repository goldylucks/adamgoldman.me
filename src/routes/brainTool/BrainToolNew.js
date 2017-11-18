// @flow

import React from 'react'

import Markdown from '../../components/Markdown'
import Ending from '../../components/Ending'
import BreadCrumbs from '../../components/BreadCrumbs'
import FbShareButton from '../../components/FbShareButton'
import FbComments from '../../components/FbComments'
import Chart from '../../components/Chart'
import StopWarning from '../../components/StopWarning'
import { cloudImg } from '../../utils'

import NewSteps from './components/NewSteps'

type Props = {
  tool: Object,
};

class BrainToolNew extends React.Component {
  state = {
    switchLeft: false,
    showChart: false,
  };

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
          <div style={{ display: 'flex', justifyContent: 'space-between', direction: tool.isRtl ? 'rtl' : 'ltr' }}>
            <h1 className="main-title">{tool.title}</h1>
            {this.renderSwitch()}
          </div>
          {this.renderSteps()}
          {this.renderChart()}
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

  renderChart() {
    const { tool } = this.props
    if (!this.state.switchLeft || !tool.mockState) {
      return null
    }
    if (!this.state.showChart) {
      return (
        <StopWarning
          id={tool.title}
          onDismiss={() => this.setState({ showChart: true })}
          text={`# Don't rob yourself from a valuable learning experience!  
            
Go through the "${tool.title}" tool once or twice before going over the 'dry information'. You only have ONE chance in your life to EXPERIENCE it without your conscious brain knowing it. Please take it! Pretty please?`}
        />
      )
    }
    return (
      <Chart {...tool} />
    )
  }

  renderSteps() {
    if (this.state.switchLeft) {
      return null
    }
    return <NewSteps {...this.props.tool} />
  }

  renderSwitch() {
    if (!this.props.tool.mockState) {
      return null
    }
    return (
      <a
        className="switch-container"
        onClick={() => this.setState({ switchLeft: !this.state.switchLeft })}
        data-left-image={cloudImg('adamgoldman.me/chart.png')}
        data-right-image={cloudImg('adamgoldman.me/step.png')}
      >
        <div
          className={`switch-icon ${this.state.switchLeft ? 'active' : ''}`}
          style={{
            background:
              'url(https://png.icons8.com/workflow/ios7/20/ffffff)',
          }}
        />
        <div
          className={`switch ${this.state.switchLeft ? 'left' : 'right'}`}
          style={{ marginLeft: 6 }}
        />
        <div
          className={`switch-icon ${this.state.switchLeft ? '' : 'active'}`}
          style={{
            background:
              'url(https://png.icons8.com/foot/ios7/20/ffffff)',
          }}
        />
      </a>
    )
  }
}

export default BrainToolNew
