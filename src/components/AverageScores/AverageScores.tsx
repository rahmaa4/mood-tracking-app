import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReportCard from "./ReportCard/ReportCard";
import type { GlobalState, MoodReport, SleepReport} from "../../utils/types";
import { moods} from "../../utils/constants";
import { returnSleepRange } from "../../utils/helpers";
import { calcPrevAverage, calculateAverage, determineTrend } from "../../utils/helpers";


export default function AverageScores() {
    const moodEntries = useSelector((state: GlobalState) => state.MoodEntries);
    const [isEnoughData, setIsEnoughData] = useState(false);
    const [moodReport, setMoodReport] = useState<MoodReport | null>(null);
    const [sleepReport, setSleepReport] = useState<SleepReport | null>(null);

       useEffect(() => {
            if (moodEntries.length >= 5) {//check if there is enough data to calculate averages.
                setIsEnoughData(true);
            } else {
                setIsEnoughData(false);
            }
        }, [moodEntries]); 


    useEffect(() => {
        if (isEnoughData) { 
            const averageMoodData = moods.filter((mood) => {
            return mood.score === calculateAverage(moodEntries, "mood");
            })[0]
            const averageSleepData = returnSleepRange(calculateAverage(moodEntries, "sleep"));
            setMoodReport(
                {
                    averageMood: averageMoodData,
                    trend: determineTrend(calculateAverage(moodEntries, "mood"), calcPrevAverage(moodEntries, "mood"), "mood")
                }
            );
            setSleepReport({
                averageSleep: averageSleepData,
                trend: determineTrend(calculateAverage(moodEntries, "sleep"), calcPrevAverage(moodEntries, "sleep"), "sleep")
            })
        }

    }, [moodEntries, isEnoughData]);


    return (
        <div className={`flex flex-col min-h-full gap-4 lg:min-w-[370px] bg-neutral0 px-4 py-5 md:py-6 px-5 rounded-2xl border border-blue100 `}>
            <div className={`flex items-center gap-2`}>
                <p className={`text-neutral900 text-lg font-semibold `}>Average Mood</p>
                <span className={`text-sm text-neutral600`}>(Last 5 Check-ins)</span>
            </div>
            <ReportCard
                type="mood"
                isEnoughData={isEnoughData}
                moodReport={moodReport}
            />
            
            <div className={`flex items-center gap-2`}>
                <p className={`text-neutral900 text-lg font-semibold `}>Average Sleep</p>
                <span className={`text-sm text-neutral600`}>(Last 5 Check-ins)</span>
            </div>
            <ReportCard
                type="sleep"
                isEnoughData={isEnoughData}
                sleepReport={sleepReport}
            />
        </div>
    )
}    