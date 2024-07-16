import { configureStore } from "@reduxjs/toolkit";
import attendenceReducer from "../slices/attendenceSlice";

export const store = configureStore({
    reducer: {
        attendence: attendenceReducer,
    }
})