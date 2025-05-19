import { type MoodsData } from "../../../utils/types";
import { iconSleep } from "../../../utils/constants";

type AverageScoreProps = {
    type: "mood" | "sleep";
    isEnoughData: boolean;
    currentAverageMood?: MoodsData | null;
    currentAverageSleep?: string;
    averageMoodTrend?: React.JSX.Element;
    averageSleepTrend?: React.JSX.Element
  
};

export default function AverageScore({
    type,
    isEnoughData,
    currentAverageMood,
    currentAverageSleep,
    averageMoodTrend,
    averageSleepTrend
}: AverageScoreProps) {
  return (
    <div>
      <div className={`flex items-center gap-2`}>
        <p className={`text-neutral900 text-lg font-semibold `}>
          Average {type === "mood" ? "Mood" : "Sleep"}
        </p>
        <span className={`text-sm text-neutral600`}>(Last 5 Check-ins)</span>
      </div>
      <div
        className={`min-h-[150px] rounded-2xl ${
          isEnoughData
            ? type === "mood"
              ? currentAverageMood?.bgColor
              : "bg-blue600"
            : "bg-blue100"
        } mt-3 relative`}
      >
        <div
            className={`min-h-[150px] w-full bg-no-repeat bg-right bg-[url("/assets/images/bg-pattern-averages.svg")] 
            py-5 px-4  flex flex-col justify-center `}
        >
          {isEnoughData ? (
            type === "mood" ? (
              <div>
                <div className={`flex items-center gap-4 mb-3`}>
                  <img src={currentAverageMood?.whiteIcon} alt="" />
                  <p className={`font-semibold text-xl`}>
                    {currentAverageMood?.name}
                  </p>
                </div>
                
                <div className={`flex gap-2`}>
                    {averageMoodTrend && averageMoodTrend}
                </div>
              </div>
            ) : (
              <div>
                
                <div className={`flex items-center gap-4 mb-3`}>
                  {iconSleep("average")}
                  <p className={`text-neutral0 text-xl font-semibold`}>
                    {currentAverageSleep ? currentAverageSleep : ""}
                  </p>
                </div>
                
                <div className={`flex gap-2`}>
                    {averageSleepTrend && averageSleepTrend}
                </div>
                
              </div>
            )
          ) : (
            <>
              <p className={`text-xl font-semibold mb-3`}>
                {type === "mood" ? "Keep tracking!" : "Not enough data yet!"}
              </p>
              <span className={`text-sm opacity-50`}>
                {type === "mood"
                  ? "Log 5 check-ins to see your average mood."
                  : "Track 5 nights to view average sleep"}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
