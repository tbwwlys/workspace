import React, { useReducer, useState } from "react";


// reducer 还原剂
const initialState = {
    todos: []
}

const todoReducer = (state, action) => {
    // 新的状态
    switch (action.type) {
        case 'ADD_TODO': 
            return { 'todos': [...state.todos, action.payload] }; 
        default: 
            return state
    }
}

const TodoList :React.FC = () => {
    const [ state, dispatch] = useReducer(todoReducer, initialState);
    setTimeout(() => {
        dispatch({
            type: 'ADD_TODO',
            payload: { id: 1, text: '打王者', complate: false}
        })
    }, 1000)
    return (
        <ul>
        {
            state.todos.map((todo) => (
                <li>
                    {todo.id}
                    {todo.text}
                </li>     
            ))
        }
        </ul>
    )
}

export default TodoList;