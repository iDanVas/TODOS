import styled from "styled-components";
import { MdDoneOutline , MdRestoreFromTrash } from 'react-icons/md';

function App() {

  return (
    <div>
        <Header>
          <Title>Just Get It Done!</Title>
        </Header>
          <InputBox>
            <Input type="text" placeholder="What is your next GOAL?"/>
            <Button>Add task</Button>
          </InputBox>
        <TaskContainer>
          <TaskBox>
            <Task>task</Task> 
            <ActionButton><MdDoneOutline/></ActionButton> 
            <ActionButton><MdRestoreFromTrash/></ActionButton>
          </TaskBox> 
        </TaskContainer>
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

const TaskContainer = styled.ul`
  display: flex;
  min-width: 25%;
  justify-content: center;
`;

const TaskBox = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: rgb(26, 27, 27);
  padding: 2px 5px;
  margin: 1rem;
`;

const Task = styled.li`
  flex: 1;
  padding: 7px;
  font-size: 19px;
  font-family: 'Work Sans', sans-serif;
  color: white;
`;

const ActionButton = styled.button`
  background-color: rgb(247, 226, 223);
  color: black;
  font-size: 19px;
  cursor: pointer;
  width: 2em;
  height: 2em;
  border-radius: 80%;
  margin: 0 5px;
`;

