import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";
import userSlice from "./userSlice"

export const store = configureStore({
    reducer:{
        user: userSlice,
        event: eventSlice
    },
})