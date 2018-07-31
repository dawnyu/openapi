const Router = require('koa-router')
const Wxapp = require('./wxapp')

module.exports = function(){
  var router = new Router({
    prefix: '/api'
  })
  //加载微信后台路由
  Wxapp(router)

  return router
}