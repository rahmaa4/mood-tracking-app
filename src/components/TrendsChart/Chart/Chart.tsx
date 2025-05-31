import type { MoodEntries } from "../../../utils/types"
import Bar from "./Bar/Bar"

export default function Chart({ userEntries }: { userEntries: MoodEntries }) {
   
    return (
        <div className={`flex gap-4 overflow-x-auto chartScroll`}>
            {
                [...userEntries].reverse().map((entry, index) => {
                    return <Bar entryData={entry} key={`bar-${index}`} position={index} /> 
                   })
            }
        </div>
    )
}