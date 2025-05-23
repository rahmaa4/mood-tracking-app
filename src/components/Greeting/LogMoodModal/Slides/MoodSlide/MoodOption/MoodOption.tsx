import { useContext, useEffect, useState } from "react";
import type { MoodsData } from "../../../../../../utils/types";
import RadioButton from "../../../UI/RadioButton/RadioButton";
import { CurrentMoodEntryContext } from "../../../../../../utils/contexts/CurrentMoodEntry/CurrentMoodEntry";

export default function MoodOption({ moodData }: { moodData: MoodsData }) {
  const [isActive, setIsActive] = useState(false);
  const { currentMood, setCurrentMood } = useContext(CurrentMoodEntryContext);
  
  useEffect(() => { currentMood?.name === moodData.name ? setIsActive(true) : setIsActive(false) }, [currentMood])
  

  return (
    <div
      onClick={() => setCurrentMood(moodData)}
      className={`w-full py-2 px-5 flex gap-3 items-center border ${isActive? 'border-blue600' : 'border-blue100'} 
      rounded-[12px] hover:cursor-pointer`}
    >
      <RadioButton isActive={isActive} />
      <p className={`w-[90%] font-semibold`}>{moodData.name}</p>
      <img
        className={`w-[30px] aspect-square`}
        src={`${moodData.coloredIcon}`}
      />
    </div>
  );
};