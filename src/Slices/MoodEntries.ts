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
        },
        replaceEntry: (state: MoodEntries, action: PayloadAction<Entry>) => {
            const newEntryID = action.payload.createdAt;
            const updatedState = state.map((entry) => {
                return entry.createdAt === newEntryID ? action.payload : entry;
            })
            return updatedState;
        }
    }
}

const MoodEntriesSlice = createSlice(options);
export const { loadEntries, addNewEntry } = MoodEntriesSlice.actions;
export const MoodEntriesReducer = MoodEntriesSlice.reducer;
