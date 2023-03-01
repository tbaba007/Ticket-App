import { createSlice } from "@reduxjs/toolkit";

const initialState:any = [];

export const ticketSlice = createSlice({
  name: "Tickets",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      const payload = action.payload;
      const data=[...state,payload]
      state=data;
      return state;
    },
  },
});

export const { addTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
