import styled from "styled-components";
import { MdDoneOutline, MdRestoreFromTrash } from 'react-icons/md';

const TaskList = ({ tasks }) => {
  console.log(tasks);

  return (
    <TaskContainer>
      {tasks.map((item) => (
        <TaskBox key={item.id}>
          <Task>{item}</Task>
          <ActionButton><MdDoneOutline /></ActionButton>
          <ActionButton><MdRestoreFromTrash /></ActionButton>
        </TaskBox>))}
    </TaskContainer>
  );
};

const TaskContainer = styled.ul`
  display: flex;
  min-width: 25%;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 1;
`;

export default TaskList;

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