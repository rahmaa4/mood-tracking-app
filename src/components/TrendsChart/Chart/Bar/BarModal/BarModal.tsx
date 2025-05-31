import type { Entry, BarModalSection } from "../../../../../utils/types";
import ModalContent from "./ModalContent/ModalContent";
import triangle from "../../../../../assets/images/triangle.svg";


const barModalSections:BarModalSection[] = ["Mood", "Sleep" ,"Reflection" , "Tags"];


export default function BarModal({
  entryData,
  isMouseOver,
  position,
}: {
  entryData: Entry;
  isMouseOver: boolean;
  position: number;
}) {
  return (
    <div
      className={`bg-neutral0 absolute ${
        position > 3 ? "left-[-175px]" : "right-[-175px]"
      } min-h-[219px] w-[175px] ${
        isMouseOver ? "display" : "hidden"
      } z-10 rounded-lg flex flex-col gap-3 p-3 border border-blue100 boxShadow`}
    >
      {barModalSections.map((type, index) => {
        return (
          <ModalContent
            entryData={entryData}
            type={type}
            key={`modal-sect-${index}`}
          />
        );
      })}
      <img
        src={triangle}
        alt=""
        className={`block w-[12px] h-[11px] absolute ${
          position > 3 ? "right-[-10px]" : " left-[-10px] rotate-180"
        } top-[90%]`}
      />
    </div>
  );
}
