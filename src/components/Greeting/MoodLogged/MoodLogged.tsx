import { useState, useEffect } from "react";
import Feeling from "./Feeling/Feeling";
import Sleep from "./Sleep/Sleep";
import type { Entry, MoodData } from "../../../utils/types";
import { returnSleepRange, selectMoodData } from "../../../utils/helpers";
import Reflection from "./Reflection/Reflection";



export default function MoodLogged({ loggedMoodData }: { loggedMoodData: Entry | null }) {
    const [moodData, setMoodData] = useState<MoodData | null>(null);
    const [sleepHours, setSleepHours] = useState<string>("")
    const [journalEntry, setJournalEntry] = useState<string>("");
    const [feelings, setFeelings] = useState<string[]>([])
    useEffect(() => {
        if (loggedMoodData) {
            setMoodData(selectMoodData(loggedMoodData));
            loggedMoodData.sleepHours != null && setSleepHours(returnSleepRange(loggedMoodData.sleepHours));
            loggedMoodData.journalEntry && setJournalEntry(loggedMoodData.journalEntry); 
            loggedMoodData.feelings && loggedMoodData.feelings.length > 0 && setFeelings(loggedMoodData.feelings);
        }
    }, [loggedMoodData])


    return (
        <div className={`w-full flex flex-col lg:flex-row lg:justify-center gap-5`}>
            <Feeling moodData={moodData} />
            <div className={`w-full flex flex-col gap-5`}>
                <Sleep sleepHours={sleepHours} />
                <Reflection journalEntry={journalEntry} feelings={feelings}  />
            </div>
        </div>
    )
}