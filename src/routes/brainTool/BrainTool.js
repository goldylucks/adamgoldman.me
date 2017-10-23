// @flow

import React from 'react';

import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';
import Ending from '../../components/Ending';
import BreadCrumbs from '../../components/BreadCrumbs';
import FbShareButton from '../../components/FbShareButton';
import { scrollToElem } from '../../utils';
import Step from './components/Step';

type Props = {
  tool: Object,
};

const feelTheSame = () => {
  global.alert(
    'sometimes it takes one "learning round" to really notice the benefits on the second round. Do it again and contact me.',
  );
};

const dontUnderstandStep = () => {
  global.alert(
    "follow the steps as best you can now, and contact me when you're done",
  );
};

const shareWithAdam = () => {
  global.alert('sure, FB or email me!');
};

class ToolPage extends React.Component {
  state = {
    currentStep: 0,
    age: '',
    name: '',
    gender: '',
  };

  props: Props;

  restart = () => {
    this.goToStep(0);
  };

  back = () => this.goToStep(this.state.currentStep - 1);
  next = () => this.goToStep(this.state.currentStep + 1);

  goToStep = step => {
    scrollToElem(document.querySelector('#main-layout'), 0, 300);
    this.setState({ currentStep: step });
  };

  ageChange = evt => this.setState({ age: evt.target.value });
  nameChange = evt => this.setState({ name: evt.target.value });
  genderChange = evt => this.setState({ gender: evt.target.value });

  userInputSubmit = evt => {
    evt.preventDefault();
    this.goToStep(this.state.currentStep + 1);
  };

  renderStep = (stepHtml, idx) => (
    <Step step={idx} key={idx} currentStep={this.state.currentStep}>
      {stepHtml}
    </Step>
  );

  render() {
    const { gender, name, age, currentStep } = this.state;
    const { tool } = this.props;
    return (
      <Layout>
        <div className="main-layout tool-page">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <h3 style={{ marginBottom: 60 }}>
            Step {currentStep}/{tool.stepCount}
          </h3>
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
            heShe={gender === 'male' ? 'he' : 'she'}
            hisHer={gender === 'male' ? 'his' : 'her'}
            himHer={gender === 'male' ? 'him' : 'her'}
            myManLady={gender === 'male' ? 'my man' : "m'lady"}
          />
          <hr />
          <FbShareButton style={{ marginBottom: 10 }} />
          <Markdown source="
  You can do this,  
  and more,  
  I've got your back.
  " />
          <Ending nick={tool.nick} />
        </div>
      </Layout>
    );
  }
}

export default ToolPage;
