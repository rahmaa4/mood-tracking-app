import { useContext } from "react";
import { CurrentSlideContext } from "../../../../../utils/contexts/CurrentLogSlide/CurrentLogSlide"

export default function Button({ type, nextSlide, handleSubmit }: { type: "continue" | "submit", nextSlide?: number, handleSubmit?: () => void }) {
    const { setCurrentSlide } = useContext(CurrentSlideContext);

    const handleClick = () => {
        if (nextSlide) {
            setCurrentSlide(nextSlide);
        } else {
            handleSubmit && handleSubmit();
        }
    }

    return (
        <button className={`w-full md:w-[90%] md:mx-auto px-6 py-3 bg-blue600 text-neutral0 font-semibold tracking-normal 
            rounded-[10px] hover:cursor-pointer`}
        onClick={handleClick}
        >
            {type === "continue" ? "Continue" : "Submit"}
        </button>
    )
}