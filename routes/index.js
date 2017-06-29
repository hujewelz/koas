const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = {
    code: 1,
    data: {
      name: 'koas',
      version: '1.0.0'
    },
    msg: 'success'
  }
})

module.exports = router