import {type Entry, type MoodsData } from "../../../../utils/types";
import { moods } from "../../../../utils/constants";
import { useEffect, useState } from "react";
import { months } from "../../../../utils/constants";

export default function Bar({entryData}: {entryData: Entry}) { //use entryData to determine each entries display
    const [createdAt, setCreatedAt] = useState(<></>);
    const [height, setHeight] = useState("");
    const [moodData, setMoodData] = useState<MoodsData| null>(); //capture relevant mood data based on entry mood score

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

        switch (entryData.mood) {
            case -2: {
                setMoodData(moods[0]);
                break;
            }
            case -1: {
                setMoodData(moods[1]);
                break;
            }
            case 0: {
                setMoodData(moods[2]);
                break;
            }
            case 1: {
                setMoodData(moods[3]);
                break;
            }
            case 2: {
                setMoodData(moods[4]);
                break;
            }
        }

    }, [entryData])


    
    return (
        <div className={`chartGridRows`}>
            <div style={{ gridRowStart: `${height}` }} className={`w-10 ${moodData && moodData.bgColor} rounded-full row-end-6 `}>
                <img src={moodData ? moodData.whiteIcon : ""} className={`mx-auto mt-1`} />
            </div>
            <div className={`flex flex-col items-center justify-end row-start-6 row-end-6`}>
                {createdAt}
            </div>
        </div>
    )
}