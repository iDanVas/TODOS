import styled from "styled-components";
import { MdDoneOutline as DoneIcon, MdRestoreFromTrash as DeleteIcon } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { removeTask, markDoneUnDone } from "./state/task.slice";

const Task = ({ tasks }) => {
    const dispatch = useDispatch();

    return (
        <>
            {tasks.map((item) => (
                <TaskBoxForm key={item.id}>
                    <TaskLi
                        style={{ textDecoration: item.isDone ? 'line-through' : '' }}>
                        {item.task}</TaskLi>
                    <ActionButton
                        onClick={() => dispatch(markDoneUnDone(item.id))}><DoneIcon />
                    </ActionButton>
                    <ActionButton
                        onClick={() => dispatch(removeTask(item.id))}><DeleteIcon />
                    </ActionButton>
                </TaskBoxForm>))}
        </>
    );

};

const TaskBoxForm = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: rgb(26, 27, 27);
  padding: 2px 5px;
  margin: 1rem;
  `;

const TaskLi = styled.li`
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

export default Task;

