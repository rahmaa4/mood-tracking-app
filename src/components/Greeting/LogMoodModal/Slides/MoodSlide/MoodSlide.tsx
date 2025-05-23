import { useContext } from "react";
import { moods } from "../../../../../utils/constants";
import MoodOption from "./MoodOption/MoodOption";
import Button from "../../UI/Button/Button";
import SlideTitle from "../../UI/SlideTitle/SlideTitle";
import { CurrentSlideContext } from "../../../../../utils/contexts/CurrentLogSlide/CurrentLogSlide";

type MoodSlide = {
  slide:number
}

export default function MoodSlide({ slide }: MoodSlide) {
  const { currentSlide } = useContext(CurrentSlideContext);
  const nextSlide = slide + 1;
  return (
    <div className={`flex-col gap-6 ${currentSlide === slide ? 'flex' : 'hidden'}`}>
      <SlideTitle>
        How was your mood today?
      </SlideTitle>
      <div className={`flex flex-col gap-5`}>
        {[...moods].reverse().map((moodData, index) => {
          return <MoodOption moodData={moodData} key={`mood-data-${index}`} />;
        })}
      </div>
      <Button type="continue" nextSlide={nextSlide} />
    </div>
  );
}
