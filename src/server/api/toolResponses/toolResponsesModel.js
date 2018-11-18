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

    rating: Number,

    steps: [],

    wpUserId: String,
    firstName: String,
    lastName: String,

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
