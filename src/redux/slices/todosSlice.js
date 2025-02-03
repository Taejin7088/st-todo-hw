import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { ...action.payload, id: new Date().getTime(), done: false };
      return [...state, todo];
    },
    removeTodo: (state, action) => {
      const tempTodos = state.filter((todo) => {
        return todo.id !== action.payload;
      });
      return tempTodos;
    },
    isTodoDone: (state, action) => {
      const tempTodos = state.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return todo.done ? { ...todo, done: false } : { ...todo, done: true };
      });
      return tempTodos;
    },
  },
});

export const { addTodo, removeTodo, isTodoDone } = todosSlice.actions;
export default todosSlice.reducer;
