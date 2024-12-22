import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getAllTask: (state, { payload }) => {
      state.task = payload;
    },
    addTask: (state, { payload }) => {
       state.task.push(payload);
    },
    delTask: (state, { payload }) => {
      state.task = state.task.filter((item) => {
        item._id !== payload;
      });
    },
    updateTask:(state,{payload})=>{
        const index = state.task.findIndex((item)=>(item._id == payload._id)) 
        if (index !== -1) {
            state.task[index] = payload;
          }
    }
  },
});

export const { getAllTask, addTask, delTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
