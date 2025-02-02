import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slices/todosSlice.js";

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;
