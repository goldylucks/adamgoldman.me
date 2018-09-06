import mongoose from 'mongoose'
import isEmail from 'validator/lib/isEmail'

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
      min: 2,
    },

    password: {
      type: String,
      select: false,
    },

    email: {
      type: String,
      required: false,
      validate: [isEmail, 'invalid email'],
    },

    fbUserId: String,
    fbPictureUrl: String,
    fbServerAccessToken: String,

    gender: String,
    savoringChildName: String,
    savoringChildGender: String,

    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },

    isAdmin: Boolean,
  }, { minimize: false })
}
