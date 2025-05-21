import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : Date.now(),
            todo : 'msg',
            complete : false
        }
    ],
    addTodos : (todo) =>{},
    deleteTodo : (id) =>{},
    updateTodo : (id , todo) =>{} ,
    completeToggle : (id) =>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => ( useContext(TodoContext) )