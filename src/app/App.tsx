import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { motion } from "motion/react";
import { loadMoodQuotes } from "../Slices/MoodQuotes";
import { addNewEntry, loadEntries } from "../Slices/MoodEntries";
import Greeting from "../components/Greeting/Greeting";
import Header from "../components/Header/Header";
import AverageScores from "../components/AverageScores/AverageScores";
import TrendsChart from "../components/TrendsChart/TrendsChart";
import { useFullDate } from "../utils/hooks/useFullDate";
import CurrentSlide from "../utils/contexts/CurrentLogSlide/CurrentLogSlide";
import CurrentMood from "../utils/contexts/CurrentMoodEntry/CurrentMoodEntry";
import CurrentFeelings from "../utils/contexts/CurrentFeeling/CurrentFeeling";
import CurrentSleepHours from "../utils/contexts/CurrentSleepHours/CurrentSleepHours";
import type { Entry } from "../utils/types";

export default function App() {
    const [name, setName] = useState("User");
    const [isLoaded, setIsLoaded] = useState(false)
    const [loggedMoodData, setLoggedMoodData] = useState<Entry | null>(null);
    const [date, fullDate] = useFullDate();
    const lastDateRef = useRef("");
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const response = await fetch("/data.json");
            if (response.ok) {
                const data = await response.json();
                return data;
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const loadData = async () => {
            const result = await getData();
            if (result) {
                dispatch(loadMoodQuotes(result.moodQuotes));
                dispatch(loadEntries(result.moodEntries));
                setIsLoaded(true)   
            }
        }
        loadData();
    }, [])

    useEffect(() => {
        if (isLoaded) {
         if (lastDateRef.current !== date) {//tracks for new date.
            dispatch(addNewEntry({
                createdAt: new Date().toISOString(),
                mood: null,
                sleepHours: null,
                feelings: null,
                journalEntry: null
            }));
            setIsLoaded(false);
            setLoggedMoodData(null)//reset logged mood data, when it is a new day.
            lastDateRef.current = date;//update ref to store today's date.
        }
    }
    }, [date, isLoaded]);


   
    return (
        <>
            <CurrentSlide>
                <CurrentMood>
                    <CurrentFeelings>
                        <CurrentSleepHours>
                            <motion.div
                            className={`opacity-0`}
                            animate={{ opacity: 1}}
                            transition={{
                                opacity: { duration: 2}
                            }}
                            >
                            <Header name={name} setName={setName} />
                            <Greeting
                                dateToday={fullDate}
                                name={name}
                                loggedMoodData={loggedMoodData}
                                setLoggedMoodData={setLoggedMoodData}
                                />
                            </motion.div>
                            <motion.div
                                className={`opacity-0 flex flex-col gap-8 lg:flex-row lg:justify-center min-h-[453px] lg:max-w-[1170px] lg:mx-auto`}
                                animate={{ opacity: 1}}
                                transition={{
                                    opacity: { duration: 2 }
                                }}
                            >
                                
                                <AverageScores />
                                <TrendsChart/>
                            </motion.div>
                        </CurrentSleepHours>
                    </CurrentFeelings>
                </CurrentMood>
            </CurrentSlide>
        </>
    )
}