import type {MoodReport, SleepReport} from "../../../utils/types";
import NotEnoughData from "../NotEnoughData/NotEnoughData";
import IconSleep from "../../../assets/images/icon-sleep.svg?react";
type ReportCardProps = {
    type: "mood" | "sleep",
    isEnoughData: boolean,
    moodReport?: MoodReport | null,
    sleepReport?: SleepReport | null
}

export default function ReportCard({ type, isEnoughData, moodReport, sleepReport }: ReportCardProps) {

    return (
        <div className={`${isEnoughData ? type === "mood"  ? moodReport?.averageMood?.bgColor : `bg-blue600`: 'bg-blue100'} h-[140px] rounded-2xl px-4 py-5 flex flex-col justify-center gap-3`}>
            {isEnoughData ? 
                <>
                    <div className={`flex items-center gap-4`}>
                        {type === "mood" ? <img src={`${moodReport?.averageMood?.whiteIcon}`} alt="" className={`block w-[24px] aspect-square`} /> : <IconSleep className={`opacity-80`} width={"24px"} height={"24px"} style={{color: `var(--color-neutral0)`}} />}
                        <p className={`${type === "sleep" && 'text-neutral0'} text-xl font-semibold`}>{type === "mood" ? moodReport?.averageMood?.name : sleepReport?.averageSleep} </p>
                    </div>

                    <div className={` flex items-center gap-2 ${type === "sleep" && 'opacity-80'}`}>
                        {type === "mood" ? moodReport?.trend.icon : sleepReport?.trend.icon}
                        <p className={`text-[15px] tracking-tight ${type=="sleep" && 'text-neutral0 font-light'}`}>{type === "mood" ? moodReport?.trend.statement : sleepReport?.trend.statement}</p>
                    </div>
                </>
                :
                <NotEnoughData type={type} />
            }
        </div>
    )
}