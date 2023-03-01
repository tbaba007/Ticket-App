import { configureStore } from "@reduxjs/toolkit";
import  addTicket from "./features/ticketSlice";

export const store=configureStore({
    reducer:{
        tickets:addTicket
    }
})

export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch