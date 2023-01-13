import styled from "styled-components";
import { useState, useRef } from "react";
import TaskList from "./TasksList.jsx";

function App() {

  const [addedtask, setAddedtask] = useState("What is your next GOAL?");
  const tasks = [];

  const tasksTemplate = [{
    id: "number",
    task: "string",
    isComplited: "Boolean"
  }]

  const myInput = useRef(null);

  const addTask = () => {
    tasks.push(myInput.current.value);
  }

  return (
    <div>
      <Header>
        <Title>Just Get It Done!</Title>
      </Header>
      <InputBox>
        <Input ref={myInput} name="tasktitle" type="text" placeholder={addedtask} />
        <Button onClick={addTask}>Add task</Button>
      </InputBox>
      <TaskList tasks={tasks} />
    </div>
  )
};

export default App;

const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 10px;
  display: block;
  font-size: 96px;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  color: rgb(247, 226, 223);
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
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
const Button = styled.button`
  border-radius: 0px 15px 15px 0px;
  padding: 10px;
  font-size: 16px;
  min-width: 100px;
  background-color: rgb(247, 226, 223);
`;

