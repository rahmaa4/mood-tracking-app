import { useContext, useEffect, useState } from "react";
import IconCheck from "../../../../../../assets/images/icon-check.svg?react";
import { CurrentFeelingsContext } from "../../../../../../utils/contexts/CurrentFeeling/CurrentFeeling";

export default function FeelingOption({ tag }: { tag: string }) {
    const [isClicked, setIsClicked] = useState(false);//to support click and reclick functionality. 
    const [isActive, setIsActive] = useState(false);
    const { currentFeelings, setCurrentFeelings } = useContext(CurrentFeelingsContext);

    useEffect(() => {
        if (currentFeelings.includes(tag)) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [currentFeelings])
    
    useEffect(() => {
        if (isClicked) {
            setCurrentFeelings(() => {
                return [...currentFeelings, tag]
            })
        } else {
            setCurrentFeelings(() => {
                return currentFeelings.filter((aTag) => {
                    return aTag !== tag;
                })
            })
        }
    }, [isClicked]);

    


    return (
        <div className={`px-3 py-2 flex items-center gap-2 rounded-[10px] border ${isActive ? 'border-blue600' : 'border-blue100'} hover:cursor-pointer`}
            onClick={() => setIsClicked((prev) => !prev)}
        >
            <div className={`flex justify-center items-center border border-blue200 rounded-[4px] w-[16px] aspect-square ${isActive && 'bg-blue600'}`}>
                {isActive && <IconCheck/>}
            </div>
            <p>{tag}</p>
        </div>
    )
}