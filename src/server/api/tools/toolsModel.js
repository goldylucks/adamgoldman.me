import mongoose from 'mongoose'

const { Schema } = mongoose
const ToolsSchema = getSchema()

export default mongoose.model('tools', ToolsSchema)

function getSchema() {
  return new Schema({
    url: {
      type: String,
      required: true,
      index: { unique: true },
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
