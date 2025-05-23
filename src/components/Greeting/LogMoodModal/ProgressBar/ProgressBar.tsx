import ProgressStep from "./ProgressStep/ProgressStep";

export default function ProgressBar() {
    return (
        <div className={`flex justify-between gap-4 `}> 
            {new Array(4).fill(null).map((_, index) => {
                return <ProgressStep step={index} />
            })}
        </div>
    )
}