const getSign = require('../utils/md5Sign')

const mongoose = require('mongoose'),
  User = mongoose.model('User'),
  uuidv1 = require('uuid/v1')

class TkService {
  constructor() {}
  async createTaoKouLing() {
    getSign({aa: '2121'})
    return {list: []}
  }
}

module.exports = new TkService()