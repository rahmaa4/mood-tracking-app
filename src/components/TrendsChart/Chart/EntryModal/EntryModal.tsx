import type { Entry, EntryType } from "../../../../utils/types";
import { selectMoodData } from "../../../../utils/helpers";
import triangle from "/assets/images/triangle.svg";
import { useEffect, useState } from "react";

const entryTypes:EntryType[] = ["Mood", "Sleep" ,"Reflection" , "Tags"];

const ModalSection = ({ entryData, type }:{ entryData: Entry, type: EntryType}) => {
    const [content, setContent] = useState<React.JSX.Element | null>(<></>)
    
    useEffect(() => {
        switch (type) {
        case "Mood": {
                setContent( entryData.mood !== null ? 
                    <div className={`flex items-center gap-[6px]`}>
                        <img className={`w-4 aspect-square`} src={selectMoodData(entryData)?.coloredIcon} />
                        <p className={`text-[15px]`}>{selectMoodData(entryData)?.name}</p>
                    </div> : null
                    )
                break;
        }
        case "Sleep": {
            setContent(entryData.sleepHours !== null ?
                <>
                    <p className={`text-[15px]`}>{Math.round(entryData.sleepHours) > 8 ? '9+ hours' : `${Math.round(entryData.sleepHours)} hours`}</p>
                </> : null
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


export default function EntryModal({entryData, isMouseOver, position} : {entryData:Entry, isMouseOver:boolean, position:number}) {
    return (
        <div className={`bg-neutral0 absolute ${position > 3 ? 'left-[-175px]': 'right-[-175px]'} min-h-[219px] w-[175px] ${isMouseOver? 'display' : 'hidden'} z-10 rounded-lg flex flex-col gap-3 p-3 border border-blue100 boxShadow`}>
            {entryTypes.map((type, index) => {
                return <ModalSection entryData={entryData} type={type} key={`modal-sect-${index}`} />
            })}
            <img src={triangle} alt="" className={`block w-[12px] h-[11px] absolute ${position > 3 ? 'right-[-10px]' : ' left-[-10px] rotate-180'} top-[90%]`}/>
        </div>
    )
}

