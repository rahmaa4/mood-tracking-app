import { useEffect, useState } from "react";
import { handleDateDisplayed } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { loadMoodQuotes } from "../Slices/MoodQuotes";
import { addNewEntry, loadEntries } from "../Slices/MoodEntries";
import Greeting from "../components/Greeting/Greeting";
import Header from "../components/Header/Header";
import AverageScores from "../components/AverageScores/AverageScores";
import TrendsChart from "../components/TrendsChart/TrendsChart";


export default function App() {
    const [weekday, setWeekday] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [fullDate, setFullDate] = useState("");
    const [currentHour, setCurrentHour] = useState(new Date().getHours());
    const dispatch = useDispatch();

    const getFullDate = () => {
        setWeekday(new Date().toLocaleDateString("en-GB", { weekday: "long" }));
        setDate(handleDateDisplayed());
        setMonth(new Date().toLocaleDateString("en-GB", { month: "long" }));
        setYear(new Date().toLocaleDateString("en-GB", { year: "numeric" }));
    }

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
    }


    useEffect(() => {
        loadData();
        getFullDate();

        const dateIntervalId = setInterval(() => {
            getFullDate()
        }, 60000)

        const hourIntervalId = setInterval(() => {
            setCurrentHour(new Date().getHours()); //every hour update value stored in currentHour.
        }, 3600000)

        const intervals = [dateIntervalId, hourIntervalId];
        
        return () => {
           intervals.forEach(clearInterval);
        } 

    }, [])

    useEffect(() => {
        setFullDate(`${weekday} ${date} ${month} ${year}`)
    }, [date, weekday, month, year])

    useEffect(() => {
        if (currentHour === 0) {
            dispatch(addNewEntry({
                createdAt: new Date().toISOString(),
                mood: 0,
                sleepHours: 0,
                feelings: [""],
                journalEntry: ""
            })) //add empty entry , each new day. 
        }
    }, [currentHour])

   
    return (
        <>
            <Header/>
            <Greeting dateToday={fullDate} />
            <div className={`flex flex-col gap-8 lg:flex-row min-h-[453px]`}>
                <AverageScores />
                <TrendsChart/>
            </div>
        </>
    )
}