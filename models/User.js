const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const UserSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  openid: {
    type: String
  },
  username: {
    type: String
  },
  pass: {
    type: String
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})
UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})


const User = mongoose.model('User', UserSchema)

module.exports = User