import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {  taskFilter } from "./state/task.slice";

const Footer = () => {

    const tasks = useSelector((state) => state.tasks.items);
    const dispatch = useDispatch();

    return (
        <Box style={{ display: tasks.length > 0 ? "flex" : "none"}}>
            <ButtonBox>
                <ButtonA onClick={()=> dispatch(taskFilter("All"))}>All</ButtonA>
                <Button onClick={()=> dispatch(taskFilter("Active"))}>Active</Button>
                <ButtonC onClick={()=> dispatch(taskFilter("Completed"))}>Completed</ButtonC>
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

const ButtonA = styled.button`
  background-color: rgb(247, 226, 223);
  color: black;
  font-size: 16px;
  cursor: pointer;
  width: auto;
  height: 2em;
  border-radius: 15px 0px 0px 15px;
  /* margin: 0 2px; */
  padding: 5px;
  `;
const Button = styled.button`
  background-color: rgb(247, 226, 223);
  color: black;
  font-size: 16px;
  cursor: pointer;
  width: auto;
  height: 2em;
  /* border-radius: 10%; */
  /* margin: 0 2px; */
  padding: 5px;
  `;

const ButtonC = styled.button`
background-color: rgb(247, 226, 223);
color: black;
font-size: 16px;
cursor: pointer;
width: auto;
height: 2em;
border-radius: 0px 15px 15px 0px;
/* margin: 0 2px; */
padding: 5px;
`;