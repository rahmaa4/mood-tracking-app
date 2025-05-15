import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MoodQuotes } from "../utils/types";

const initialState:MoodQuotes = {}

const options = {
    name: "Mood Quotes",
    initialState: initialState, 
    reducers: {
        loadMoodQuotes: (state:MoodQuotes, action:PayloadAction<MoodQuotes>) => {
            return action.payload;
        }
    }
}

const MoodQuotesSlice = createSlice(options);
export const { loadMoodQuotes } = MoodQuotesSlice.actions;
export const MoodQuotesReducer = MoodQuotesSlice.reducer;

