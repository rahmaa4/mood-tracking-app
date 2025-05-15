import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MoodEntries, Entry} from "../utils/types";

const initialState:MoodEntries = []


const options = {
    name: "Mood Entries",
    initialState: initialState,
    reducers: {
        loadEntries: (state:MoodEntries, action:PayloadAction<MoodEntries>) => {
            return action.payload;
        },
        addNewEntry: (state:MoodEntries, action:PayloadAction<Entry>) => { 
            state.push(action.payload) //push new entry to state;
            return state //return updated state. 
        }
    }
}

const MoodEntriesSlice = createSlice(options);
export const { loadEntries, addNewEntry } = MoodEntriesSlice.actions;
export const MoodEntriesReducer = MoodEntriesSlice.reducer;
