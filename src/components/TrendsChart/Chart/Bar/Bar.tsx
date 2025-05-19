import {type Entry, type MoodsData } from "../../../../utils/types";
import { useEffect, useState } from "react";
import { months } from "../../../../utils/constants";
import EntryModal from "../EntryModal/EntryModal";
import { selectMoodData } from "../../../../utils/helpers";

export default function Bar({entryData, position}: {entryData: Entry, position:number}) { //use entryData to determine each entries display
    const [createdAt, setCreatedAt] = useState(<></>);
    const [height, setHeight] = useState("");
    const [moodData, setMoodData] = useState<MoodsData| null>(); //capture relevant mood data based on entry mood score
    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        let month = months[new Date(entryData.createdAt).getMonth()]
        let date = new Date(entryData.createdAt).getDate();

        setCreatedAt(
            (
                <>
                    <p className={`text-xs text-neutral600 font-semibold`}>{month}</p>
                    <p className={`text-[13px] font-semibold`}>{date}</p>
                </>
            )
        );
    }, [entryData])

    useEffect(() => {
        const sleepHours = Math.round(entryData.sleepHours)
        if ( 0 <= sleepHours && sleepHours <= 2) {
            setHeight("5");
        } else if (sleepHours >= 3 && sleepHours <= 4) {
            setHeight("4");
        } else if (sleepHours >= 5 && sleepHours <= 6) {
            setHeight("3");
        } else if (sleepHours >= 7 && sleepHours <= 8) {
            setHeight("2");
        } else {
            setHeight("1");
        }
    
    setMoodData(selectMoodData(entryData));

    }, [entryData])


    
    return (
        <div className={`relative flex`}>
            <EntryModal entryData={entryData} isMouseOver={isMouseOver} position={position} />
            <div className={`chartGridRows`}>
                <div
                    onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}
                    style={{ gridRowStart: `${height}` }} className={`w-10 ${moodData && moodData.bgColor} rounded-full row-end-6 w-10 ${moodData && moodData.bgColor}
                    hover:cursor-pointer`}>
                    {moodData ? <img src={moodData.whiteIcon} className={`mx-auto mt-1`} /> : null}
                </div>
                <div className={`flex flex-col items-center justify-end row-start-6 row-end-6`}>
                        {createdAt}
                </div>
            </div>
        </div>
        
    )
}