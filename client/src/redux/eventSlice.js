import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
  };

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers:{
        setDataEvent: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setDataEvent } =
  eventSlice.actions;

export default eventSlice.reducer;