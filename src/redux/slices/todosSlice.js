import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ title: "제목입니다", content: "내용입니다." }];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
