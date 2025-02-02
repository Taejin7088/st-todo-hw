import React from "react";
import styled from "styled-components";

const TodoItemStyle = styled.div`
  .item {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const TodoItem = ({ todo }) => {
  return (
    <>
      <TodoItemStyle>
        <div className="item">
          <div className="item-title">{todo.title}</div>
          <div className="item-content">{todo.content}</div>
        </div>
      </TodoItemStyle>
    </>
  );
};

export default TodoItem;
