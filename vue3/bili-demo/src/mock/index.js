import Mock from 'mockjs'
import swiperList from './data/swiperList.js'
import videosList from './data/videosList.js'
// 假接口要满足什么？数据 url
Mock.setup({
    timeout: '50-1000' // 随机的延迟时间，模拟请求耗时
})
// 轮播图
Mock.mock(/\/swiperList/,'get',() => {
    return {
        code: 0,
        result: swiperList
    }
})

Mock.mock(/\/videosList/, 'get', () => {
    return {
        code: 0,
        result: videosList
    }
})