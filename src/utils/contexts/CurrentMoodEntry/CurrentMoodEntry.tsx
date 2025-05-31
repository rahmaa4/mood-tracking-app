import {createContext, useState } from "react";
import type { MoodData } from "../../types";

type CurrentMoodEntryContext = {
    currentMood: MoodData | null,
    setCurrentMood:React.Dispatch<React.SetStateAction<MoodData | null>>
}

export const CurrentMoodEntryContext = createContext<CurrentMoodEntryContext>({currentMood: null, setCurrentMood: () => { } });


export default function CurrentMood({ children }: { children: React.ReactNode }) {
    const [currentMood, setCurrentMood] = useState<MoodData | null>(null)
    return (
        <CurrentMoodEntryContext.Provider value={{currentMood, setCurrentMood}}>
            {children}
        </CurrentMoodEntryContext.Provider>
    )
}