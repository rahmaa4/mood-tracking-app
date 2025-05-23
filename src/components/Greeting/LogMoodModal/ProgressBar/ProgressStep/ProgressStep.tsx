import { useContext } from "react";
import { CurrentSlideContext } from "../../../../../utils/contexts/CurrentLogSlide/CurrentLogSlide";

export default function ProgressStep({ step }: { step: number }) {
    const { currentSlide } = useContext(CurrentSlideContext);
    return (
        <div className={`h-[4px] w-full ${step === currentSlide ? 'bg-blue600' : 'bg-blue200'} rounded-full`}>
        </div>
    )
}

