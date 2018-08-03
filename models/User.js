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
  wechatNickname: {
    type: String
  },
  nickname: {
    type: String
  },
  accountType: {
    type: String // 0：精品导购
  },
  // 邀请码
  invitationCode: {
    type: String
  },
  // 上级
  superiorId: {
    type: String
  },
  // 是否是合伙人 0:不是 1是
  partner: {
    type: Number
  },
  phone: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  integral: {
    type: Number
  },
  yueducoin: {
    type: Number
  },
  balance: {
    type: Number
  },
  // 是否停用 0否 1是
  deadStatus: {
    type: Number
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