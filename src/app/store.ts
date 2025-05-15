import { configureStore } from "@reduxjs/toolkit";
import { MoodEntriesReducer } from "../Slices/MoodEntries";
import { MoodQuotesReducer } from "../Slices/MoodQuotes";

export const store = configureStore(
    {
        reducer: {
            MoodEntries: MoodEntriesReducer,
            MoodQuotes: MoodQuotesReducer
        }
    }
)