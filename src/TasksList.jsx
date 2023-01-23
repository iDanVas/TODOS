import styled from "styled-components";
import { useSelector } from "react-redux";

import Task from "./Task";

const TaskList = () => {

  const tasks = useSelector((state) => state.tasks);

  return (
    <ContainerUl>
      <Task tasks={tasks} />
    </ContainerUl>
  );
};

const ContainerUl = styled.ul`
  display: flex;
  min-width: 25%;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 1;
`;

export default TaskList;