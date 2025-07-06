import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id: 1,
        todo: "Todo msg",
        completed: false,
    }],
   
    addTodo: (todo) => {},   //yeh kaaam kya krega -- decided in outside file such as .. App.jsx 
    updatedTodo: (id, Todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})

export const useTodo = () => {
    return useContext(TodoContext)   //jab bhi useContext use kroge tab usee koi context dena pdega-- jis chiz ke bare baat kr rhe ho
}

export const TodoProvider = TodoContext.Provider // TodoContext.provider da name chota kr dita -- TodoProvider