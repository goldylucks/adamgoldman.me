import mongoose from 'mongoose'

const { Schema } = mongoose
const ToolsSchema = getSchema()

export default (function toolsModel() {
  let tools
  try {
    tools = mongoose.model('tools')
  } catch (error) {
    tools = mongoose.model('tools', ToolsSchema)
  }
  return tools
}())

function getSchema() {
  return new Schema({
    url: {
      type: String,
      required: true,
      index: { unique: true },
    },

    isDraft: {
      type: Boolean,
      required: true,
      default: false,
    },

    hasReview: {
      type: Boolean,
      required: true,
      default: false,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    nick: {
      type: String,
    },

    credits: String,

    hiddenFields: [],

    steps: [],

    isRtl: {
      type: Boolean,
      default: false,
    },
  })
}
