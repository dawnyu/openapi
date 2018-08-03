const tc = require('../controller/TaokeController')

module.exports = router => {
  router.get('/createTKL', tc.createTaoKouLing)
}