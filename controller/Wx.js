const service = require('../services/wxservice')
const db = require('../sqldb/index')
const uuidv1 = require('uuid/v1')
const wxDb = db.Wx

  exports.getUserinfo = async(ctx, next) =>{
    ctx.body = await service.getUserinfo(ctx.params.openid)
    await next()
  }


  exports.mysqlAdd = async(ctx,next) =>{
    let data = {
      username: 'admin',
      password:'123456',
      userId:uuidv1()
    }
    return db.sequelize.transaction(t => {
      return User.create(data,{
        transaction:t
      }).then(()=>{
        ctx.body = {success:true}
        next()
      }).catch(err =>{
        console.log('err=%s',err)
      })
    })
  }