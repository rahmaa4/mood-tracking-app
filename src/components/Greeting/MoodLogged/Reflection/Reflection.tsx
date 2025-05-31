import IconReflection from "../../../../assets/images/icon-reflection.svg?react";

export default function Reflection({ journalEntry, feelings }: { journalEntry: string, feelings: string[] }) {
    return (
        <div className={`w-full min-h-[197px] bg-neutral0 rounded-2xl border border-blue100 p-5 flex flex-col gap-4`}>
            <div className={`flex items-center gap-3`}>
                <IconReflection style={{color:`var(--color-neutral600)`}} width={"22px"} height={"22px"} />
                <p className={`text-lg text-neutral600`}>Reflection of the day</p>
            </div>
            <p className={`text-lg min-h-[80px]`}>{journalEntry}</p>
            <div className={`flex items-center gap-3`}>
                {feelings.map((feeling) => {
                    return <p className={`italic text-sm text-neutral600`}>#{feeling}</p>
                })}
            </div>
        </div>
    )
}