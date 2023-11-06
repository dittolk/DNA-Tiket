import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const transaksiSlice = createSlice({
  name: "transaksi",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = transaksiSlice.actions;

export default transaksiSlice.reducer;
