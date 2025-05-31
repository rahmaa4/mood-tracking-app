import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MoodQuotes } from "../utils/types";

const initialState:MoodQuotes = {}

const options = {
    name: "Mood Quotes",
    initialState: initialState, 
    reducers: {
        loadMoodQuotes: (state:MoodQuotes, action:PayloadAction<MoodQuotes>) => {
            state = action.payload;
            return state;
        }
    }
}

const MoodQuotesSlice = createSlice(options);
export const { loadMoodQuotes } = MoodQuotesSlice.actions;
export const MoodQuotesReducer = MoodQuotesSlice.reducer;

