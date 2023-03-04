# vue 集训一

- vue3.0 + pinia + ts
- node + mysql
- vue2.0

- 路由ts 规则
   1. ts 为了代码的正确性
   2. createRouter() RouterOptions ts类型约束
      typescript 通过类型约束， 可以让所有人写的代码一致
      对新手很好，不用删了代码跑路
      js 代码太随意， 原因是没有类型约束是弱类型 语言
      企业级开发，
   3. 

- store 的ts 规则
   1. 数据管理非常重要，约束数据 todos
   2. type Todo = {id: string, text: string, isComplete: boolean}   
      const todos: Ref<Todo[]> = ref([])