import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { isTodoDone, removeTodo } from "../redux/slices/todosSlice";

const TodoItemStyle = styled.div`
  .item {
    width: 200px;
    height: 200px;
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
    border-radius: 5px;
    background-color: white;
    border: solid 2px;
    cursor: pointer;
  }
`;

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <TodoItemStyle>
        <div className="item">
          <div className="item-title">{todo.title}</div>
          <div className="item-content">{todo.content}</div>
          <div className="item-buttons">
            <button
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
              style={{ borderColor: "red" }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                dispatch(isTodoDone(todo.id));
              }}
              style={{ borderColor: "green" }}
            >
              {todo.done ? "취소" : "완료"}
            </button>
          </div>
        </div>
      </TodoItemStyle>
    </>
  );
};

export default TodoItem;
