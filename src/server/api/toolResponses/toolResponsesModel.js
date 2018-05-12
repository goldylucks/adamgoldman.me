import mongoose from 'mongoose'

const { Schema } = mongoose
const ToolResponsesSchema = getSchema()

export default (function toolResponsesModel() {
  let tools
  try {
    tools = mongoose.model('toolresponses')
  } catch (error) {
    tools = mongoose.model('toolresponses', ToolResponsesSchema)
  }
  return tools
}())

function getSchema() {
  return new Schema({
    title: {
      type: String,
      required: true,
    },

    toolId: {
      type: Schema.Types.ObjectId,
      ref: 'tools',
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },

    status: {
      type: String,
      required: true,
      default: 'In Progress',
      enum: ['In Progress', 'Completed'],
    },

    currentStepNum: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    hiddenFields: [],

    steps: [],

    isRtl: {
      type: Boolean,
      default: false,
    },

    stepsStack: {
      type: [],
      required: true,
      default: [],
    },

    answerByStep: {
      type: Object,
      required: true,
      default: {},
    },

    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  }, { minimize: false })
}
