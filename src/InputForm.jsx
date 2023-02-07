import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addTask } from "./state/task.slice";
import toastroptions from "./styles/toastr.options.js"

const InputForm = () => {

  toastr.options = toastroptions;

  const dispatch = useDispatch();
  const myInput = useRef(null);

  const addTodo = () => {
    const msg = "You didn`t typed any task";
    (myInput.current.value === "") ? toastr.info(msg):
    dispatch(addTask(myInput.current.value));
    myInput.current.value = "";
  };

  return (
    <MiniForm onSubmit={(e) => e.preventDefault()}>
      <Input
        ref={myInput}
        type="text"
        placeholder="What is your next GOAL?"
      />
      <Button onClick={() => addTodo()}>Add task</Button>
    </MiniForm>
  )
};

export default InputForm;

const MiniForm = styled.form`//
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



