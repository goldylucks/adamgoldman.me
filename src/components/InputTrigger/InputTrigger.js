import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getCaretCoordinates from 'textarea-caret'

function getHookObject(type, element, startPoint) {
  const caret = getCaretCoordinates(element, element.selectionEnd)

  const result = {
    hookType: type,
    cursor: {
      selectionStart: element.selectionStart,
      selectionEnd: element.selectionEnd,
      top: caret.top,
      left: caret.left,
      height: caret.height,
    },
  }

  if (!startPoint) {
    return result
  }

  result.text = element.value.substr(startPoint, element.selectionStart)

  return result
}

class InputTrigger extends Component {
  constructor(args) {
    super(args)

    this.state = {
      triggered: false,
      triggerStartPosition: null,
    }

    this.handleTrigger = this.handleTrigger.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  componentDidMount() {
    this.props.endTrigger(this.resetState)
  }

  render() {
    return (
      <div
        role="button"
        tabIndex={-1}
        onKeyDown={this.handleTrigger}
      >
        {this.props.children}
      </div>
    )
  }

  resetState() {
    this.setState({
      triggered: false,
      triggerStartPosition: null,
    })
  }

  handleTrigger(event) {
    const {
      trigger,
      onStart,
      onCancel,
      onType,
    } = this.props
    const {
      which,
      shiftKey,
      metaKey,
      ctrlKey,
    } = event
    const { selectionStart } = event.target
    const { triggered, triggerStartPosition } = this.state
    if (!triggered) {
      if (
        which === trigger.keyCode &&
        shiftKey === !!trigger.shiftKey &&
        ctrlKey === !!trigger.ctrlKey &&
        metaKey === !!trigger.metaKey
      ) {
        this.setState({
          triggered: true,
          triggerStartPosition: selectionStart + 1,
        }, () => {
          setTimeout(() => {
            onStart(getHookObject('start', this.props.elementRef))
          }, 0)
        })
        return null
      }
    } else {
      if (which === 8 && selectionStart <= triggerStartPosition) {
        this.setState({
          triggered: false,
          triggerStartPosition: null,
        }, () => {
          setTimeout(() => {
            onCancel(getHookObject('cancel', this.props.elementRef))
          }, 0)
        })

        return null
      }

      setTimeout(() => {
        onType(getHookObject('typing', this.props.elementRef, triggerStartPosition))
      }, 0)
    }

    return null
  }
}

InputTrigger.propTypes = {
  trigger: PropTypes.shape({
    keyCode: PropTypes.number,
    shiftKey: PropTypes.bool,
    ctrlKey: PropTypes.bool,
    metaKey: PropTypes.bool,
  }),
  onStart: PropTypes.func,
  onCancel: PropTypes.func,
  onType: PropTypes.func,
  endTrigger: PropTypes.func,
  children: PropTypes.element.isRequired,
  elementRef: PropTypes.element,
}

InputTrigger.defaultProps = {
  trigger: {
    keyCode: 50,
    shiftKey: true,
    ctrlKey: false,
    metaKey: false,
  },
  onStart: () => {},
  onCancel: () => {},
  onType: () => {},
  endTrigger: () => {},
  elementRef: null,
}

export default InputTrigger
