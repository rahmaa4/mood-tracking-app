import { useContext } from "react";
import Button from "../../UI/Button/Button";
import SlideTitle from "../../UI/SlideTitle/SlideTitle";
import { CurrentSlideContext } from "../../../../../utils/contexts/CurrentLogSlide/CurrentLogSlide";

type JournalSlide = {
    slide: number
    journalEntry: string,
    handleJournalEntry: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export default function JournalSlide({slide, journalEntry, handleJournalEntry}: JournalSlide) {
    const { currentSlide } = useContext(CurrentSlideContext);
    const nextSlide = slide + 1;

    return (
        <div className={`${currentSlide === slide ? 'flex' : 'hidden'} flex-col gap-6`}>
            <SlideTitle>
                Write about your day...
            </SlideTitle>
            <div>
                 <textarea className={`w-full min-h-[150px] bg-neutral0 border border-neutral300 
                 rounded-[10px] boxShadow resize-none outline-none px-4 py-3 tracking-tight placeholder:font-medium placeholder:italic`} placeholder="Today, I felt"
                    maxLength={150}
                    value={journalEntry}
                    onChange={handleJournalEntry}
                >
                </textarea>
                <p className={`w-full flex justify-end`}>
                    <span className={`text-xs text-neutral600 tracking-tight`}>{journalEntry.length}/150</span>
                </p>
            </div>
            <Button type="continue" nextSlide={nextSlide}/>
        </div>
    )
}
