import { defineStore } from 'pinia'// 某个模块的状态函数化
import { ref, Ref, reactive } from 'vue'
import { nanoid } from 'nanoid'
// 告别类式编程 函数式
type Todo = { id: string; text: string; isComplete: boolean} // 自定义类型
export const useTodoStore = defineStore('todos', () => {
    const todos: Ref<Todo[]> = ref([])// 每一项的类型
    const addTodo = (text :string) => {
        todos.value = [
            ...todos.value,
            {
                id: nanoid(), // 生成唯一的id
                isComplete: false,  // 未完成
                text    // 文本的内容
            }
        ]
    }
    return {
        todos,
        addTodo
    }
})