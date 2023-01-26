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
    toggleTaskDone: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);//Find index in state
      state[index].isDone = !state[index].isDone;//Switches isDone TRUE/FALSE
    }
  }
});

export default tasksSlice.reducer;
export const { addTask, removeTask, toggleTaskDone } = tasksSlice.actions;
console.log({ tasksSlice });