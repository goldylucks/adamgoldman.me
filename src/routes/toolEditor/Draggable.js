import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import { nn, scrollToElem } from '../../utils'

export default class Draggable_ extends React.Component {
    static propTypes = {
      sIdx: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }

    shouldComponentUpdate(nextProps) {
      if (this.props.title !== nextProps.title) {
        return true
      }
      if (this.props.sIdx !== nextProps.sIdx) {
        return true
      }
      return false
    }

    render() {
      const { sIdx, title } = this.props

      return (
        <Draggable key={sIdx} draggableId={sIdx}>
          {(providedInner, snapshotInner) => (
            <div>
              <div
                key={sIdx}
                ref={providedInner.innerRef}
                style={getItemStyle(
                          providedInner.draggableStyle,
                          snapshotInner.isDragging,
                        )}
                {...providedInner.dragHandleProps}
              >
                <a onClick={() => scrollToElem(document.querySelector('html'), document.querySelector(`#step-${sIdx}`).getBoundingClientRect().top - document.body.getBoundingClientRect().top, 300)}>{nn(sIdx)}</a> - {title}
              </div>
              {providedInner.placeholder}
            </div>
                  )}
        </Draggable>
      )
    }
}

const grid = 2

function getItemStyle(draggableStyle, isDragging) {
  return {
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : '',
    border: '1px solid #000',
    // styles we need to apply on draggables
    ...draggableStyle,
  }
}
