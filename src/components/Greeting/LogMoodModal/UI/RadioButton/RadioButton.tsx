type RadioButton = {
    isActive: boolean
}

export default function RadioButton({isActive}:RadioButton) {
    return (
        <div className={`min-w-[20px] aspect-square ${isActive? "border-none bg-blue600": "border"} border-blue200 rounded-full flex justify-center items-center`}>
            <div className={`min-w-[10px] aspect-square  bg-neutral0 rounded-full`}></div>
        </div>
    )
}