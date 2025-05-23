import { useContext } from "react";
import { CurrentSlideContext } from "../../../../../utils/contexts/CurrentLogSlide/CurrentLogSlide";
import { feelingsTags } from "../../../../../utils/helpers";
import Button from "../../UI/Button/Button";
import FeelingOption from "./FeelingOption/FeelingOption";
import SlideTitle from "../../UI/SlideTitle/SlideTitle";

type FeelingSlide = {
  slide:number
}
export default function FeelingSlide({ slide }: FeelingSlide) {
  const { currentSlide } = useContext(CurrentSlideContext);
  const nextSlide = slide + 1;
  return (
    <div className={`${currentSlide === slide ? 'flex' : 'hidden'} flex-col gap-6 `}>
      <div className={`flex flex-col gap-6`}>
        <SlideTitle>
            How did you feel?
        </SlideTitle>
        <p
          className={`text-neutral600 font-semibold text-sm md:text-base tracking-tight`}
        >
          Select up to three tags:
        </p>
      </div>
          
      <div className={`flex flex-wrap gap-x-2 gap-y-3`}>
        {feelingsTags.map((tag) => {
          return <FeelingOption tag={tag} />;
        })}
      </div>
      <Button type="continue" nextSlide={nextSlide} />
    </div>
  );
}
