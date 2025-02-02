import React from "react";
import styled from "styled-components";

const TodoItemStyle = styled.div`
  .item {
    width: 200px;
    height: 300px;
    border: 3px solid green;
    border-radius: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
  }
  .item-title {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 30px;
  }
  .item-content {
    margin: 10px 10px 0px 10px;
  }
  .item-buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: auto;
    margin-bottom: 10px;
  }
  .item-buttons button {
    height: 30px;
    width: 80px;
    border: solid 1px;
    border-radius: 5px;
  }
`;

const TodoItem = ({ todo }) => {
  return (
    <>
      <TodoItemStyle>
        <div className="item">
          <div className="item-title">{todo.title}</div>
          <div className="item-content">{todo.content}</div>
          <div className="item-buttons">
            <button style={{ backgroundColor: "red" }}>dd</button>
            <button>dd</button>
          </div>
        </div>
      </TodoItemStyle>
    </>
  );
};

export default TodoItem;
