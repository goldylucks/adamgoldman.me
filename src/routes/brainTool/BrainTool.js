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

import Steps from './components/Steps'

type Props = {
  tool: Object,
};

class BrainToolPage extends React.Component {
  state = {
    switchLeft: false,
  };

  componentDidMount = () => {
    if (window.location.search.match(/chart/)) {
      this.setState({ switchLeft: true })
    }
  };

  toggleSwitch = () =>
    this.setState({
      switchLeft: !this.state.switchLeft,
    });

  props: Props;

  render() {
    const { tool } = this.props
    const { switchLeft } = this.state
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 className="main-title">{tool.title}</h1>
            {tool.mockState && (
              <a
                className="switch-container"
                onClick={this.toggleSwitch}
                data-left-image={cloudImg('adamgoldman.me/chart.png')}
                data-right-image={cloudImg('adamgoldman.me/step.png')}
              >
                <div
                  className={`switch-icon ${switchLeft ? 'active' : ''}`}
                  style={{
                    background:
                      'url(https://png.icons8.com/workflow/ios7/20/ffffff)',
                  }}
                />
                <div
                  className={`switch ${switchLeft ? 'left' : 'right'}`}
                  style={{ marginLeft: 6 }}
                />
                <div
                  className={`switch-icon ${switchLeft ? '' : 'active'}`}
                  style={{
                    background:
                      'url(https://png.icons8.com/foot/ios7/20/ffffff)',
                  }}
                />
              </a>
            )}
          </div>
          {tool.mockState && (
            <div>
              {switchLeft && (
                <div>
                  <StopWarning
                    id={tool.title}
                    text="# Don't rob yourself from a valuable learning experience!

Go through the wholeness tool once or twice before going over the 'dry information'. You only have ONE chance in your life to EXPERIENCE it without your conscious brain knowing it. Please take it! Pretty please?"
                  />
                  <Chart {...tool} />
                </div>
              )}
              {!switchLeft && <Steps {...tool} />}
            </div>
          )}
          {!tool.mockState && <Steps {...tool} />}
          <hr />
          <FbShareButton style={{ marginBottom: 10 }} />
          <Markdown source="
  You can do this,
  and more,
  I've got your back.
  "
          />
          <Ending nick={tool.nick} />
          <FbComments style={{ marginTop: 10 }} />
        </div>
      </div>
    )
  }
}

export default BrainToolPage
