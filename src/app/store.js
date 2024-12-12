import {configureStore} from "@reduxjs/toolkit";
import weather from "../features/weatherSlice.js";
import message from "../features/messageSlice.js";

export const store = configureStore({
    reducer: {
        weather, message
    }
})