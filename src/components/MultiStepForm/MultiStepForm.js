import React from 'react'
import PropTypes from 'prop-types'
import ReactStars from 'react-stars'
import _ from 'lodash'

import DontReRender from './DontReRender'
import {
  stateForGoToStep,
  stateForBack,
  stateForStepInputChange,
  stateForReviewRating,
  replaceVarsUtil,
  initialAnswerByStepState,
  scrollTop,
} from './multiStepFormUtils'
import Answers from './Answers'

import { isMobile } from '../../utils'
import Markdown from '../../components/Markdown'

class MultiStepForm extends React.Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    hiddenFields: PropTypes.array.isRequired,
    currentStepNum: PropTypes.number.isRequired,
    answerByStep: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    stepsStack: PropTypes.array.isRequired,
    onUpdateProgress: PropTypes.func.isRequired,
    onConcern: PropTypes.func.isRequired,
    path: PropTypes.string,
    scrollTop: PropTypes.func,
    onAnswerLinkPress: PropTypes.func,
    onAnswerNewLinkPress: PropTypes.func,
  }
  static defaultProps = {
    path: '',
    scrollTop,
    onAnswerLinkPress: _.noop,
    onAnswerNewLinkPress: _.noop,
  }

  state = {
    flashedIdx: 0,
    isFlashing: false,
    currentStepNum: this.props.currentStepNum,
    answerByStep: initialAnswerByStepState({
      answerByStep: this.props.answerByStep,
      stepsCount: this.props.steps.length,
      currentStepNum: this.props.currentStepNum,
    }),
    price: this.props.price,
    stepsStack: this.props.stepsStack, // eslint-disable-line react/no-unused-state
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentStepNum !== this.state.currentStepNum) {
      this.props.onUpdateProgress(this.state, prevState)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.flashTimeout)
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 30 }}>{this.renderTitle()}</div>
        {this.renderDescription()}
        {this.renderNotes()}
        {this.renderInput()}
        {this.renderTextarea()}
        {this.renderFlash()}
        {this.renderPaymentForm()}
        {this.renderAnswers()}
        {this.renderStars()}
        {this.renderBack()}
      </div>
    )
  }

  renderTitle() {
    const { title } = this.currentStep()
    if (!title) {
      return null
    }
    return (
      <DontReRender currentStepNum={this.state.currentStepNum}>
        <Markdown source={`## ${this.replaceVars(title)}`} />
      </DontReRender>
    )
  }

  renderDescription() {
    const { description } = this.currentStep()
    if (!description) {
      return null
    }
    return (
      <DontReRender currentStepNum={this.state.currentStepNum}>
        <Markdown source={this.replaceVars(description)} />
      </DontReRender>
    )
  }

  renderNotes() {
    const { notes } = this.currentStep()
    if (!notes) {
      return null
    }
    return (
      <DontReRender currentStepNum={this.state.currentStepNum}>
        <Markdown
          className='text-muted tool-note'
          source={this.replaceVars(notes)}
        />
      </DontReRender>
    )
  }

  renderInput() {
    const { type, inputPlaceholder } = this.currentStep()
    if (type !== 'short') {
      return null
    }
    return (
      <form onSubmit={this.onInputSubmit}>
        <div className='form-group'>
          <input
            value={this.state.answerByStep[this.state.currentStepNum]}
            onChange={this.stepInputChange}
            placeholder={this.replaceVars(
              inputPlaceholder || 'write your answer here',
            )}
            required
            autoFocus={!isMobile()}
            className='form-control'
            aria-describedby='inputHelp'
          />
          <small id='inputHelp' className='form-text text-muted'>
            Your data is safe.
          </small>
        </div>
        <button type='submit' className='btn btn-primary'>
          Press Enter or click to Continue
        </button>
      </form>
    )
  }

  renderTextarea() {
    const { type, inputPlaceholder } = this.currentStep()
    if (type !== 'long') {
      return null
    }
    return (
      <form onSubmit={this.onInputSubmit}>
        <div className='form-group'>
          <textarea
            value={this.state.answerByStep[this.state.currentStepNum]}
            onChange={this.stepInputChange}
            placeholder={this.replaceVars(
              inputPlaceholder || 'write your answer here',
            )}
            required
            autoFocus={!isMobile()}
            className='form-control'
            aria-describedby='inputHelp'
          />
          <small id='inputHelp' className='form-text text-muted'>
            Your data is safe.
          </small>
        </div>
        <button type='submit' className='btn btn-primary'>
          Continue
        </button>
      </form>
    )
  }

  renderFlash() {
    if (this.currentStep().type !== 'flash') {
      return null
    }
    return (
      <div>
        <button onClick={this.initFlash}>Flash me!</button>
        <p>
          {this.state.isFlashing && this.flashPhrase()[[this.state.flashedIdx]]}
        </p>
      </div>
    )
  }

  renderPaymentForm() {
    if (this.currentStep().type !== 'payment') {
      return null
    }
    const { price } = this.state
    return (
      <form
        action='https://www.paypal.com/cgi-bin/webscr'
        method='post'
        target='_blank'
      >
        <input type='hidden' name='cmd' value='_s-xclick' />
        <input type='hidden' name='hosted_button_id' value='L73XBAVRMGQ6S' />
        <div className='form-group'>
          <select
            name='os0'
            className='form-control'
            value={price}
            onChange={evt => {
              this.setState({ price: evt.target.value })
            }}
          >
            <option value='7'>$7 USD</option>
            <option value='9'>$9 USD</option>
            <option value='23'>$23 USD</option>
            <option value='30'>$30 USD</option>
            <option value='70'>$70 USD</option>
            <option value='140'>$140 USD</option>
            <option value='350'>$350 USD</option>
            <option value='600'>$600 USD</option>
            <option value='970'>$970 USD</option>
          </select>
        </div>
        <input type='hidden' name='currency_code' value='USD' />
        <input
          type='image'
          style={{ width: 'auto' }}
          src='https://www.paypalobjects.com/en_US/IL/i/btn/btn_buynowCC_LG.gif'
          border='0'
          name='submit'
          alt='PayPal - The safer, easier way to pay online!'
        />
        <img
          style={{ display: 'none' }}
          alt=''
          border='0'
          src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
          width='1'
          height='1'
        />
      </form>
    )
  }

  renderAnswers() {
    if (!this.currentStep().answers) {
      return null
    }
    const answers = this.currentStep().answers.map(answer => {
      if (answer.text) {
        answer.text = this.replaceVars(answer.text)
      }
      return answer
    })
    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <Answers
          onLinkPress={this.onAnswerLinkPress}
          onNewLinkPress={this.onAnswerNewLinkPress}
          onConcern={this.onConcern}
          isPulsating={this.isFirstStep()}
          path={this.props.path}
          answers={answers}
          onSubmit={this.submitMultipleChoiceAnswer}
          onSubmitOther={this.submitMultipleChoiceOtherAnswer}
        />
      </div>
    )
  }

  renderStars() {
    if (this.currentStep().type !== 'stars-review') {
      return null
    }
    return (
      <ReactStars
        half={false}
        count={5}
        onChange={this.onStarReviewRating}
        size={60}
      />
    )
  }

  renderBack() {
    return this.state.currentStepNum === 0 ? null : (
      <button
        className='btn btn-secondary btn-sm'
        style={{ display: 'block', marginBottom: 10 }}
        onClick={this.back}
      >
        Back
      </button>
    )
  }

  onInputSubmit = evt => {
    evt.preventDefault()
    const { goToStepByNum } = this.currentStep()
    if (goToStepByNum) {
      this.goToStep(Number(goToStepByNum), {
        shouldResetPreviousAnswers:
          Number(goToStepByNum) < this.state.currentStepNum,
      }) // eslint-disable-line max-len
    } else {
      this.next()
    }
  }

  submitMultipleChoiceAnswer = aIdx => {
    const answerByStep = { ...this.state.answerByStep }
    const { text, goToStepByNum, isRepeatProcess, price, goToStepById } =
      this.getAnswerByAidx(aIdx)
    answerByStep[this.state.currentStepNum] = text
    this.setState({ answerByStep })
    if (price) {
      this.setState({ price })
    }
    if (goToStepByNum) {
      this.goToStep(Number(goToStepByNum), {
        shouldResetPreviousAnswers:
          Number(goToStepByNum) < this.state.currentStepNum,
      }) // eslint-disable-line max-len
    } else if (goToStepById) {
      this.goToStepById(goToStepById)
    } else if (isRepeatProcess) {
      this.goToStep(Number(0), { shouldResetPreviousAnswers: true })
    } else {
      this.next()
    }
  }

  submitMultipleChoiceOtherAnswer = (aIdx, text) => {
    const answerByStep = { ...this.state.answerByStep }
    const { goToStepByNum } = this.getAnswerByAidx(aIdx)
    answerByStep[this.state.currentStepNum] = text
    this.setState({ answerByStep })
    if (goToStepByNum) {
      this.goToStep(Number(goToStepByNum), {
        shouldResetPreviousAnswers:
          Number(goToStepByNum) < this.state.currentStepNum,
      }) // eslint-disable-line max-len
    } else {
      this.next()
    }
  }

  onAnswerLinkPress = link => {
    this.props.onAnswerLinkPress(link, this.isLastStep, this.state)
  }
  onAnswerNewLinkPress = link => {
    this.props.onAnswerNewLinkPress(link, this.isLastStep, this.state)
  }
  get isLastStep() {
    return this.state.currentStepNum === this.props.steps.length - 1
  }
  getAnswerByAidx(aIdx) {
    return this.currentStep().answers[aIdx]
  }

  initFlash = () => {
    this.setState({ isFlashing: true }, this.setFlashTimeout)
  }

  setFlashTimeout = () => {
    this.flashTimeout = setTimeout(
      this.incFlashIdx,
      this.currentStep().flashSpeed,
    )
  }

  incFlashIdx = () => {
    const { flashedIdx } = this.state
    if (flashedIdx === this.flashPhrase().length - 1) {
      this.setState({ isFlashing: false, flashedIdx: 0 })
      return
    }
    this.setState({ flashedIdx: flashedIdx + 1 }, this.setFlashTimeout)
  }

  flashPhrase() {
    return this.state.answerByStep[this.currentStep().flashStepNum].split(' ')
  }

  back = () => {
    this.setState(stateForBack)
    this.props.scrollTop()
  }

  next = () => {
    this.goToStep(this.state.currentStepNum + 1)
  }

  goToStep = (stepToGoTo, { shouldResetPreviousAnswers } = {}) => {
    this.setState(stateForGoToStep(stepToGoTo, { shouldResetPreviousAnswers }))
    this.props.scrollTop()
  }

  stepInputChange = evt => {
    this.setState(stateForStepInputChange(evt.target.value))
  }

  currentStep() {
    return this.props.steps[this.state.currentStepNum]
  }

  replaceVars(str) {
    return replaceVarsUtil({
      str,
      hiddenFields: this.props.hiddenFields,
      answerByStep: this.state.answerByStep,
      currentStepNum: this.state.currentStepNum,
    })
  }

  onStarReviewRating = rating => {
    this.setState(stateForReviewRating(rating))
    this.props.scrollTop()
  }

  goToStepById = id => {
    this.goToStep(this.stepNumById(id))
  }

  stepNumById = id => this.props.steps.findIndex(s => s.id === id)

  isFirstStep() {
    return this.state.currentStepNum === 0
  }

  onConcern = () => {
    this.props.onConcern(Number(this.state.currentStepNum))
  }
}
export default MultiStepForm
