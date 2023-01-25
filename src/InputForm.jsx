import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useRef } from "react";

import { addTask } from "./state/task.slice";

const InputForm = () => {

  const dispatch = useDispatch();
  const myInput = useRef();

  const addTodo = () => {
    dispatch(addTask(myInput.current.value));
    myInput.current.value = "";
  };

  return (
    <InputBox>
      <Input id="input" 
        ref={myInput} 
        name="tasktitle" 
        type="text" required
        placeholder="What is your next GOAL?" />
      <Button onClick={() => addTodo()}>Add task</Button>
    </InputBox>
  )
};

export default InputForm;

const InputBox = styled.div`//
  display: flex;
  justify-content: center;
`;

const Input = styled.input`//
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
  max-width: 500px;
  background-color: rgb(26, 27, 27);
  color: rgb(247, 226, 223);
`;
const Button = styled.button`//
  border-radius: 0px 15px 15px 0px;
  padding: 10px;
  font-size: 16px;
  min-width: 100px;
  background-color: rgb(247, 226, 223);
`;



