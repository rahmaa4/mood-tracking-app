import { createContext, useState } from "react";

type CurrentSlideContext = {
    currentSlide: number, 
    setCurrentSlide:React.Dispatch<React.SetStateAction<number>>
}

export const CurrentSlideContext = createContext<CurrentSlideContext>({ currentSlide: 0, setCurrentSlide: () => { } })

export default function CurrentSlide({ children }: { children: React.ReactNode }) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    return (
        <CurrentSlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
            {children}
        </CurrentSlideContext.Provider>
    )
}