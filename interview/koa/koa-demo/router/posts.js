const router = require('koa-router')(); // 路由对象
const controller = require('../controller/c-posts')


router.get('/posts', controller.getPosts)

module.exports = router