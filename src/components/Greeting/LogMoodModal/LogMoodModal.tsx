import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { replaceEntry } from "../../../Slices/MoodEntries";

import { CurrentSlideContext } from "../../../utils/contexts/CurrentLogSlide/CurrentLogSlide";
import { CurrentMoodEntryContext } from "../../../utils/contexts/CurrentMoodEntry/CurrentMoodEntry";
import { CurrentFeelingsContext } from "../../../utils/contexts/CurrentFeeling/CurrentFeeling";
import { CurrentSleepHoursContext } from "../../../utils/contexts/CurrentSleepHours/CurrentSleepHours";

import ProgressBar from "./ProgressBar/ProgressBar";
import FeelingSlide from "./Slides/FeelingSlide/FeelingSlide";
import JournalSlide from "./Slides/JournalSlide/JournalSlide";
import MoodSlide from "./Slides/MoodSlide/MoodSlide";
import SleepHoursSlide from "./Slides/SleepHoursSlide/SleepHoursSlide";

import { selectAverageSleepHours } from "../../../utils/helpers";
import type { Entry } from "../../../utils/types";
import IconClose from "../../../assets/images/icon-close.svg?react";
import IconBack from "../../../assets/images/icon-back.svg?react";


type LogMoodModal = {
    loggedMoodData: Entry | null,
    setLoggedMoodData: React.Dispatch<React.SetStateAction<Entry | null>>,
    setIsDisplayLogMoodModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LogMoodModal({ loggedMoodData, setLoggedMoodData, setIsDisplayLogMoodModal }: LogMoodModal) {
    
    const { currentSlide, setCurrentSlide } = useContext(CurrentSlideContext);
    const { currentMood } = useContext(CurrentMoodEntryContext);
    const { currentFeelings } = useContext(CurrentFeelingsContext);
    const { currentSleepHours } = useContext(CurrentSleepHoursContext);
    const [journalEntry, setJournalEntry] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();

    const handleJournalEntry = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
       setJournalEntry(target.value)
    }

    const handleSubmit = () => {
        setIsSubmit(true);
    }
    
  
    useEffect(() => {
        if (isSubmit) {
            let date = new Date().toISOString()
            let sleepHours = selectAverageSleepHours(currentSleepHours);
            setLoggedMoodData({
                createdAt: date,
                mood: currentMood?.score ?? null,
                feelings: currentFeelings,
                sleepHours: sleepHours,
                journalEntry: journalEntry
            })
        }
    }, [isSubmit])

    useEffect(() => {
        if (loggedMoodData && isSubmit) {
            dispatch(replaceEntry(loggedMoodData));
            setIsDisplayLogMoodModal(false);
            setIsSubmit(false);
        }
    }, [loggedMoodData, isSubmit])



    return (
        <div className={`w-[90vw] max-h-[85vh] md:w-[600px] bg-neutral0 px-5 py-6 rounded-2xl overflow-y-scroll md:overflow-auto`}>
            <div className={`w-full flex ${ currentSlide > 0 ?'justify-between': 'justify-end'} mb-4`}>
                {currentSlide > 0 &&
                    <button className={`flex items-center gap-2 py-1 hover:cursor-pointer`} onClick={() => {setCurrentSlide((prev) => prev - 1)}}>
                        <IconBack className={`block w-[22px] aspect-square`}/>
                        <span className={`text-[15px] text-neutral600`}>Back</span>
                    </button>
                }
                <button className={`hover:cursor-pointer`} onClick={() => setIsDisplayLogMoodModal(false)}>
                    <IconClose className={` block w-[13px] aspect-square`} />
                </button>
            </div>
            <div className={`flex flex-col gap-6`}>
                <h2 className={`font-bold text-xl md:text-2xl`}>Log your mood</h2>
                <ProgressBar />
                <>
                    <MoodSlide slide={0} />
                    <FeelingSlide slide={1} />
                    <JournalSlide journalEntry={journalEntry} handleJournalEntry={handleJournalEntry} slide={2} />
                    <SleepHoursSlide slide={3} handleSubmit={handleSubmit} />
                </>
            </div>
        </div>
    )
}