import type { MoodEntries } from "./types";

 export const handleDateDisplayed = () => {
        let ordinal = "";
        const todaysDate = new Date().getDate();
        if (todaysDate > 3 && todaysDate < 21) {
            ordinal = "th";
        } else {
            switch (todaysDate % 10) {
                case 1: {
                    ordinal = "st";
                    break;
                }
                case 2: {
                    ordinal = "nd";
                    break;
                }
                case 3: {
                    ordinal = "rd";
                    break;
                }
                default: {
                    ordinal = "th";
                }
            }
        }
        return `${todaysDate}${ordinal}`;
    }
    

export const calculateAverage = (arr:MoodEntries, type:"mood"|"sleep") => {
    let averageMood = 0;
    let averageSleep = 0;
    const lastEntry = arr.length - 1;
    const stoppingPoint = lastEntry - 5;
    for (let i = arr.length - 1; i > stoppingPoint; i--){
        if (type === "mood") {
            averageMood += arr[i].mood;
        } else {
            averageSleep += arr[i].sleepHours;
        }
    }
    if (type === "mood") {
        averageMood = Math.round(averageMood / 5);
        return averageMood;
    } else {
        averageSleep = Math.round(averageSleep / 5);
        return averageSleep;
    }
}

export const calcPrevAverage = (arr: MoodEntries, type: "mood" | "sleep") => {
    let prevAverage = 0;
    if (arr.length >= 10) {//check if there is at least 10 entries, which would allow us to compare the current avaerga to the previous average 
        const start = arr.length - 6; //get the first entry before the last 5 set of entries
        const end = start - 5;
        for (let i = start; i > end; i--) {
            if (type === "mood") {
                prevAverage += arr[i].mood;
            } else {
                prevAverage += arr[i].sleepHours;
            }
        }

        return Math.round(prevAverage / 5);
    }
    return 0;
};







export const handleAverageSleep = (num: number) => {
    if (num >= 0 && num <= 2) {
        return "0-2 Hours";
    } else if (num >= 3 && num <= 4) {
        return "3-4 Hours";
    } else if (num >= 5 && num <= 6) {
        return "5-6 Hours";
    } else if (num >= 7 && num <= 8) {
        return "7-8 Hours";
    } else if (num >= 9) {
        return "9+ Hours"
    } else {
        return ""
    }
};





    

