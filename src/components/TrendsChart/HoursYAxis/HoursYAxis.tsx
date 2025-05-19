import { iconSleep } from "../../../utils/constants";
export const hoursYAxis = ["0-2 hours", "3-4 hours", "5-6 hours", "7-8 hours", "9+ hours"].reverse();

export default function HoursYAxis() {
    return (
        <div className={`hoursAxisGridRows`}>
            {hoursYAxis.map((hoursRange, index) => {
                return (
                    <div key={`hours-range-${index}`} className={`flex items-center gap-[6px] min-w-[68px] `}>
                        {iconSleep("trends")}
                        <p className={`text-xs tracking-normal`}>{hoursRange}</p>
                    </div>
                )
            })}
        </div>
    )
}