import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AverageScore from "./AverageScore/AverageScore";
import type { GlobalState, MoodsData } from "../../utils/types";
import { calcPrevAverage, calculateAverage } from "../../utils/helpers";
import { moods, increaseTrendEl, decreaseTrendEl, sameTrendEl } from "../../utils/constants";
import { handleAverageSleep } from "../../utils/helpers";


export default function AverageScores() {
    const [isEnoughData, setIsEnoughData] = useState(false);
    const [averageMoodScore, setAverageMoodScore] = useState(0); //stores calculated score
    const [averageSleepScore, setAverageSleepScore] = useState(0); //stores calculated score
    const [currentAverageMood, setCurrentAverageMood] = useState<MoodsData | null>(null); //determines the content to display
    const [currentAverageSleep, setCurrentAverageSleep] = useState(""); //determines the content to display
    const [prevAverageMoodScore, setPrevAverageMoodScore] = useState(0);
    const [prevAverageSleepScore, setPrevAverageSleepScore] = useState(0);
    const [averageMoodTrend, setAverageMoodTrend] = useState(<></>);
    const [averageSleepTrend, setAverageSleepTrend] = useState(<></>);

    const moodEntries = useSelector((state: GlobalState) => state.MoodEntries);

    useEffect(() => {
        if (moodEntries.length >= 5) {
            setIsEnoughData(true);
        } else {
            setIsEnoughData(false);
        }
    }, [moodEntries]);


    useEffect(() => {
        if (isEnoughData) {
            setAverageMoodScore(calculateAverage(moodEntries, "mood")); //recalculate average mood
            setAverageSleepScore(calculateAverage(moodEntries, "sleep")); //recalculate average sleep
            setPrevAverageMoodScore(calcPrevAverage(moodEntries, "mood"));
            setPrevAverageSleepScore(calcPrevAverage(moodEntries, "sleep"));
        }
    }, [moodEntries, isEnoughData]);


    useEffect(() => {
        let averageMoodData = moods.filter((mood) => {
            return mood.score === averageMoodScore;
        })
        setCurrentAverageMood(averageMoodData[0]);
        setCurrentAverageSleep(handleAverageSleep(averageSleepScore));
        compareAverageTrend(averageMoodScore, prevAverageMoodScore, "mood");
        compareAverageTrend(averageSleepScore, prevAverageSleepScore, "sleep");

    }, [averageMoodScore, averageSleepScore]);


    const compareAverageTrend = (currentAv:number, prevAv:number, type: "mood"| "sleep") => {
        if (prevAv < currentAv) {
            type === "mood" ? setAverageMoodTrend(increaseTrendEl("mood")) : setAverageSleepTrend(increaseTrendEl("sleep")); 
        } else if (prevAv === currentAv) {
            type === "mood" ? setAverageMoodTrend(sameTrendEl("mood")) : setAverageSleepTrend(sameTrendEl("sleep"));
        } else if (prevAv > currentAv) {
            type === "mood" ? setAverageMoodTrend(decreaseTrendEl("mood")) : setAverageSleepTrend(decreaseTrendEl("sleep"));
        }
    }
    


    return (
        <div className={`flex flex-col bg-neutral0 px-4 py-5 md:py-6 px-5 rounded-2xl border border-blue100 gap-6`}>
            <AverageScore
                type="mood"
                isEnoughData={isEnoughData}
                currentAverageMood={currentAverageMood}
                averageMoodTrend={averageMoodTrend}
            />
            <AverageScore
                type="sleep"
                isEnoughData={isEnoughData}
                currentAverageSleep={currentAverageSleep}
                averageSleepTrend={averageSleepTrend}
            />
        </div>
    )
}    