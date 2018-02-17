// @flow

import React from 'react'

import Share from '../../components/Share'
import Ending from '../../components/Ending'
import { scrollToElem } from '../../utils'

import Step from './components/Step'

type Props = {
  tool: Object,
  path: string,
};

const feelTheSame = () => {
  global.alert('sometimes it takes one "learning round" to really notice the benefits on the second round. Do it again and contact me.')
}

const dontUnderstandStep = () => {
  global.alert("follow the steps as best you can now, and contact me when you're done")
}

const shareWithAdam = () => {
  global.alert('sure, FB or email me!')
}

class BrainToolV1 extends React.Component {
  state = {
    currentStep: 0,
    age: '',
    name: '',
    gender: '',
  };

  props: Props;

  render() {
    const {
      gender, name, age, currentStep,
    } = this.state
    const { tool, path } = this.props
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <Share path={path} title={tool.title} />
            </div>
            <div className="col-md-8 col-xs-12">
              <div className="mainheading">
                <h1 className={`posttitle ${!tool.isRtl ? '' : 'rtl'}`}>{tool.title}</h1>
              </div>
              <div className="article-post">
                <h6 style={{ marginBottom: 0, position: 'relative', top: -30 }}>
                  {!tool.isRtl ? 'Step' : 'צעד'} {currentStep}/{tool.stepCount}
                </h6>
                <div>
                  <tool.default
                    {...this.props}
                    onDontUnderstandStep={dontUnderstandStep}
                    onRestart={this.restart}
                    onFeelTheSame={feelTheSame}
                    onShareWithAdam={shareWithAdam}
                    onGoToStep={this.goToStep}
                    onGenderChange={this.genderChange}
                    onAgeChange={this.ageChange}
                    onNameChange={this.nameChange}
                    onUserInputSubmit={this.userInputSubmit}
                    onBack={this.back}
                    onNext={this.next}
                    currentStep={currentStep}
                    Step={Step}
                    renderStep={this.renderStep}
                    dontUnderstand={{
                      text: "I don't understand",
                      onClick: dontUnderstandStep,
                    }}
                    back={{ text: 'back', onClick: this.back }}
                    letsContinue={{ text: "Done, let's continue", onClick: this.next }}
                    gender={gender}
                    name={name}
                    age={age}
                    Next={({ children }) => <a onClick={this.next}>{children}</a>}
                    heShe={gender === 'male' ? 'he' : 'she'}
                    hisHer={gender === 'male' ? 'his' : 'her'}
                    himHer={gender === 'male' ? 'him' : 'her'}
                    myManLady={gender === 'male' ? 'my man' : "m'lady"}
                  />
                </div>
              </div>
              <hr />
              <Ending />
            </div>
          </div>
        </div>
      </div>
    )
  }


    restart = () => {
      this.goToStep(0)
    };

    back = n =>
      this.goToStep(this.state.currentStep - (typeof n === 'number' ? n : 1));
    next = n =>
      this.goToStep(this.state.currentStep + (typeof n === 'number' ? n : 1));

    goToStep = (step) => {
      scrollTop()
      this.setState({ currentStep: step })
    };

    ageChange = evt => this.setState({ age: evt.target.value });
    nameChange = evt => this.setState({ name: evt.target.value });
    genderChange = evt => this.setState({ gender: evt.target.value });

    userInputSubmit = (evt) => {
      evt.preventDefault()
      this.goToStep(this.state.currentStep + 1)
    };

    renderStep = (stepHtml, idx) => (
      <Step step={idx} key={idx} currentStep={this.state.currentStep}>
        {stepHtml}
      </Step>
    );
}

export default BrainToolV1

function scrollTop() {
  return scrollToElem(document.querySelector('html'), 0, 300)
}
