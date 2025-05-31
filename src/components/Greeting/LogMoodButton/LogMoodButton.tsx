type LogMoodButtonProps = {
    setIsDisplayLogMoodModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function LogMoodButton({setIsDisplayLogMoodModal}:LogMoodButtonProps) {
    return (
        <button
            className={`bg-blue600 py-3 px-6 text-neutral0 font-semibold text-md rounded-[10px] tracking-normal hover:cursor-pointer`}
            onClick={() => setIsDisplayLogMoodModal(true)}
        >
        Log today's mood
        </button>
    )
}