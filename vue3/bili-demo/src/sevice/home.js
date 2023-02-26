import axios from './config.js' // axios 配置文件

export const getSwiperList = () => {
    return axios.get('/swiperList')
}
export const getVideosList = () => {
    return axios.get('/videosList')
}