import { createSlice, nanoid } from "@reduxjs/toolkit";  //nanoid = generate unique id's har todo ki alag hogi,
                                                        //  createslice = redux main action and reducer bnane ka shrcut

const initialState = {                                  // store shuruvat main kesa dikhega
    todos: [{id : 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {      // humesa access milega... state = initalState ki values ka access degi... action = values lene k kaam ayga eg- id, remove
            const todo = {
                id : nanoid(),  //new value chle jaygi
                text: action.payload  //text yaha se lenge.. payload main value milegi.. payload apne main ek object hai
            }
            state.todos.push(todo)
        },
        removeTodo: ( state, action ) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = newText;
            }
        },
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer  //store ko awareness chahiye inn sab reducers ka