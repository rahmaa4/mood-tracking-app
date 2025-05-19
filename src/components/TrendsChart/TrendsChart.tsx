import { useSelector } from "react-redux";
import HoursYAxis from "./HoursYAxis/HoursYAxis";
import Chart from "./Chart/Chart";
import {type MoodEntries, type GlobalState } from "../../utils/types";
import { useEffect, useState } from "react";


export default function TrendsChart() {
    const moodEntries = useSelector((state:GlobalState) => state.MoodEntries)
    const [userEntries, setUserEntries] = useState<MoodEntries>([]);


    useEffect(() => {
        setUserEntries([...moodEntries].reverse().filter((entry,index) => {
            if (index < 14) { //return 14 entries, beginning from the last/latest
                return entry;
            }
        }));
    }, [moodEntries])

    
    return (
        <div className={`w-full bg-neutral0 flex flex-col px-4 py-5 md:py-6 px-5 rounded-2xl border border-blue100 gap-6`}>
            <h2 className={`font-bold text-xl`}>Mood and sleep trends</h2>
            <div className={`h-[312px] flex gap-4`}>
                <HoursYAxis />
                <Chart userEntries={userEntries} />
            </div>
        </div>
    )
}