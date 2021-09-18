import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

import { freshAnswer, freshStep } from './toolEditorUtils'
import Steps from './Steps'
import Controls from './Controls'
import Toc from './Toc'

import catAllergyData from '../../tools/cat-allergy.json'
import { inputChange, inputToggle } from '../../forms'
import './ToolEditor.css'

const toolsData = {
  'cat-allergy': catAllergyData,
}

class ToolEditor extends React.Component {
  state = {
    isDraft: this.props.data?.isDraft || false,
    hasReview: this.props.data?.hasReview || false,
    isSavoring: this.props.data?.isSavoring || false,
    isGrief: this.props.data?.isGrief || false,
    title: this.props.data?.title || '',
    description: this.props.data?.description || '',
    credits: this.props.data?.credits || '',
    steps: this.props.data?.steps || [freshStep()],
    hiddenFields: this.props.data?.hiddenFields || [],
  }

  componentDidMount() {
    this.setInitialData()
  }

  setInitialData() {
    const toolKey = this.props.match.params.tool
    const toolData = toolsData[toolKey]
    this.setState(toolData)
  }

  render() {
    return (
      <div style={{ padding: 10 }}>
        <div className='clearfix' style={{ width: '60%', float: 'left' }}>
          {this.renderDetails()}
          <hr />
          <h1 className='text-center'>Steps</h1>
          <Steps
            steps={this.state.steps}
            onUpdateSteps={this.updateSteps}
            hiddenFields={this.state.hiddenFields}
            onSetStepToPronouns={this.setStepToPronouns}
          />
          <Controls tool={{ ...this.state }} />
        </div>
        <div
          className='clearfix'
          style={{ width: '35%', right: 0, position: 'fixed' }}
        >
          <Toc steps={this.state.steps} onReorderSteps={this.updateSteps} />
        </div>
      </div>
    )
  }

  renderDetails() {
    const {
      title,
      description,
      credits,
      isDraft,
      hasReview,
      isSavoring,
      isGrief,
    } = this.state
    return (
      <div>
        <h1 id='details' className='text-center'>
          Details
        </h1>
        <div className='form-group'>
          Title
          <input
            className='form-control'
            placeholder='Title'
            value={title}
            onChange={inputChange.call(this, 'title')}
          />
        </div>
        <div className='form-group'>
          Description
          <div style={{ position: 'relative' }}>
            <input
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={inputChange.call(this, 'description')}
            />
          </div>
        </div>
        <div className='form-group'>
          Credits
          <input
            className='form-control'
            placeholder='Credits'
            value={credits}
            onChange={inputChange.call(this, 'credits')}
          />
        </div>
        <div className='form-group'>
          <input
            style={{ marginRight: 10 }}
            type='checkbox'
            id='isDraft'
            value={isDraft}
            checked={isDraft}
            onChange={inputToggle.call(this, 'isDraft')}
          />
          <label htmlFor='isDraft'>Draft</label>
        </div>
        <div className='form-group'>
          <input
            style={{ marginRight: 10 }}
            type='checkbox'
            id='hasReview'
            value={hasReview}
            checked={hasReview}
            onChange={inputToggle.call(this, 'hasReview')}
          />
          <label htmlFor='hasReview'>Has review</label>
        </div>
        <div className='form-group'>
          <input
            style={{ marginRight: 10 }}
            type='checkbox'
            id='isSavoring'
            value={isSavoring}
            checked={isSavoring}
            onChange={inputToggle.call(this, 'isSavoring')}
          />
          <label htmlFor='isSavoring'>Is Savoring</label>
        </div>
        <div className='form-group'>
          <input
            style={{ marginRight: 10 }}
            type='checkbox'
            id='isGrief'
            value={isGrief}
            checked={isGrief}
            onChange={inputToggle.call(this, 'isGrief')}
          />
          <label htmlFor='isGrief'>Is grief</label>
        </div>
        <Typeahead
          allowNew
          multiple
          menuId='hiddenFields'
          newSelectionPrefix='Add hidden field:'
          onChange={this.updateHiddenFields}
          defaultSelected={this.state.hiddenFields}
          options={this.state.hiddenFields}
          placeholder='Add hidden field'
        />
      </div>
    )
  }

  elems = {}

  updateHiddenFields = hiddenFields => {
    // TODO :: if an existing field is changed or removed, and it's used by a step, prompt warning
    this.setState({ hiddenFields })
  }

  focusNewStepTitle = (sIdx = this.state.steps.length - 1) =>
    this.elems[`${sIdx}-title`].focus()

  updateSteps = steps => {
    this.setState({ steps })
    // eslint-disable-next-line no-console
    // console.log({ steps })
  }

  setStepToPronouns = stepIdx => {
    const steps = [...this.state.steps]
    const step = freshStep({
      isPronouns: true,
      title: 'Pronouns',
      description: 'What pronouns do you use?',
    })
    step.answers = [
      { text: 'He / Him / His' },
      { text: 'She / Her / Hers' },
      { text: 'Them / They / Theirs' },
    ].map(freshAnswer)
    steps[stepIdx] = step
    this.setState({ steps })
  }
}

export default ToolEditor
