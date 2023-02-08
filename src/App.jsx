import styled from "styled-components";
import TaskList from "./TasksList.jsx";
import InputForm from "./InputForm.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";
import { getAllTasks } from "./network/todos.api.js";
import { useDispatch, useSelector } from "react-redux";
import { initTodos } from "./state/task.slice.js";

function App() {

  const todos = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getInitialData() {
      const initialTasks = await getAllTasks();
      dispatch(initTodos(initialTasks));
    };
    getInitialData();
  }, []);

  return (
    <div>
      <ContainerDiv>
        <TitleH1>Just Get It Done!</TitleH1>
      </ContainerDiv>
      <InputForm />
      <TaskList />
      <Footer />
    </div>
  );
};

export default App;

const ContainerDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TitleH1 = styled.h1`
  margin-top: 50px;
  margin-bottom: 10px;
  display: block;
  font-size: 96px;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  color: rgb(247, 226, 223);
`;