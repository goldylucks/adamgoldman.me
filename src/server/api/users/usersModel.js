import mongoose from 'mongoose'

const { Schema } = mongoose
const UsersSchema = getSchema()

export default (function usersModel() {
  let users
  try {
    users = mongoose.model('users')
  } catch (error) {
    users = mongoose.model('users', UsersSchema)
  }
  return users
}())

function getSchema() {
  return new Schema({

    name: {
      type: String,
      required: true,
      min: 2,
    },

    fbUserId: String,
    fbPictureUrl: String,
    fbServerAccessToken: String,

    gender: String,
    savoring: Object,

    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },

    isAdmin: Boolean,
  }, { minimize: false })
}
