import { createSlice } from "@reduxjs/toolkit";

export const taskFeatureKey = "tasks";

const initialstate = {
    loading: false, error: false, tasksList: [], task: ""
}
const taskSlice = createSlice({
    name: "tasks", initialState: initialstate,
    reducers: {
        getAllTasks: (state, action) => {
            state.loading = true;
        },
        getAllTasksSucces: (state, action) => {
            state.loading = false;
            state.tasksList = action.payload;
        },
        getAllTasksFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getTaskById: (state, action) => {
            state.loading = true;
        },
        getTaskByIdSuccess: (state, action) => {
            state.loading = false;
            state.task = action.payload;
        },
        getTaskByIdFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        saveTask: (state, action) => {
            state.loading = true;
        },
        saveTaskSuccess: (state, action) => {
            state.loading = false;
            state.error = "";
        },
        saveTaskFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteTask(state, action) {
            state.loading = true;
        },
        deleteTaskSuccess(state, action) {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload);
            state.loading = false;
        },
        deleteTaskFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        editTask(state, action) {
            state.loading = true;
        },
        editTaskSuccess(state, action) {
            const updatedTasks = state.tasksList.map(task =>
                task.id === action.payload.id ? { ...task, ...action.payload } : task
            );
            return { ...state, tasksList: updatedTasks, loading: false };
        },
        editTaskFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})
export const tasksAction = taskSlice.actions;
export default taskSlice;