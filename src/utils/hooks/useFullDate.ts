import { useEffect, useState } from "react"
import { handleDateDisplayed } from "../helpers";

export const useFullDate = (initialFullDate = "") => {
    const [weekday, setWeekday] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [fullDate, setFullDate] = useState(initialFullDate);

    const handleFullDate = () => {
        setWeekday(new Date().toLocaleDateString("en-GB", { weekday: "long" }));
        setDate(handleDateDisplayed());
        setMonth(new Date().toLocaleDateString("en-GB", { month: "long" }));
        setYear(new Date().toLocaleDateString("en-GB", { year: "numeric" }));
    }

    useEffect(() => {
        handleFullDate()
        const intervalID = setInterval(() => {
            handleFullDate();
        }, 60000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    useEffect(() => {
        setFullDate(`${weekday} ${date} ${month} ${year}`)
    }, [weekday, date, month, year])


    return [date, fullDate];

}