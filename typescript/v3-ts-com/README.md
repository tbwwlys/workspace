- js 和 ts 的区别
   js 语言？ 弱类型的脚本  代码的编译在运行的一刹那，
   ts 静态强类型 提前编译 语法检测  和 类型检测 专门的编译阶段
   ts -> js -> 运行 转译成为js运行
   ts 比 js 更适合大型项目 js 缺乏类型检测 ， 很多莫名其妙的bug
   ts 可以解决90%这些问题 编译阶段就发现


- props
   泛型约束 defineProps<{

   }>
   interface Props {
      bar?: number
   }
   defineProps<Props>
   interface 缺点是  不支持默认值 , 宏函数 withDefaults


- defineEmits
// 运行时， const emit = defineEmits(['change', 'update'])
// 基于类型 对触发事件有更好的控制

- 数据接口怎么做？
   - /api   // 表示接口地址，后端工程师 接口路径的开始，约定

- 前后端分离
   前端 vue  3000
   后端 koa  8080
   