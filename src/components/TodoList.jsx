import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";
const TodoListStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .title {
    font-size: 40px;
  }
  .item-area {
    display: flex;
    flex-wrap: wrap;
    min-height: 350px;
  }
`;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const workingTodos = todos.filter((todo) => {
    return !todo.done;
  });

  const doneTodos = todos.filter((todo) => {
    return todo.done;
  });

  return (
    <TodoListStyle>
      <div className="title">Working..🔥</div>
      <div className="item-area">
        {workingTodos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </div>
      <div className="title">Done..🎉</div>
      <div className="item-area">
        {doneTodos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </div>
    </TodoListStyle>
  );
};

export default TodoList;
