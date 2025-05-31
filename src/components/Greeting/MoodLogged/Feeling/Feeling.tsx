import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import type { GlobalState, MoodData } from "../../../../utils/types";
import IconQuote from "../../../../assets/images/icon-quote.svg?react";

export default function Feeling({ moodData }: { moodData:MoodData|null }) {
    const moodQuotes = useSelector((state: GlobalState) => state.MoodQuotes);
    const [randomQuote, setRandomQuote] = useState<string>("")
   
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 5);
        const moodScore = moodData?.score ?? null;
        if (moodQuotes) {
            if (Object.keys(moodQuotes).length > 0 && typeof(moodScore) === "number") {
                    setRandomQuote(moodQuotes[moodScore][randomIndex]);   
            }   
        }
    }, [moodQuotes, moodData]);
    
    return (
        <div className={`w-full lg:w-[670px] lg:min-w-[670px] flex flex-col items-center gap-8 md:grid grid-cols-2 grid-rows-2 bg-neutral0 
        border border-blue100 rounded-2xl p-5 overflow-y-hidden`}>
            <div className={`flex flex-col items-center`}>
                <p className={`opacity-70 text-[2rem] font-bold`}>I'm feeling</p>
                <p className={`text-[40px] font-bold`}>{moodData?.name}</p>
            </div>
            {moodData?.coloredIcon &&
                <img src={moodData.coloredIcon}
                    alt="mood icon"
                    className={`block w-[200px] md:w-[320px] aspect-square col-start-2 row-span-2 justify-self-center relative lg:top-[50px] `}
                />}
            <div className={`flex flex-col items-center gap-4`}>
                <IconQuote/>
                <p className={`max-w-[311px] text-lg font-medium text-center leading-5 italic `}>"{randomQuote}"</p>
            </div>
        </div>
    )
}