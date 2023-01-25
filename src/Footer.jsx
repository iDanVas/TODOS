import styled from "styled-components";
import { useSelector } from "react-redux";

const Footer = () => {

    const tasks = useSelector((state) => state.tasks);

const active = "";
const defaultF = "";
const complited = "";

    return (
        <Box style={{ display: tasks.length > 0 ? "flex" : "none"}}>
            <ButtonBox>
                <Button onClick={defaultF}>All</Button>
                <Button onClick={active}>Active</Button>
                <ButtonC onClick={complited}>Complited</ButtonC>
            </ButtonBox>
        </Box>
    )
};

export default Footer;

const Box = styled.ul`
min-width: 25%;
/* justify-content: end; */
flex-direction: row-reverse;
/* flex-shrink: 1; */
`;

const ButtonBox = styled.div`
  /* display: flex; */
  /* justify-content: end; */
  border-radius: 30px;
  background-color: rgb(26, 27, 27);
  padding: 2px 5px;
  margin: 1rem;
  `;

const Button = styled.button`
  background-color: rgb(247, 226, 223);
  color: black;
  font-size: 16px;
  cursor: pointer;
  width: auto;
  height: 2em;
  /* border-radius: 10%; */
  margin: 0 2px;
  padding: 10px;
  `;

const ButtonC = styled.button`
background-color: rgb(247, 226, 223);
color: black;
font-size: 16px;
cursor: pointer;
width: auto;
height: 2em;
border-radius: 0px 15px 15px 0px;
margin: 0 2px;
padding: 10px;
`;