import type { Entry, MoodEntries } from "./types";
import { moods } from "./constants";
import IncreaseTrendIcon from "../assets/images/icon-trend-increase.svg?react";
import SameTrendIcon from "../assets/images/icon-trend-same.svg?react";
import DecreaseTrendIcon from "../assets/images/icon-trend-decrease.svg?react";


 export const handleDateDisplayed = () => {
        let ordinal = "";
        const todaysDate = new Date().getDate();
        const lastDigit = todaysDate.toString().split("")[length - 1];
        switch (lastDigit) {
            case "1": {
                ordinal = "st";
                break;
            }
            case "2": {
                ordinal = "nd";
                break;
            }
            case "3": {
                ordinal = "rd";
                break;
            }
            default: {
                ordinal = "th";
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
            averageMood = averageMood + (arr[i].mood ?? 0); //if null or undefined, add 0 to Average , else add the value stored in arr[i].mood
        } else {
            averageSleep = averageSleep + (arr[i].sleepHours ?? 0);
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
    if (arr.length >= 10) {//check if there is at least 10 entries, which would allow us to compare the current average to the previous average 
        const start = arr.length - 6; //get the first entry before the last 5 set of entries
        const end = start - 5;
        for (let i = start; i > end; i--) {
            if (type=== "mood") {
                prevAverage = prevAverage + (arr[i].mood ?? 0); //if null or undefined, add 0 to Average else add the value stored in arr[i].mood;
            } else {
                prevAverage = prevAverage + (arr[i].sleepHours ?? 0);
            }
        }
        return Math.round(prevAverage / 5);
    }
    return null;
};



export const returnSleepRange = (num: number) => {
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


export const selectMoodData = (entryData:Entry) => {
    switch (entryData.mood) {
        case -2: {
            return moods[0];
        }
        case -1: {
            return moods[1];
        }
        case 0: {
            return moods[2];
        }
        case 1: {
            return moods[3];
        }
        case 2: {
            return moods[4];
        }
        default: {
            return null;
        }
    }
}


export const testFileType = (fileType:string) => {
    return /image\/(png|jpeg)/.test(fileType) //search for image/png or image/jpeg
}

export const testFileSize = (fileSize: number) => {
    return fileSize / 1000 < 250;
}   

export const feelingsTags = [
    "Joyful", "Down", "Anxious", "Calm", "Excited", "Frustrated", "Lonely", "Grateful", "Overwhelmed", "Motivated", 
"Irritable", "Peaceful", "Tired", "Hopeful", "Confident", "Stressed", "Content", "Disappointed", "Optimistic", "Restless"]


export const selectAverageSleepHours = (range: string):number | null => {
    switch (range) {
        case "0-2 hours": {
            return 1;
        }
        case "3-4 hours": {
            return 3.5;
        }
        case "5-6 hours": {
            return 5.5;
        }
        case "7-8 hours": {
            return 7.5
        };
        case "9+ hours": {
            return 9;
        }
        default: {
            return null;
        }
    }
};

export const extractDate = (isoString: string) => {
    return isoString.split("").slice(0, isoString.indexOf("T")).join(" ");
}


//The function below takes the current Average and previous average scores to determine the general trend report to display. 
export const determineTrend = (currentAv: number, prevAv: number | null, type: "mood" | "sleep") => {
    if (prevAv != null) {
        if (currentAv < prevAv) {
        return {
             icon: <DecreaseTrendIcon width={"14px"} height={"14px"} style={{color: `${type === "mood" ? "var(--color-neutral900)" : "var(--color-neutral0)"}`}} />,
             statement: "Decrease from the previous 5 check-ins"
        }
    } else if (currentAv === prevAv) {
        return {
                icon: <SameTrendIcon width={"14px"} height={"14px"} style={{color: `${type === "mood" ? "var(--color-neutral900)" : "var(--color-neutral0)"}`}} />,
                statement: "Same as the previous 5 check-ins"
               }
    } else if(currentAv > prevAv){
        return {
               icon: <IncreaseTrendIcon width={"14px"} height={"14px"} style={{color: `${type === "mood" ? "var(--color-neutral900)" : "var(--color-neutral0)"}`}} />,
               statement: "Increase from the previous 5 check-ins"
        }
    }    
    }
    return {
        icon: <></>,
        statement: "Log in for more days to see trends!"
    }
}



    

