import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    reducers: {
        setWeather: (state, action) => action.payload
    }
})

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
