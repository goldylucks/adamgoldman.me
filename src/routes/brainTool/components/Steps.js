import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../../../components/Markdown';
import Answers from './Answers';
import { scrollToElem } from '../../../utils';

class Steps extends React.Component {
  static propTypes = {
    initialState: PropTypes.object,
    steps: PropTypes.array.isRequired,
  };

  static defaultProps = {
    initialState: {},
  };

  state = {
    ...this.props.initialState,
    currentStep: 0,
    inputs: {},
  };

  back = n =>
    this.goToStep(this.state.currentStep - (typeof n === 'number' ? n : 1));
  next = n =>
    this.goToStep(this.state.currentStep + (typeof n === 'number' ? n : 1));

  goToStep = step => {
    scrollToElem(document.querySelector('#main-layout'), 0, 300);
    this.setState({ currentStep: step });
  };

  goToStepByTitle = title => {
    const { steps } = this.props;
    scrollToElem(document.querySelector('#main-layout'), 0, 300);
    this.setState({
      currentStep: steps.indexOf(steps.find(s => s.title === title)),
    });
  };

  registerInput = id => evt => {
    this.setState({
      inputs: Object.assign({}, this.state.inputs, {
        [id]: evt.target.value,
      }),
    });
  };

  replaceVars = description => {
    if (Object.keys(this.state.inputs).length === 0) {
      return description;
    }
    const reg = new RegExp(
      Object.keys(this.state.inputs)
        .map(id => `\\b${id}\\b`)
        .join('|'),
      'g',
    );
    return description.replace(reg, match => this.state.inputs[match]);
  };

  render() {
    const { steps } = this.props;
    const { currentStep } = this.state;

    return (
      <div>
        <h3 style={{ marginBottom: 60 }}>
          Step {currentStep}/{steps.length - 1}
        </h3>
        {steps.map((step, idx) => (
          <div
            key={step.title}
            style={
              idx === currentStep ? { display: 'block' } : { display: 'none' }
            }
          >
            <Markdown
              source={`
${!step.title ? '' : `## ${step.title}`}

${step.description(this.state)}
`}
            />
            {step.input && (
              <form
                onSubmit={evt => {
                  evt.preventDefault();
                  if (step.input.onSubmit) {
                    step.input.onSubmit(this);
                    return;
                  }
                  this.next();
                }}
                className="tool-form"
              >
                <input
                  value={this.state.inputs[step.input.id]}
                  onChange={this.registerInput(step.input.id)}
                  className="input"
                  placeholder={step.input.placeholder}
                  required
                />
                <button className="button">Let&apos; continue</button>
              </form>
            )}
            <Answers
              that={this}
              goToStepByTitle={this.goToStepByTitle}
              answers={step.answers}
              onNext={this.next}
              noBack={idx === 0}
            />
            {step.postAnswer && (
              <Markdown source={step.postAnswer} className="tool-source" />
            )}
          </div>
        ))}
      </div>
    );
  }
}
export default Steps;
