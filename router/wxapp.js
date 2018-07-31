const wx = require('../controller/WX')

module.exports = router => {
  router.get('userinfo', wx.getUserinfo)
}