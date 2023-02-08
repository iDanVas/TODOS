import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    currentFilter: "All"
  },
  reducers: {
    initTodos: (state, action) => {
      state.items = action.payload;
    },
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        task: action.payload,
        isDone: false,
        show: true
      }
      state.items.push(newTask);
    },
    removeTask: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);//Find index in state
      state.items.splice(index, 1);//Remove task from state by INDEX
    },
    toggleTaskDone: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);//Find index in state
      state.items[index].isDone = !state.items[index].isDone;//Switches isDone TRUE/FALSE
      // if (state.items[index].show === "Active") {//Switches task currentFilter Active/Completed
      //   state.items[index].show = "Completed";
      // } else {
      //   state.items[index].show = "Active";
      // }
    },
    taskFilter: (state, action) => {
      // state.currentFilter = action.payload
      switch (action.payload) {
        case "All":
          state.items.forEach((item) => item.show = true);
          break;
        case "Active":
          state.items.forEach((item) => item.show = item.isDone == false);
          break;
        case "Completed":
          state.items.forEach((item) => item.show = item.isDone == true);
          break;
      }
    }
  }
});

export default tasksSlice.reducer;
export const { addTask, removeTask, toggleTaskDone, taskFilter, initTodos } = tasksSlice.actions;
console.log({ tasksSlice });