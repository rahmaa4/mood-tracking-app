import IconSleep from "../../../assets/images/icon-sleep.svg?react";
import { hoursYAxis } from "../../../utils/constants";

export default function HoursYAxis() {
    return (
        <div className={`flex flex-col gap-[40px]`}>
            {hoursYAxis.map((hoursRange, index) => {
                return (
                    <div key={`hours-range-${index}`} className={`flex items-center gap-[6px] min-w-[68px]`}>
                        <IconSleep width={"10px"} height={"10px"} style={{ color: `var(--color-neutral600)`}} />
                        <p className={`text-xs tracking-normal text-neutral600`}>{hoursRange}</p>
                    </div>
                )
            })}
        </div>
    )
}