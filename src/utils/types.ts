export type Entry = {
    createdAt: string,
    mood: number, 
    feelings: string[], 
    journalEntry: string, 
    sleepHours: number
}

export type MoodEntries = Entry[];
export type MoodQuotes = Record<string, string[]>;
