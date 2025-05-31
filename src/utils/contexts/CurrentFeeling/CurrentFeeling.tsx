import { createContext, useEffect, useState } from "react";

type CurrentFeelingsContext = {
    currentFeelings: string[],
    setCurrentFeelings:React.Dispatch<React.SetStateAction<string[]>>
}

export const CurrentFeelingsContext = createContext<CurrentFeelingsContext>({currentFeelings:[], setCurrentFeelings: () => {}});

export default function CurrentFeelings({ children }: { children: React.ReactNode }) {
    const [currentFeelings, setCurrentFeelings] = useState<string[]>([]);

     useEffect(() => {
         if (currentFeelings.length === 4) {
             setCurrentFeelings(
                 currentFeelings.filter((_, index) => {
                     return index !== 0; //remove the first element, when array length reaches 4 to ensure max 3.
                 }
                 )
             )
         }
     }, [currentFeelings])
    
    return (
        <CurrentFeelingsContext.Provider value={{currentFeelings, setCurrentFeelings}}>
            {children}
        </CurrentFeelingsContext.Provider>
    )
};


