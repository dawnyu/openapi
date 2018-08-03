const Router = require('koa-router')
const wxapp = require('./wxapp')
const taoke = require('./taoke')

module.exports = function(){
  var router = new Router({
    prefix: '/api'
  })
  //加载微信后台路由
  wxapp(router)
  taoke(router)
  return router
}