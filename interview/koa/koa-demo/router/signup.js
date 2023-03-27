const router = require('koa-router')(); // 路由对象
// 控制权交给 control 层
const controller = require('../controller/c-signup')
router.post('/signup', controller.postSignup)
router.get('/signup', controller.getSignup)

module.exports = router