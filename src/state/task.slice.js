import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
        const newTask = {
            id: Date.now(),
            task: action.payload,
            isDone: false
        }
        state.push(newTask);
    },
    removeTask: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);//Find index in state
      state.splice(index, 1);//Remove task from state by INDEX
  },
  markDoneUnDone: (state , action) => {
    const index = state.findIndex((item) => item.id === action.payload);//Find index in state
    if(state[index].isDone === true){//Check if task is DONE
      state[index].isDone = false;
    }else{state[index].isDone = true;}//Set isDone to TRUE
  }
}});

export default tasksSlice.reducer;
export const { addTask , removeTask , markDoneUnDone} = tasksSlice.actions;
console.log({ tasksSlice });