const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
   ctx.body = {
    code: 1,
    data: {
      name: 'koas',
      homepage: 'https://github.com/hujewelz/koas'
    },
    msg: 'success!'
  }
})


module.exports = router