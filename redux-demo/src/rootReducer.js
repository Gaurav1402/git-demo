import { combineReducers } from "@reduxjs/toolkit";
import counterSlice, { counterFeatureKey } from "./Components/CounterSlice";
import taskSlice, { taskFeatureKey } from "./Components/TaskSlice";

const rootReducer = combineReducers({
    [counterFeatureKey]: counterSlice.reducer,
    [taskFeatureKey]: taskSlice.reducer
})

export default rootReducer