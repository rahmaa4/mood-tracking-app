
export default function Greeting({ dateToday }: { dateToday: string }) {
    
    return (
        <div className={`flex flex-col items-center mb-14`}>
            <div className={`flex flex-col items-center gap-[12px] my-8 `}>
                <p className={`font-bold text-xl text-blue600 md:text-[32px]`}>Hello, Lisa!</p>
                <h1 className={`font-bold text-4xl text-center md:text-5xl`}>How are you feeling today?</h1>
                <p className={`text-neutral600 text-sm md:text-lg`}>{dateToday}</p>
            </div>
            <button className={`bg-blue600 py-3 px-6 text-neutral0 font-semibold text-md rounded-[10px] tracking-normal`}>Log today's mood</button>
        </div>
    )
}