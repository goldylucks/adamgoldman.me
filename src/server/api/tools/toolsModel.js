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
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    nick: {
      type: String,
      required: true,
    },

    credits: String,

    initialState: {
      type: Object,
      required: true,
    },

    testimony1Text: String,
    testimony1Name: String,
    testimony1Src: String,

    steps: [],
    // steps: [getStepsSchema()],

    isRtl: {
      type: Boolean,
      default: false,
    },
  })
}

// function getStepsSchema() {
//   return new Schema({
//
//   })
// }
