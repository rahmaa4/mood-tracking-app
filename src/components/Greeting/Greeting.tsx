import { useContext, useEffect, useState } from "react";
import { CurrentSlideContext } from "../../utils/contexts/CurrentLogSlide/CurrentLogSlide";
import LogMoodModal from "./LogMoodModal/LogMoodModal";
import LogMoodButton from "./LogMoodButton/LogMoodButton";
import MoodLogged from "./MoodLogged/MoodLogged";
import type { Entry } from "../../utils/types";



type GreetingProps = {
    dateToday: string, 
    name: string, 
    loggedMoodData: Entry | null,
    setLoggedMoodData: React.Dispatch<React.SetStateAction<Entry | null>>
}

export default function Greeting({ dateToday, name, loggedMoodData, setLoggedMoodData }: GreetingProps) {
    const [isDisplayLogMoodModal, setIsDisplayLogMoodModal] = useState(false);
    const { setCurrentSlide } = useContext(CurrentSlideContext);

    useEffect(() => {
        !isDisplayLogMoodModal && setCurrentSlide(0);
    }, [isDisplayLogMoodModal])
    
    return (
        <div className={`flex flex-col items-center mb-14 lg:max-w-[1170px] lg:mx-auto`}>
            <div className={`flex flex-col items-center gap-[12px] my-8 `}>
                <p className={`font-bold text-xl text-blue600 md:text-[32px]`}>Hello, {name}!</p>
                <h1 className={`font-bold text-4xl text-center md:text-5xl`}>How are you feeling today?</h1>
                <p className={`text-neutral600 font-medium text-sm md:text-lg`}>{dateToday}</p>
            </div>
            {
                loggedMoodData ? <MoodLogged loggedMoodData={loggedMoodData} /> :
                    <LogMoodButton setIsDisplayLogMoodModal={setIsDisplayLogMoodModal} />
            }
            <div className={`${isDisplayLogMoodModal? 'fixed' : 'hidden'} top-0 right-0 left-0 z-10 bottom-0 flex items-center justify-center darkLowOpacity`}>
                <LogMoodModal
                    loggedMoodData={loggedMoodData}
                    setLoggedMoodData={setLoggedMoodData}
                    setIsDisplayLogMoodModal={setIsDisplayLogMoodModal}
                />
            </div>
        </div>
    )
}

