import { createContext, useState } from "react";

type CurrentSleepHoursContext = {
    currentSleepHours: string, 
    setCurrentSleepHours: React.Dispatch<React.SetStateAction<string>>
}

export const CurrentSleepHoursContext = createContext<CurrentSleepHoursContext>({ currentSleepHours: " ", setCurrentSleepHours: () => { } });

export default function CurrentSleepHours({children}:{children:React.ReactNode}) {
    const [currentSleepHours, setCurrentSleepHours] = useState<string>("");
    return (
        <CurrentSleepHoursContext.Provider value={{currentSleepHours, setCurrentSleepHours}}>
            {children}
        </CurrentSleepHoursContext.Provider>
    )
};



