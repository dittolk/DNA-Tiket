import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
  };

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers:{
        setData: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setData } =
  eventSlice.actions;

export default eventSlice.reducer;