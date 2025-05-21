import { createSlice , nanoid } from '@reduxjs/toolkit'
import { useDeferredValue } from 'react'

const initialState = {
    todos : [{id : 1 , text : 'yoo'}]
}

const todoSlices = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text : action.payload,
                // completed : false
            }
            state.todos.push(todo)
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    }
})

export const { addTodo , removeTodo} = todoSlices.actions

export default todoSlices.reducer
