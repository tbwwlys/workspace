const router = require('koa-router')(); // 路由对象
// 控制权交给 control 层
const controller = require('../controller/c-signin')
router.post('/signin', controller.postSignin)
router.get('/signin', controller.getSignin)

module.exports = router