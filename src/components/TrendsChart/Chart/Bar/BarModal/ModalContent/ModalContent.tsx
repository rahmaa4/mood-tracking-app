import { useEffect, useState } from "react";
import type { Entry, BarModalSection } from "../../../../../../utils/types";
import { selectMoodData } from "../../../../../../utils/helpers";


export default function ModalContent({ entryData, type }: { entryData: Entry, type: BarModalSection }) {
    const [content, setContent] = useState<React.JSX.Element | null>(<></>)
    
    useEffect(() => {
        switch (type) {
        case "Mood": {
                setContent(
                    entryData.mood != null ? 
                    <div className={`flex items-center gap-[6px]`}>
                        <img className={`w-4 aspect-square`} src={selectMoodData(entryData)?.coloredIcon} />
                        <p className={`text-[15px]`}>{selectMoodData(entryData)?.name}</p>
                    </div> :
                    null
                    )
                break;
        }
        case "Sleep": {
                setContent(
                    entryData.sleepHours != null ?
                <>
                    <p className={`text-[15px]`}>{Math.round(entryData.sleepHours) > 8 ? '9+ hours' : `${Math.round(entryData.sleepHours)} hours`}</p>
                </>
                :
                null
            )
             break;
        }
        case "Reflection": {
            setContent( entryData.journalEntry ?
                <p className={`tracking-tight text-xs`}>{entryData.journalEntry}</p> : null
            )
            break;
        }
        case "Tags": {
            setContent( entryData.feelings ?
                <p className={`tracking-tight text-xs`}>{entryData.feelings.join(", ")}</p> : null
                )
                break;
        }
           
    }
    }, [entryData])

    
    return (
        <div>
            <p className={`tracking-normal text-sm font-semibold text-neutral600`}>{type}</p>
            <div className={``}>
               {content}
            </div>
        </div>
    )
}