import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// es6模块化
import { resolve } from 'path'
console.log(
  __dirname,
  resolve(__dirname, 'src')
)
// 文件 路径 属于哪个板块？ open system 操作系统  io 模块
// alias
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')  // node 超级
    }
  }
})
