import { createSlice } from "@reduxjs/toolkit";

export const counterFeatureKey = "counter";

const initialstate = { count: 0 }

const counterSlice = createSlice({
    name: counterFeatureKey,
    initialState: initialstate,
    reducers: {
        incrementCountAction: (state, action) => {
            state.count = state.count + 1
        },
        decrementCountAction: (state, action) => {
            state.count = state.count > 1 ? (state.count - 1) : 1
        },
        resetCountAction: (state, action) => {
            state.count = 0;
        }
    }
})

export const CounterActions = counterSlice.actions;
export default counterSlice

