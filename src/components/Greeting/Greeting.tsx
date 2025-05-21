
export default function Greeting({ dateToday, name }: { dateToday: string, name:string }) {
    
    return (
        <div className={`flex flex-col items-center mb-14`}>
            <div className={`flex flex-col items-center gap-[12px] my-8 `}>
                <p className={`font-bold text-xl text-blue600 md:text-[32px]`}>Hello, {name}!</p>
                <h1 className={`font-bold text-4xl text-center md:text-5xl`}>How are you feeling today?</h1>
                <p className={`text-neutral600 font-medium text-sm md:text-lg`}>{dateToday}</p>
            </div>
            <button className={`bg-blue600 py-3 px-6 text-neutral0 font-semibold text-md rounded-[10px] tracking-normal hover:cursor-pointer`}>Log today's mood</button>
        </div>
    )
}