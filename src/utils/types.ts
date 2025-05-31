import type React from "react";

export type Entry = {
    createdAt: string,
    mood: number | null, 
    feelings: string[] | null, 
    journalEntry: string | null, 
    sleepHours: number | null
}

export type MoodData = {
    name: string,
    coloredIcon: string,
    whiteIcon: string,
    bgColor: string,
    score: number
} 

export type MoodEntries = Entry[];
export type MoodQuotes = Record<string, string[]>;

export type GlobalState = {
    MoodEntries: Entry[],
    MoodQuotes: MoodQuotes
}

export type BarModalSection = "Mood" | "Sleep" | "Reflection" | "Tags";
export type SleepRange = "0-2 Hours" | "3-4 Hours" | "5-6 Hours" | "7-8 Hours" | "9+ Hours" | ""
export type MoodReport = { averageMood: MoodData | null, trend: { icon: React.JSX.Element, statement: string } }
export type SleepReport = { averageSleep: SleepRange, trend: { icon: React.JSX.Element, statement: string } }
