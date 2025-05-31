import IconSleep from "../../../../assets/images/icon-sleep.svg?react";
export default function Sleep({sleepHours}: {sleepHours: string}) {
    return (
        <div className={`w-full h-[123px] flex flex-col gap-4 bg-neutral0 border border-blue100 rounded-2xl p-5`}>
            <div className={`flex items-center gap-3`}>
                <IconSleep width={"22px"} height={"22px"} style={{color: `var(--color-neutral600)`}} />
                <p className={`text-neutral600 font-medium text-lg`}>Sleep</p>
            </div>
            <p className={`text-3xl font-bold`}>{sleepHours}</p>
        </div>
    )
}