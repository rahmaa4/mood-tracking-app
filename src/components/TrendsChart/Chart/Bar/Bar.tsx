import { type Entry, type MoodData } from "../../../../utils/types";
import { useEffect, useState } from "react";
import { months } from "../../../../utils/constants";
import { selectMoodData } from "../../../../utils/helpers";
import BarModal from "./BarModal/BarModal";

export default function Bar({
  entryData,//use entryData to determine entry's display
  position,
}: {
  entryData: Entry;
  position: number;
}) {

  const [createdAt, setCreatedAt] = useState(<></>);
  const [rowStart, setRowStart] = useState("");
  const [moodData, setMoodData] = useState<MoodData | null>(); //stores the relevant mood data/resources based on mood score.
  const [isMouseOver, setIsMouseOver] = useState(false);


  /** Use entryData.createdAt to formulate properly formatted log date */
  useEffect(() => {
    let month = months[new Date(entryData.createdAt).getMonth()];
    let date = new Date(entryData.createdAt).getDate();

    setCreatedAt(
      <>
        <p className={`text-xs text-neutral600 font-semibold`}>{month}</p>
        <p className={`text-[13px] font-semibold`}>{date}</p>
      </>
    );
  }, [entryData]);



  /* Using entry data to determine relevant mood resource and height based on sleep hours. */
  useEffect(() => {
    setMoodData(selectMoodData(entryData));
    if (entryData.sleepHours) {
      const sleepHours = entryData.sleepHours;
      if (0 <= sleepHours && sleepHours <= 2) {
        setRowStart("5");
      } else if (sleepHours >= 3 && sleepHours <= 4) {
        setRowStart("4");
      } else if (sleepHours >= 5 && sleepHours <= 6) {
        setRowStart("3");
      } else if (sleepHours >= 7 && sleepHours <= 8) {
        setRowStart("2");
      } else {
        setRowStart("1");
      }
    }
  }, [entryData]);

  return (
    <div className={`relative flex`}>
      <BarModal
        entryData={entryData}
        isMouseOver={isMouseOver}
        position={position}
      />
      <div className={`barGridRows`}>
        <div
          onMouseOver={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          style={{ gridRowStart: `${rowStart}` }}
          className={` w-10 mb-2 ${
            moodData && moodData.bgColor
          } rounded-full row-end-6 ${moodData && moodData.bgColor}
                    hover:cursor-pointer`}
        >
          {moodData ? (
            <img src={moodData.whiteIcon} className={`mx-auto my-[2px]`} />
          ) : null}
        </div>
        <div
          className={`flex flex-col items-center justify-end row-start-6 row-end-6`}
        >
          {createdAt}
        </div>
      </div>

    </div>
  );
}
