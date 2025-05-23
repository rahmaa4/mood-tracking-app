import { useEffect, useState, useRef } from "react";
import { useDispatch} from "react-redux";
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

export default function App() {
    const [name, setName] = useState("User");
    const [date, fullDate] = useFullDate();
    const [isLoaded, setIsLoaded] = useState(false)
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

    const loadData = async () => {
        const result = await getData();
        dispatch(loadMoodQuotes(result.moodQuotes));
        dispatch(loadEntries(result.moodEntries));
        setIsLoaded(true)
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        if (isLoaded) {
             if (lastDateRef.current !== date) {
            dispatch(addNewEntry({
                createdAt: new Date().toISOString(),
                mood: null,
                sleepHours: null,
                feelings: null,
                journalEntry: null
            }));
        lastDateRef.current = date;
    }   
        }
        setIsLoaded(false);
    }, [date, isLoaded]);

   
    return (
        <>
            <CurrentSlide>
                <CurrentMood>
                    <CurrentFeelings>
                        <CurrentSleepHours>
                            <Header name={name} setName={setName} />
                            <Greeting dateToday={fullDate} name={name} />
                            <div className={`flex flex-col gap-8 lg:flex-row min-h-[453px]`}>
                                <AverageScores />
                                <TrendsChart/>
                            </div>
                        </CurrentSleepHours>
                    </CurrentFeelings>
                </CurrentMood>
            </CurrentSlide>
        </>
    )
}