import { useContext, useEffect, useState } from "react";
import RadioButton from "../../../UI/RadioButton/RadioButton";
import { CurrentSleepHoursContext } from "../../../../../../utils/contexts/CurrentSleepHours/CurrentSleepHours";

export default function HoursOption({hoursRange} : {hoursRange:string}) {
    const [isActive, setIsActive] = useState(false);
    const { currentSleepHours, setCurrentSleepHours } = useContext(CurrentSleepHoursContext);

    useEffect(() => {
        if (currentSleepHours === hoursRange) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [currentSleepHours]);
    
    return (
        <div className={`bg-neutral0 px-5 py-4 flex items-center gap-3 rounded-[10px] border ${isActive ? "border-blue600" : 'border-blue100'} hover:cursor-pointer`}
        onClick={() => setCurrentSleepHours(hoursRange)}
        >
            <RadioButton isActive={isActive} />
            <p className={`font-semibold tracking-normal`}>{hoursRange}</p>
        </div>
    )
}
