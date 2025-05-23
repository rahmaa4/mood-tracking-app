import { useContext, useEffect, useState } from "react";
//contexts:
import { CurrentSlideContext } from "../../../utils/contexts/CurrentLogSlide/CurrentLogSlide";
//components:
import ProgressBar from "./ProgressBar/ProgressBar";
import FeelingSlide from "./Slides/FeelingSlide/FeelingSlide";
import JournalSlide from "./Slides/JournalSlide/JournalSlide";
import MoodSlide from "./Slides/MoodSlide/MoodSlide";
import SleepHoursSlide from "./Slides/SleepHoursSlide/SleepHoursSlide";
//svg icons:
import iconClose from "/assets/images/icon-close.svg";
import iconBack from "/assets/images/icon-back.svg";
import { useDispatch } from "react-redux";
import { replaceEntry } from "../../../Slices/MoodEntries";
import { CurrentMoodEntryContext } from "../../../utils/contexts/CurrentMoodEntry/CurrentMoodEntry";
import { CurrentFeelingsContext } from "../../../utils/contexts/CurrentFeeling/CurrentFeeling";
import { CurrentSleepHoursContext } from "../../../utils/contexts/CurrentSleepHours/CurrentSleepHours";
import { selectAverageSleepHours } from "../../../utils/helpers";


type LogMoodModal = {
    setIsDisplayLogMoodModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LogMoodModal({ setIsDisplayLogMoodModal }: LogMoodModal) {
    const [journalEntry, setJournalEntry] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const { currentSlide, setCurrentSlide } = useContext(CurrentSlideContext);
    const { currentMood } = useContext(CurrentMoodEntryContext);
    const { currentFeelings } = useContext(CurrentFeelingsContext);
    const { currentSleepHours } = useContext(CurrentSleepHoursContext);

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
            dispatch(replaceEntry({
                createdAt: date,
                mood: currentMood?.score ?? null,
                feelings: currentFeelings,
                sleepHours: sleepHours,
                journalEntry: journalEntry
            }))
            setIsDisplayLogMoodModal(false);
            setIsSubmit(false);
        }
    }, [isSubmit])

    return (
        <div className={`w-[90vw] max-h-[85vh] md:w-[600px] bg-neutral0 px-5 py-6 rounded-2xl overflow-y-scroll md:overflow-auto`}>
            <div className={`w-full flex ${ currentSlide > 0 ?'justify-between': 'justify-end'} mb-4`}>
                {currentSlide > 0 &&
                    <button className={`flex items-center gap-2 py-1 hover:cursor-pointer`} onClick={() => {setCurrentSlide((prev) => prev - 1)}}>
                        <img src={iconBack} alt="" className={`block w-[22px] aspect-square`} />
                        <span className={`text-[15px] text-neutral600`}>Back</span>
                    </button>
                }
                 <button className={`hover:cursor-pointer`}><img src={iconClose} alt="" className={` block w-[13px] aspect-square`} onClick={() => setIsDisplayLogMoodModal(false)}/></button>
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