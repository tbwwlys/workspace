import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 接口
// ? 表示可选的，可要可不要
// enum 枚举类型
enum PostStatus {
    Unpublished,
    Published,
    Draft
}
interface Post {
    title: string;
    content?: string;
    status: PostStatus;
}
let post: Post = {
    title: 'One Day',
    content: '字节面试来了',
    status: PostStatus.Unpublished
}
createApp(App).mount('#app')
