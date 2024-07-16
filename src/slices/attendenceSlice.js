import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const attendenceSlice = createSlice({
    name: "attendance",
    initialState,
    reducers: {
        addAttendence(state, action) {
            state.push(action.payload);
        },
        removeAttendence(state, action) {
            const deletingIndex = action.payload;
            return state.filter((value, index) => index != deletingIndex);
        }
    }
})

export const { addAttendence, removeAttendence } = attendenceSlice.actions;

export default attendenceSlice.reducer;