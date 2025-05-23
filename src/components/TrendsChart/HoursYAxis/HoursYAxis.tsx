import { iconSleep } from "../../../utils/constants";
import { hoursYAxis } from "../../../utils/constants";

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