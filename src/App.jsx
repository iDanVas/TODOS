import styled from "styled-components";
import TaskList from "./TasksList.jsx";
import InputForm from "./InputForm.jsx";

function App() {

  return (
    <div>
      <ContainerDiv>
        <TitleH1>Just Get It Done!</TitleH1>
      </ContainerDiv>
      <InputForm />
      <TaskList />
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