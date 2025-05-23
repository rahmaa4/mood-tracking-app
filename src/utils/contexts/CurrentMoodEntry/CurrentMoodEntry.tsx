import {createContext, useState } from "react";
import type { MoodsData } from "../../types";

type CurrentMoodEntryContext = {
    currentMood: MoodsData | null,
    setCurrentMood:React.Dispatch<React.SetStateAction<MoodsData | null>>
}

export const CurrentMoodEntryContext = createContext<CurrentMoodEntryContext>({currentMood: null, setCurrentMood: () => { } });


export default function CurrentMood({ children }: { children: React.ReactNode }) {
    const [currentMood, setCurrentMood] = useState<MoodsData | null>(null)
    return (
        <CurrentMoodEntryContext.Provider value={{currentMood, setCurrentMood}}>
            {children}
        </CurrentMoodEntryContext.Provider>
    )
}