import React, { useState } from "react";
import styled from "styled-components";

const FromStyle = styled.div`
  background-color: #b0acac;
  height: 100px;
  display: flex;
  align-items: center;
  form {
    margin: 10px;
    display: flex;
    gap: 40px;
  }
  label {
    margin: 10px;
  }
  input {
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
  }
  button {
    background-color: #1e655a;
    height: 40px;
    width: 80px;
    border: solid 0px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;
const TodoList = () => {
  const [todo, setTodo] = useState({ title: "", content: "" });
  console.log(todo);
  return (
    <>
      <FromStyle>
        <form onSubmit={() => {}}>
          <div>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={todo.title}
              onChange={(e) => {
                setTodo({ ...todo, title: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="title">내용</label>
            <input
              type="text"
              id="content"
              value={todo.content}
              onChange={(e) => {
                setTodo({ ...todo, content: e.target.value });
              }}
            />
          </div>
          <button>추가하기</button>
        </form>
      </FromStyle>
    </>
  );
};

export default TodoList;
