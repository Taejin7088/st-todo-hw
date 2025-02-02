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
  }
`;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  //working쪽에하나
  return (
    <TodoListStyle>
      <div className="title">Working..🔥</div>
      <div className="item-area">
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.title} />;
        })}
      </div>
      <div className="title">Done..🎉</div>
      <div className="item-area"></div>
    </TodoListStyle>
  );
};

export default TodoList;
