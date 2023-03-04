import { defineStore } from 'pinia'// 某个模块的状态函数化
import { ref, Ref, reactive, computed } from 'vue'
import { nanoid } from 'nanoid'
// 告别类式编程 函数式
type Todo = { id: string; text: string; isComplete: boolean} // 自定义类型
const lsKey = '_v_todos'
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
        updateLocalStorage()
    }
    const initFromLocalStorage = () => {
        const lstodos = localStorage.getItem(lsKey)

        if(lstodos === null ) {
            todos.value = []
        } else {
            todos.value = JSON.parse(lstodos)
        }
    }
    const updateLocalStorage = () => {
        localStorage.setItem(lsKey, JSON.stringify(todos.value))
    }
    
    const completedTodos = computed(() => {
        return todos.value.filter(todo => todo.isComplete === true)
    })

    const incompleteTodos = computed(() => {
        return todos.value.filter(todo => todo.isComplete !== true)
    })

    const toggleTodo = (id: string) => {
        // todos更新
        todos.value.forEach(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
        })
        updateLocalStorage();
    }

    const clearCompletedTodos = () => {
        todos.value = todos.value.filter(todo => todo.isComplete === false)
        updateLocalStorage();
    }

    const deleteTodo = (id: string) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }
    return {
        todos,
        addTodo,
        initFromLocalStorage,
        completedTodos,
        toggleTodo,
        clearCompletedTodos,
        deleteTodo
    }
})