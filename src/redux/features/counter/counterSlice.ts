import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count : 10,
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state, action) => {state.count = state.count + action.payload},
        
        decrement : (state) => {state.count = state.count-1},
    },
});

export const {increment, decrement} =counterSlice.actions
export default counterSlice.reducer;
