import mongoose from 'mongoose'

const { Schema } = mongoose
const PostsSchema = getSchema()

export default (function postsModel() {
  let posts
  try {
    posts = mongoose.model('posts')
  } catch (error) {
    posts = mongoose.model('posts', PostsSchema)
  }
  return posts
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

    tags: {
      type: [],
      default: [],
    },

    // transcript specific stuff
    transcript: [],
    intro: String,
    age: String,
    name: String,
    date: String,
    fbReview: String,
    diagnosis: String,
    fbProfile: String,
    ps: String,

    isBodyRtl: {
      type: Boolean,
      default: false,
    },
  })
}
