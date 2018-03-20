import React from 'react'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { pure } from 'recompose'

import { reorder, scrollToElem } from '../../utils'

import Draggable from './Draggable'


const Toc = ({ steps, onReorderSteps }) => (
  <div style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
    <h2>TOC</h2>
    <a onClick={() => scrollToElem(document.querySelector('html'), 0, 300)}>Details</a>
    <DragDropContext onDragEnd={result => onDragEnd(result, steps, onReorderSteps)}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {steps.map(({ title }, sIdx) => (
              <Draggable sIdx={sIdx} title={title} />
              ))}
            {provided.placeholder}
          </div>
          )}
      </Droppable>
    </DragDropContext>
  </div>
)

Toc.propTypes = {
  steps: PropTypes.array.isRequired,
  onReorderSteps: PropTypes.func.isRequired,
}

export default pure(Toc)

function onDragEnd(result, steps, onReorderSteps) {
  // dropped outside the list
  if (!result.destination) {
    return
  }
  onReorderSteps(reorder(steps, result.source.index, result.destination.index))
}

const grid = 2

// function getItemStyle(draggableStyle, isDragging) {
//   return {
//     // some basic styles to make the items look a bit nicer
//     userSelect: 'none',
//     padding: grid * 2,
//     margin: `0 0 ${grid}px 0`,
//     // change background colour if dragging
//     background: isDragging ? 'lightgreen' : '',
//     border: '1px solid #000',
//     // styles we need to apply on draggables
//     ...draggableStyle,
//   }
// }

function getListStyle(isDraggingOver) {
  return {
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
  }
}
