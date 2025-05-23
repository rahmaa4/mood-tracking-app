import SlideTitle from "../../UI/SlideTitle/SlideTitle";
import HoursOption from "./HoursOption/HoursOption";
import { hoursYAxis } from "../../../../../utils/constants";
import Button from "../../UI/Button/Button";
import { useContext } from "react";
import { CurrentSlideContext } from "../../../../../utils/contexts/CurrentLogSlide/CurrentLogSlide";

type SleepHoursSlide = {
    slide: number,
    handleSubmit: () => void
}

export default function SleepHoursSlide({ slide, handleSubmit}: SleepHoursSlide) {
    const { currentSlide } = useContext(CurrentSlideContext);

    
    
    return (
        <div className={`${currentSlide === slide ? 'flex' : 'hidden'} flex-col gap-6`}>
            <SlideTitle>How many hours did you sleep last night?</SlideTitle>
            <div className={`flex flex-col gap-6`}>
                {
                    hoursYAxis.map((hoursRange) => {
                        return <HoursOption hoursRange={hoursRange} />
                    })
                }
            </div>
            <Button type="submit" handleSubmit={handleSubmit} />
        </div>
    )
}
