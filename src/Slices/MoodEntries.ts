import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MoodEntries, Entry} from "../utils/types";
import { extractDate } from "../utils/helpers";
const initialState:MoodEntries = []


const options = {
    name: "Mood Entries",
    initialState: initialState,
    reducers: {
        loadEntries: (state:MoodEntries, action:PayloadAction<MoodEntries>) => {
            const updatedState = state.concat(action.payload);
            return updatedState;
            
        },
        addNewEntry: (state:MoodEntries, action:PayloadAction<Entry>) => { 
            state.push(action.payload);
            return state;
        },
        replaceEntry: (state: MoodEntries, action: PayloadAction<Entry>) => {
            const newEntryID = extractDate(action.payload.createdAt);
            const updatedState = state.map((entry) => {
                return extractDate(entry.createdAt) === newEntryID ?  action.payload : entry;
            })
            return updatedState;
        }
    }
}

const MoodEntriesSlice = createSlice(options);
export const { loadEntries, addNewEntry, replaceEntry } = MoodEntriesSlice.actions;
export const MoodEntriesReducer = MoodEntriesSlice.reducer;
