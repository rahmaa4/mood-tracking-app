export type Entry = {
    createdAt: string,
    mood: number | null, 
    feelings: string[] | null, 
    journalEntry: string | null, 
    sleepHours: number | null
}

export type MoodsData = {
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

export type EntryType = "Mood" | "Sleep" | "Reflection" | "Tags";