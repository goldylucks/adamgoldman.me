import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ToolEditor.css'

class AnswerOption extends React.PureComponent {
  render() {
    const { toggleValue, fieldId, fieldValue, icon, onToggle, onFieldChange } =
      this.props
    return (
      <div className='answerOption'>
        <div className='answerOptionToggle' onClick={onToggle}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <input
          type='text'
          className={cx('answerOptionField', { isVisible: toggleValue })}
          id={fieldId}
          placeholder={fieldId}
          value={fieldValue}
          onChange={onFieldChange}
        />
      </div>
    )
  }
}

AnswerOption.propTypes = {
  icon: PropTypes.element.isRequired,
  toggleValue: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  fieldValue: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
}

export default AnswerOption
