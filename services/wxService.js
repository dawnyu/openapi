// const DBM = require('./dbm'),   dbm = new DBM('../db/demo.json')
const mongoose = require('mongoose'),
  User = mongoose.model('User'),
  uuidv1 = require('uuid/v1')

class WxService {
  constructor() {}
  async getUserinfo() {
    let query = User.find({username:'test'}),
      res = []
    await query.exec((err, user) => {
      if (!err) {
        res = user
      }
    })
    return {list: res}
  }
}

module.exports = new WxService()