import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
