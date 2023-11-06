import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";
import userSlice from "./userSlice";
import transaksiSlice from "./transaksiSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    event: eventSlice,
    transaksi: transaksiSlice,
  },
});
